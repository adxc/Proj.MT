/*
*  Create by xic, date: 2022/5/17
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React from 'react';
import TerminalView from "../TerminalView";

const ProjectMainView = function () {
    return (
        <div>
            <div className="px-10">
                <div className="font-[butter-sans]  text-[36px] mt-10 text-white">Demo</div>
                <div className="mt-4 bg-indigo-500/40 h-[calc(100vh-200px)] rounded-xl">123123</div>
            </div>
            <TerminalView/>
        </div>
    );
};
export default ProjectMainView;
