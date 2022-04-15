/*
*  Create by xic, date: 2022/2/26
*      _   _        .      .                         ___           |"|          _   _     
*     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`    
*      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)     
*  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
*/
import React, {useEffect, useState} from 'react';
import { TextField,InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus,faFileUpload, faFolderOpen, faFolder} from '@fortawesome/free-solid-svg-icons';
import ProjectItem from '@components/ProjectItem';

const actions = [
    { icon: <FontAwesomeIcon icon={faFileUpload} fontSize={16}/>, name: '导入' },
    { icon: <FontAwesomeIcon icon={faFolderPlus} fontSize={16}/>, name: '新建' },
];
const SiderMenu = function(){
    const [open, setOpen] = useState(false);
    function handleOpen(){
        setOpen((c:boolean) => !c)
    }
    return (
        <div className="basis-60 h-full bg-[#41106C] rounded-2xl shadow-md shadow-[#41106C] p-4 flex flex-col">
            <TextField label="Search"
                       variant="outlined"
                       size="small"
                       className="bg-[#6C4B8A]/60 rounded-lg text-white"
                       InputProps={{
                           endAdornment:<InputAdornment position="end"><SearchIcon sx={{ color: '#fff' }} fontSize="small"/></InputAdornment>,
                       }}

            />
            <div className="my-5 h-4/5">
                <ProjectItem isOpen={open} openProject={handleOpen}/>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
            </div>
            <SpeedDial
                ariaLabel="add new project"
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </div>
    )
}
export default SiderMenu
