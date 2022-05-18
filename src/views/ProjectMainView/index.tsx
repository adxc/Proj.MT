/*
*  Create by xic, date: 2022/5/17
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React from 'react';
import TerminalView from "../TerminalView";
import ReactLogo from '../../assets/images/react.svg';
import Vite from '../../favicon.svg'

const ProjectMainView = function () {
    return (
        <div>
            <div className="px-10">
                <div className="font-[butter-sans]  text-[36px] mt-10 text-white">Demo</div>
                <div className="mt-4 bg-indigo-500/40 h-[calc(100vh-200px)] rounded-xl overflow-hidden">
                    <div className="flex h-24 w-full">
                        <div className="w-full flex justify-center items-center">
                            <img src={ReactLogo} alt="" width={124}/>
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <img src={Vite} alt="" width={72}/>
                        </div>
                        <div className="w-full bg-sky-700 flex justify-center items-center">213123</div>
                        <div className="w-full bg-blue-300 flex justify-center items-center">123123</div>
                    </div>
                    <div>123123123</div>
                </div>
            </div>
            <TerminalView/>
        </div>
    );
};
export default ProjectMainView;
