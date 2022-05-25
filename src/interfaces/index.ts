/*
*  Create by xic, date: 2022/3/16
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
import { ReactNode } from 'react';
import { ListChildComponentProps } from "react-window";
export interface IProjectTabs {
    projectList: any[];
}
export interface IHeader {
    isOpen: boolean;
    handleOpen: () => void;
}
export interface ISiderMenuProps{
    handlePreview: (pid:any) => void;
}
export interface IMain {
    isOpen: boolean;
}
export interface IProjectItemProps {
    isOpen: boolean;
    name: string;
    pid: any;
    openProject: (pid:any, name:string) => void;
}
export interface ITabPanelProps{
    index: number;
    value: number;
    classes?: string | string[];
    children?: ReactNode;
}
export interface IBaseListItemProps extends ListChildComponentProps{
    onDelete?: (itemInfo:any) => void;
    onControl?: (type:string,itemInfo:any) => void;
    onUpdate?: (itemInfo:any) => void;
    itemInfo: any;
    type: string;
    status?: string;
}
export interface IListItem {
    name?: string;
    value?: string;
}
export interface ICommandViewProps{
    commandList: IListItem[]
}

export interface IPackageViewProps{
    packageList: IListItem[]
}
export interface IProjectBase{
    name:string;
    pid:string;
}
export interface IProject extends IProjectBase{
    packageList: any[];
    commandList: any[];
    path: string;
    sizes: string;
    type?: string;
}
export interface IProjectStore{
    projectList: IProjectBase[];
}
