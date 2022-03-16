/*
*  Create by xic, date: 2022/3/14
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, { FC } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import { HeaderType } from '../../interfaces';
import classNames from 'classnames';

const Header:FC<HeaderType> = function({isOpen, handleOpen}){
    const isActive = classNames("cursor-pointer",{
        "text-orange-500":isOpen
    })
    return (
        <div className="h-12 border-b border-b-gray-600 border-solid flex items-center text-white">
            <AppsIcon fontSize="large" className={isActive} onClick={handleOpen}/>
        </div>
    )
}
export default Header
