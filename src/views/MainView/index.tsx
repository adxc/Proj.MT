/*
*  Create by xic, date: 2022/2/26
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {FC, useEffect} from 'react';
import SiderMenu from '../SiderMenu';
import TerminalView from "../TerminalView";
import {IMain} from "@interfaces";
import { useSpring, animated } from 'react-spring'
import TabPanel from '@components/TabPanel';
import ProjectMainView from "../ProjectMainView";

const MainView:FC<IMain> = function({isOpen, openProject}){
    const [styles,api] = useSpring(() => ({
        from: {
            width: "0px",
            height: "100%"
        }
    }))
    useEffect(() =>{
        api({
            to: {
                width: isOpen ? "0px" : '260px',
            }
        })
    },[isOpen])
    return (
        <div className="flex h-[calc(100vh-3rem)]">
            <animated.div style={styles} className="overflow-hidden"><SiderMenu openProject={openProject}/></animated.div>
            <div className="h-full relative w-full">
                <TabPanel value={0} index={0}>
                    <ProjectMainView/>
                </TabPanel>
            </div>
        </div>
    )
}
export default MainView
