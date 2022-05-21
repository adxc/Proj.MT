/*
*  Create by xic, date: 2022/5/21
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {FC} from 'react';
import ListItem from "@mui/material/ListItem";
import { ListChildComponentProps } from "react-window";
const BaseListItem: FC<ListChildComponentProps> = function (props) {
    const { index, style } = props;
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            123
        </ListItem>
    )
}
export default BaseListItem
