import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faFolder} from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import {IProject} from "@interfaces";

const ProjectItem: FC<IProject> = function ({isOpen = false,openProject,name, pid}) {
    return (
        <div className="flex p-2 text-xl cursor-pointer hover:bg-white/40" onClick={() => openProject(pid,name)}>
            <div className="icon "><FontAwesomeIcon icon={isOpen ? faFolderOpen : faFolder} className="text-[#FF7179]"/></div>
            <div className="name text-white ml-2 truncate max-w-[180px]">{name}</div>
        </div>
    )
}
export default ProjectItem
