/*
*  Create by xic, date: 2022/5/17
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {FC, useState} from 'react';
import TerminalView from "../TerminalView";
import ReactLogo from '../../assets/images/react.svg';
import Vite from '../../favicon.svg'
import CommandListView from "../CommandListView";
import PackageListView from "../PackageListView";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import {IProject} from "@interfaces";
import classNames from "classnames";
import { useSpring, animated } from 'react-spring'

const ProjectMainView:FC<IProject> = function ({pid,name,packageList,commandList,sizes}) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
    const [executeCmd, setExecuteCmd] = useState<any>([]);
    const styles = useSpring({ transition: 'height .5s' })
    function handleCommand(type:string,command:string){
        setExecuteCmd([...executeCmd,command])
    }
    function handleCollapse() {
        setIsCollapsed(!isCollapsed)
    }
    const projectMainStyle = classNames(
        'px-10 overflow-auto',
        {
            'h-[calc(100vh-26rem)]': !isCollapsed,
            'h-[calc(100vh-3rem)]': isCollapsed,
        }
    )
    return (
        <>
            <animated.div style={styles} className={projectMainStyle} >
                <div className="font-[butter-sans]  text-[36px] mt-10 text-white">{name}</div>
                <Paper elevation={3}
                       sx={{
                           background:'transparent'
                       }}
                       children={
                    <div className="mt-4 bg-indigo-500/40 h-[calc(100vh-200px)] overflow-hidden">
                        <div className="flex h-24 w-full text-2xl">
                            <div className="w-full flex justify-center items-center">
                                <Avatar alt="project framework" src={ReactLogo} sx={{ width: 64, height: 64 }}/>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center text-white">
                                <p className="text-sm">????????????</p>
                                {sizes}
                            </div>
                            <div className="w-full flex justify-center items-center text-4xl">
                                <SettingsOutlinedIcon fontSize="inherit" className="cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="basis-1/2 p-4">
                                <CommandListView commandList={commandList} onClick={handleCommand}/>
                            </div>
                            <div className="basis-1/2 p-4">
                                <PackageListView packageList={packageList}/>
                            </div>
                        </div>
                    </div>
                }/>
            </animated.div>
            <TerminalView executeCmd={executeCmd} onCollapse={handleCollapse} isCollapsed={isCollapsed}/>
        </>
    );
};
export default ProjectMainView;
