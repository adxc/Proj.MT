/*
*  Create by xic, date: 2022/5/21
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {FC} from 'react';
import {ListItem, ListItemText, Stack} from '@mui/material';
import {IBaseListItemProps} from "@interfaces";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import BrowserUpdatedOutlinedIcon from '@mui/icons-material/BrowserUpdatedOutlined';
const BaseListItem: FC<IBaseListItemProps> = function ({status,type,index, style, itemInfo,onControl,onDelete,onUpdate}) {
    function randerRadio(){
        if(type === 'package'){
            return (
                <Stack direction="row" spacing={1}>
                    <BrowserUpdatedOutlinedIcon className="cursor-pointer text-[#FF7179]" onClick={() => onUpdate?.(itemInfo)}/>
                    <DeleteOutlineOutlinedIcon className="cursor-pointer text-[#FF7179]" onClick={() => onDelete?.(itemInfo)}/>
                </Stack>
            )
        }
        return (
            <Stack direction="row" spacing={1}>
                {
                    status === 'running' ?
                        (
                            <>
                                <RestartAltOutlinedIcon className="cursor-pointer text-[#FF7179]" onClick={() => onControl?.('restart',itemInfo)}/>
                                <StopCircleOutlinedIcon className="cursor-pointer text-[#FF7179]" onClick={() => onControl?.('stop',itemInfo)}/>
                            </>
                        ):
                        <PlayCircleFilledWhiteOutlinedIcon className="cursor-pointer text-[#FF7179]" onClick={() => onControl?.('start',itemInfo)}/>

                }

           </Stack>
        )

    }
    return (
        <ListItem
            style={style}
            key={index}
        >
            <ListItemText primary={itemInfo.name} secondary={itemInfo.value}/>
            {randerRadio()}
        </ListItem>
    )
}
export default BaseListItem
