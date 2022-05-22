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
import {ISiderMenuProps} from "@interfaces";

const actions = [
	{ icon: <FontAwesomeIcon icon={faFileUpload} fontSize={16} />, name: '导入',type: 'import' },
	{ icon: <FontAwesomeIcon icon={faFolderPlus} fontSize={16} />, name: '新建',type: 'create' },
]
const SiderMenu: FC<ISiderMenuProps> = function ({openProject}) {
	const [openIndex, setOpenIndex] = useState<any>(1)
	function handleOpen(pid: any, name: string) {
		openProject({ pid, name })
		setOpenIndex(pid)
	}
	function handleClick(type:string) {
		if(type === 'import'){
			window.electronAPI.openFolder().then((res: any) => {
				console.log(res)
			})
		}
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
					Array.from({length:10}, (_,i) => i + 1).map((item: any) => {
						return <ProjectItem key={item} name={`demo${item}`} pid={item} openProject={handleOpen} isOpen={openIndex === item}/>
					})
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
