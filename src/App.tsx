import MainView from "./views/MainView";
import './App.css';
import Header from "./views/Header";
import {useState} from "react";

function App() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className="App">
            <Header isOpen={isOpen} handleOpen={() => setIsOpen(c => !c)}/>
            <MainView isOpen={isOpen}/>
        </div>
    )
}

export default App
