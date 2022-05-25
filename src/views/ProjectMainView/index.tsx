/*
*  Create by xic, date: 2022/5/17
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, { FC } from 'react';
import TerminalView from "../TerminalView";
import ReactLogo from '../../assets/images/react.svg';
import Vite from '../../favicon.svg'
import CommandListView from "../CommandListView";
import PackageListView from "../PackageListView";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import {IProject} from "@interfaces";

const ProjectMainView:FC<IProject> = function ({pid,name,packageList,commandList,path,sizes}) {
    return (
        <div>
            <div className="px-10">
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
                                <p className="text-sm">项目大小</p>
                                {sizes}
                            </div>
                            <div className="w-full flex justify-center items-center text-4xl">
                                <SettingsOutlinedIcon fontSize="inherit" className="cursor-pointer"/>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="basis-1/2 p-4">
                                <CommandListView commandList={commandList}/>
                            </div>
                            <div className="basis-1/2 p-4">
                                <PackageListView packageList={packageList}/>
                            </div>
                        </div>
                    </div>
                }/>

            </div>
            <TerminalView/>
        </div>
    );
};
export default ProjectMainView;
