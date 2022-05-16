/*
*  Create by xic, date: 2022/3/20
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {useLayoutEffect, FC, MouseEvent, useState, useMemo, SyntheticEvent} from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import {IProjectTabs} from "../../interfaces";
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";


const ProjectTabs: FC<IProjectTabs> = function({projectList=[{a:1},{a:1},{a:1},{a:1},{a:1}],closeProject}){
    const [value, setValue] = useState(0);
    // 选择项目
    function handleSelectProject(e: SyntheticEvent,value: number) {
        console.log(1)
        setValue(value);
    }
    // 关闭项目
    function handleCloseProject(e: MouseEvent){
        e.stopPropagation();
        console.log(2)
    }
    return (
        <div className="flex w-full h-full">
            <Tabs
                value={value}
                variant="scrollable"
                scrollButtons="auto"
                textColor="inherit"
                aria-label="projects tabs"
                onChange={handleSelectProject}
            >
                <Tab label="Item One"
                />
                <Tab label="Item Two"
                     />
                <Tab label="Item Three" />
                <Tab label="Item Four" />
                <Tab label="Item Five" />
                <Tab label="Item Six" />
                <Tab label="Item Seven" />
            </Tabs>
        </div>

    )
}
export default ProjectTabs
