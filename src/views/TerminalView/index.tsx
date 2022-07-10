import React, {FC, SyntheticEvent, useEffect, useRef, useState} from 'react'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import 'xterm/css/xterm.css'
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp'
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp'
import { useSpring, animated } from 'react-spring'
import classNames from 'classnames'
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import TabPanel from '@components/TabPanel';
import TerminalItem from "@components/TerminalItem";

const TerminalView: FC<any> = function ({ executeCmd = [],isCollapsed,onCollapse}) {
	const [termTabValue, setTermTabValue] = useState<number>(0)
	const styles = useSpring({ transition: 'height .5s' })
	const teriminalStyle = classNames(
		'w-full bg-black text-white px-2 absolute bottom-0',
		{
			'h-[30rem]': !isCollapsed,
			'h-10': isCollapsed,
		}
	)
	useEffect(() => {
		// if(!isCollapsed){
		// 	fitAddon.current.fit()
		// 	window.electronAPI.resizeTerminal(term.current.cols, term.current.rows)
		// }
	}, [isCollapsed])
	useEffect(() => {
		console.log(executeCmd)
		// if (executeCmd.length > 0) {
		// 	window.electronAPI.sendTerminalData(`npm run ${executeCmd[0].name}\r\n`)
		// }
	}, [executeCmd])
	function handleSelectTerminalTab(e: SyntheticEvent,value: number) {
		setTermTabValue(value)
	}
	// 渲染多终端
	function renderTerminalTab() {
			return (
				<div className="flex">
					{
						executeCmd.map((item: any, index: number) => (
							<TabPanel value={termTabValue} index={index} classes="basis-full">
								<TerminalItem isResize={!isCollapsed && termTabValue === index}/>
							</TabPanel>
						))
					}
					{
						executeCmd.length > 1 && (
							<div className="basis-40 bg-gray-800 p-2 flex-none h-[28rem] flex">
								<Tabs
									variant="scrollable"
									scrollButtons="auto"
									textColor="inherit"
									aria-label="projects tabs"
									orientation="vertical"
									classes={{
										root: 'w-full',
									}}
									value={termTabValue}
									onChange={handleSelectTerminalTab}
								>
									{
										executeCmd.map((item: any) => (
											<Tab label={`${item.name}`} icon={<TerminalOutlinedIcon/>} iconPosition="start" sx={{justifyContent:"flex-start",minHeight:42}}/>
										))
									}
								</Tabs>
							</div>
						)
					}
				</div>
			)
	}
	return (
		<animated.div style={styles} className={teriminalStyle}>
			<div className="flex my-2 justify-between items-center">
				<span>终端</span>
				<div className="flex items-center">
					<span className="cursor-pointer mr-1" onClick={onCollapse}>
						{!isCollapsed ? (
							<ArrowCircleDownSharpIcon />
						) : (
							<ArrowCircleUpSharpIcon />
						)}
					</span>
						{/*<span><HighlightOffSharpIcon className="text-red-700 cursor-pointer"/></span>*/}
					</div>
				</div>
			{renderTerminalTab()}
		</animated.div>
	)
}
export default TerminalView
