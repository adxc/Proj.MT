/*
*  Create by xic, date: 2022/2/26
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {FC, useEffect, useState} from 'react';
import SiderMenu from '../SiderMenu';
import {IMain, IProject} from "@interfaces";
import { useSpring, animated } from 'react-spring'
import TabPanel from '@components/TabPanel';
import ProjectMainView from "../ProjectMainView";
import TerminalView from "../TerminalView";

const MainView:FC<IMain> = function({isOpen}){
    const [preview, setPreview] = useState<IProject>({
        pid: '',
        name: '',
        path: '',
        commandList: [],
        packageList: [],
        sizes: '',
    });
    const [styles,api] = useSpring(() => ({
        from: {
            width: "0px",
            height: "100%"
        }
    }))
    useEffect(() =>{
        api({
            to: {
                width: isOpen ? "260px" : '0px',
            }
        })
    },[isOpen])
    function handlePreview(pid:any){
        window.electronAPI.queryProjectDetails(pid).then((res: any) => {
            setPreview(res)
        })
    }
    return (
        <div className="flex h-[calc(100vh-3rem)]">
            <animated.div style={styles} className="overflow-hidden"><SiderMenu handlePreview={handlePreview}/></animated.div>
            <div className="h-full relative w-full">
                <TabPanel value={0} index={0}>
                    {
                        preview.pid && <ProjectMainView {...preview}/>
                    }
                </TabPanel>
                {/*<TerminalView />*/}
            </div>
        </div>
    )
}
export default MainView
