/*
*  Create by xic, date: 2022/5/17
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, { FC } from 'react';
import classNames from "classnames";
import { ITabPanelProps } from "@interfaces";

const TabPanel: FC<ITabPanelProps> = function ({value, index, children, classes}) {
    const cls = classNames( {
        'hidden': value !== index
    },classes);
    return (
        <div className={cls}>
            {children}
        </div>
    )
}
export default TabPanel;
