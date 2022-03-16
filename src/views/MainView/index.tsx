/*
*  Create by xic, date: 2022/2/26
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {FC} from 'react';
import SiderMenu from '../SiderMenu';
import {MainType} from "../../interfaces";

const MainView:FC<MainType> = function({isOpen}){
    return (
        <div className="flex h-[calc(100vh-3rem)]">
            {isOpen && <SiderMenu/>}
        </div>
    )
}
export default MainView
