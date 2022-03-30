/*
*  Create by xic, date: 2022/2/26
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {FC, useEffect, useState} from 'react';
import SiderMenu from '../SiderMenu';
import {IMain} from "../../interfaces";
import { useSpring, animated } from 'react-spring'

const MainView:FC<IMain> = function({isOpen}){
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
    return (
        <div className="flex h-[calc(100vh-3rem)] relative">
            <div className="h-full absolute">
                <animated.div style={styles}><SiderMenu/></animated.div>
            </div>
            dada
        </div>
    )
}
export default MainView
