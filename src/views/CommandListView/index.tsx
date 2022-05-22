/*
*  Create by xic, date: 2022/5/21
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import BaseListItem from "@components/BaseListItem";

function renderRow(props:ListChildComponentProps){
    return (
        <BaseListItem {...props} itemInfo={{}} type='command'/>
    )
}

const CommandListView = function () {
    return (
        <div>
            <div className="font-[butter-sans] text-xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-teal-500 text-center">Command List</div>
            <div className="h-[calc(100vh-360px)] text-white">
                <AutoSizer>
                    {({ height, width }) => (
                        <FixedSizeList
                            height={height}
                            width={width}
                            itemSize={46}
                            itemCount={200}
                            overscanCount={5}
                        >
                            {renderRow}
                        </FixedSizeList>
                    )}
                </AutoSizer>
            </div>
        </div>
    )
}
export default CommandListView
