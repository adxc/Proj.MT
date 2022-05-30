/*
 *  Create by xic, date: 2022/2/26
 *      _   _        .      .                         ___           |"|          _   _
 *     (_)-(_)     .  .:::.            ,,,,,         .|||.         _|_|_        '\\-//`
 *      (o o)        :(o o):  .       /(o o)\        (o o)         (o o)         (o o)
 *  ooO--(_)--Ooo-ooO--(_)--Ooo----ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-ooO--(_)--Ooo-
 */
import React, {FC, useState} from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faFileUpload } from '@fortawesome/free-solid-svg-icons'
import ProjectItem from '@components/ProjectItem'
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store";
import { addProject ,removeProject} from "../../store/projectSlice";
import {IProjectBase, ISiderMenuProps} from "@interfaces";


const actions = [
	{ icon: <FontAwesomeIcon icon={faFileUpload} fontSize={16} />, name: '导入',type: 'import' },
	{ icon: <FontAwesomeIcon icon={faFolderPlus} fontSize={16} />, name: '新建',type: 'create' },
]
const SiderMenu: FC<ISiderMenuProps> = function ({handlePreview}) {
	const { projectList } = useSelector((state:RootState) => state.project)
	const dispatch = useDispatch()
	const [openIndex, setOpenIndex] = useState<any>()
	function handleOpen(pid: any) {
		setOpenIndex(pid)
		handlePreview(pid)
	}
	function handleClick(type:string) {
		if(type === 'import'){
			window.electronAPI.openFolder().then((res: IProjectBase) => {
				if(res){
					dispatch(addProject(res))
				}
			})
		}
	}
	function handleDelete(pid: string) {
		window.electronAPI.deleteProject(pid).then(() => {
			dispatch(removeProject(pid))
		})
	}
	return (
		<div className="basis-60 h-full bg-[#41106C] shadow-md shadow-[#41106C] p-4 flex flex-col">
			<TextField
				label="Search"
				variant="outlined"
				size="small"
				className="bg-[#6C4B8A]/60 rounded-lg text-white"
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<SearchIcon sx={{ color: '#fff' }} fontSize="small" />
						</InputAdornment>
					),
				}}
			/>
			<div className="my-5 h-4/5">
				{
					projectList.map((item:IProjectBase) => (
						<ProjectItem key={item.pid} name={item.name} pid={item.pid} onDelete={handleDelete} openProject={handleOpen} isOpen={openIndex === item.pid}/>
					))
				}
			</div>
			<SpeedDial ariaLabel="add new project" icon={<SpeedDialIcon />}>
				{actions.map((action) => (
					<SpeedDialAction
						key={action.name}
						icon={action.icon}
						tooltipTitle={action.name}
						onClick={() => handleClick(action.type)}
					/>
				))}
			</SpeedDial>
		</div>
	)
}
export default SiderMenu
