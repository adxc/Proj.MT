import { FC, useEffect, useRef, useState } from 'react'
import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp'
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp'
import 'xterm/css/xterm.css'
import { useSpring, animated } from 'react-spring'
import classNames from 'classnames'
import _ from 'lodash';

const TerminalView: FC<any> = function ({ executeCmd = [], path = '' ,isCollapsed,onCollapse}) {
	const terminalRef = useRef<HTMLDivElement>(null)
	const styles = useSpring({ transition: 'height .5s' })
	const term = useRef(new Terminal({
		rendererType: 'canvas',
		disableStdin: false,
		cursorBlink: true,
		convertEol: true,
	}))
	const fitAddon = useRef(new FitAddon())
	const teriminalStyle = classNames(
		'w-full bg-black text-white px-2 absolute bottom-0',
		{
			'h-[30rem]': !isCollapsed,
			'h-10': isCollapsed,
		}
	)
	useEffect(() => {
		term.current.loadAddon(fitAddon.current)
		term.current.open(terminalRef.current as HTMLDivElement)
		const resize = _.debounce(() => {
			fitAddon.current.fit()
			console.log(term.current.cols, term.current.rows)
			window.electronAPI.resizeTerminal(term.current.cols, term.current.rows)
		},500)
		window.electronAPI.receiveTerminalData((data: string | Uint8Array) => {
			term.current.write(data)
		})
		term.current.onData((data) => {
			window.electronAPI.sendTerminalData(data)
		})
		window.addEventListener('resize', resize)
		return () => {
			window.removeEventListener('resize',resize)
		}
	}, [])
	useEffect(() => {
		if(!isCollapsed){
			fitAddon.current.fit()
			window.electronAPI.resizeTerminal(term.current.cols, term.current.rows)
		}
	}, [isCollapsed])
	useEffect(() => {
		if (executeCmd.length > 0) {
			window.electronAPI.sendTerminalData(`npm run ${executeCmd[0].name}\r\n`)
		}
	}, [executeCmd])

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
			<div className="flex">
				<div ref={terminalRef} className="basis-full"/>
				<div className="basis-32 bg-gray-800 p-2 flex-none">

				</div>
			</div>
		</animated.div>
	)
}
export default TerminalView
