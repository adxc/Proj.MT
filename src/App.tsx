import MainView from "./views/MainView";
import './App.css';
import Header from "./views/Header";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {initProjectList} from "./store/projectSlice";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    useEffect(() => {
        window.electronAPI.queryAllProjectList().then((res: any) => {
            if(res.length > 0){
                dispatch(initProjectList(res))
            }
        })
    })
    return (
        <ThemeProvider theme={createTheme({
            palette: {
                mode: 'dark',
            },
        })}>
            <div className="App">
                <Header isOpen={isOpen} handleOpen={() => setIsOpen(c => !c)}/>
                <MainView isOpen={isOpen} />
            </div>
        </ThemeProvider>
    )
}

export default App
