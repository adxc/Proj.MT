/*
*  Create by xic, date: 2022/5/25
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IProjectStore, IProject, IProjectBase} from "@interfaces";

const initialState: IProjectStore = {
    projectList: [],
}
export const projectSlice = createSlice({
    name: 'initData',
    initialState,
    reducers: {
        initProjectList(state, action: PayloadAction<IProject[]>) {
            state.projectList = action.payload;
        },
        addProject(state, action: PayloadAction<IProjectBase>) {
            state.projectList.push(action.payload)
        },
        removeProject(state, action: PayloadAction<string>) {
            state.projectList = state.projectList.filter((pro: any) => pro.pid !== action.payload)
        },
        openProject(state, action: PayloadAction<IProjectBase>) {
            state.projectList = state.projectList.concat([action.payload])
        }
    }
})
export const { addProject, removeProject ,initProjectList} = projectSlice.actions
export default projectSlice.reducer
