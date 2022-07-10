/*
*  Create by xic, date: 2022/7/9
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {FC, useEffect, useMemo, useRef} from 'react';
import {Terminal} from "xterm";
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import _ from "lodash";

const TerminalItem:FC<any> = function ({isResize}) {
    const myRef= useRef<HTMLDivElement>(null)
    const myPid= useRef<number>(0)
    const fitAddon = useMemo(() => new FitAddon(), [])
    const term = useMemo(() =>  new Terminal({
        rendererType: 'canvas',
        disableStdin: false,
        cursorBlink: true,
        convertEol: true,
    }), [])
    useEffect(() => {
        term.loadAddon(fitAddon)
        term.open(myRef.current as HTMLDivElement)
        const resize = _.debounce(() => {
            fitAddon.fit()
            console.log(myPid.current)
            window.electronAPI.resizeTerminal(myPid.current,term.cols, term.rows)
        },500)
        initTerminal(term)
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize',resize)
        }
    },[])
    useEffect(() => {
        if(isResize){
            fitAddon.fit()
            window.electronAPI.resizeTerminal(myPid.current,term.cols, term.rows)
        }
    },[isResize])
    async function initTerminal(term:any){
        const pid = await window.electronAPI.createTerminal()
        myPid.current = pid
        window.electronAPI.receiveTerminalData((respond: string | Uint8Array) => {
            const [id,data] = respond
            if(id === pid){
                term.write(data)
            }
        })
        term.onData((data:any) => {
            window.electronAPI.sendTerminalData(pid,data)
        })
    }
    return (
        <div ref={myRef}/>
    )
}
export default TerminalItem
//todo: 封装term成class
