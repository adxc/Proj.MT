/*
*  Create by xic, date: 2022/3/16
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
export interface IProjectTabs {
    projectList: any[];
    closeProject: () => void;
}
export interface IHeader extends IProjectTabs{
    isOpen: boolean;
    handleOpen: () => void;
}
export interface IMain {
    isOpen: boolean;
    openProject: () => void;
}
export interface IProject {
    isOpen: boolean;
    openProject: () => void;
}
