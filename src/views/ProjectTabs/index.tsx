/*
*  Create by xic, date: 2022/3/20
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, { FC, MouseEvent, useState, SyntheticEvent} from 'react';
import {IProjectTabs} from "@interfaces";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";


const ProjectTabs: FC<IProjectTabs> = function({projectList=[{a:1},{a:1},{a:1},{a:1},{a:1}]}){
    const [value, setValue] = useState(0);
    // 选择项目
    function handleSelectProject(e: SyntheticEvent,value: number) {
        console.log(1)
        setValue(value);
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
                <Tab label="Item One"/>
                <Tab label="Item Two"/>
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
