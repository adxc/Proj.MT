/*
*  Create by xic, date: 2022/5/25
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
import { configureStore } from '@reduxjs/toolkit'
import projectReducer from "./projectSlice";

export type RootState = ReturnType<typeof store.getState>
export const store = configureStore({
    reducer: {
        project: projectReducer
    },
})
