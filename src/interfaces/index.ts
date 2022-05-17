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
export interface IProjectTabs {
    projectList: any[];
}
export interface IHeader extends IProjectTabs{
    isOpen: boolean;
    handleOpen: () => void;
}
export interface ISiderMenuProps{
    openProject: (project:any) => void;
}
export interface IMain {
    isOpen: boolean;
    openProject: (project:any) => void;
}
export interface IProject {
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
