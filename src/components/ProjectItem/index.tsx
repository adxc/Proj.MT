import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faFolder} from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import {IProject} from "../../interfaces";

const ProjectItem: FC<IProject> = function ({isOpen = false,openProject}){
    return (
        <div className="flex p-2 text-xl cursor-pointer hover:bg-white/40" onClick={openProject}>
            <div className="icon "><FontAwesomeIcon icon={isOpen ? faFolderOpen : faFolder} className="text-[#FF7179]"/></div>
            <div className="name text-white ml-2 truncate max-w-[180px]">22222223333333333333333333333322</div>
        </div>
    )
}
export default ProjectItem
