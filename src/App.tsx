import MainView from "./views/MainView";
import './App.css';
import Header from "./views/Header";
import {useState} from "react";
import {useProject} from "./hooks";

function App() {
    const {projectList, openProject, closeProject} = useProject()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className="App">
            <Header isOpen={isOpen} closeProject={closeProject} handleOpen={() => setIsOpen(c => !c)} projectList={projectList}/>
            <MainView isOpen={isOpen} openProject={openProject}/>
        </div>
    )
}

export default App
