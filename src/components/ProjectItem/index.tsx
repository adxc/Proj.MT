import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faFolder} from '@fortawesome/free-solid-svg-icons';
import { FC , useState, MouseEvent} from 'react';
import {IProjectItemProps} from "@interfaces";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const ProjectItem: FC<IProjectItemProps> = function ({isOpen = false,openProject,name, pid,onDelete}) {
    const [contextMenu, setContextMenu] = useState<{
        mouseX: number;
        mouseY: number;
    } | null>(null);
    function handleContextMenu(event: MouseEvent) {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                } : null,
        );
    };
    function handleClick(event: MouseEvent) {
        event.stopPropagation();
        onDelete(pid)
    }
    function handleClose(event: MouseEvent) {
        event.stopPropagation();
        setContextMenu(null);
    }
    return (
        <div className="flex p-2 text-xl cursor-pointer hover:bg-white/40" onContextMenu={handleContextMenu} onClick={() => openProject(pid,name)}>
            <div className="icon "><FontAwesomeIcon icon={isOpen ? faFolderOpen : faFolder} className="text-[#FF7179]"/></div>
            <div className="name text-white ml-2 truncate max-w-[180px]">{name}</div>
            <Menu
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                }
            >
                <MenuItem onClick={handleClick}>删除<BackspaceOutlinedIcon/></MenuItem>
            </Menu>
        </div>
    )
}
export default ProjectItem
