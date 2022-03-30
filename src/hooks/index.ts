/*
*  Create by xic, date: 2022/3/30
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
import {useReducer} from "react";

export function useProject() {
    const [state, dispatch] = useReducer(reducer,{projectList:[]})
    function reducer(state: any, action: { type: any;payload:any }){
        switch(action.type){
            case 'open':
                return { projectList : state.projectList.concat([...action.payload])}
            case 'close':
                return { projectList: state.projectList.filter((pro:any) => pro.id !== action.payload)}
        }
    }
    function openProject(){

    }
    function closeProject(){

    }
    return {
        projectList: state?.projectList,
        openProject,
        closeProject
    }
}
