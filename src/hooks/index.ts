/*
*  Create by xic, date: 2022/3/30
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
import { useReducer } from "react";

export function useProject() {
    const [state, dispatch] = useReducer(reducer,{ projectList:[] })
    function reducer(state: any, action: { type: string; payload:any }){
        switch(action.type){
            case 'open':
                return { projectList : state.projectList.concat([...action.payload])}
            case 'close':
                return { projectList: state.projectList.filter((pro:any) => pro.id !== action.payload)}
        }
    }
    // 打开项目
    function openProject(project:any){
        dispatch({type:'open',payload:[project]})
    }
    // 关闭项目
    function closeProject(id:any){
        dispatch({type:'open',payload:id})
    }
    return {
        projectList: state?.projectList,
        openProject,
        closeProject
    }
}
