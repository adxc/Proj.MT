import {useEffect, useMemo, useRef, useState} from "react";
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import ArrowCircleUpSharpIcon from '@mui/icons-material/ArrowCircleUpSharp';
import 'xterm/css/xterm.css';
import chalk from 'chalk';
import { useSpring, animated } from 'react-spring'
import classNames from "classnames";

const TerminalView = function (){
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const terminalRef = useRef<HTMLDivElement>(null);
    const styles = useSpring({transition: 'height .5s',})
    const term = useMemo(() => new Terminal({
          rendererType: "canvas",
          cols: 120,
          rows: 18,
          fontFamily: 'MesloLGS NF',
          disableStdin:false,
          cursorBlink:true,
          convertEol:true,
    }), []);
    const teriminalStyle = classNames("absolute w-full bottom-0 h-96 bg-black text-white px-2",{
         "h-10": isCollapsed
    })
  useEffect(() => {
      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      term.open(terminalRef.current as HTMLDivElement);
      fitAddon.fit();
      term.writeln(`Welcome to ${chalk.red('Proj.MT')}`);
      term.focus();
      window.electronAPI.sendTerminalData('\n')
  },[])
    window.electronAPI.receiveTerminalData((data: string | Uint8Array) =>{
        term.write(data)
    })
    term.onData(data =>{
        window.electronAPI.sendTerminalData(data)
    })
    function handleCollapse(){
        setIsCollapsed(!isCollapsed)
    }
    return (
        <animated.div style={styles} className={teriminalStyle}>
            <div className="flex my-2 justify-between items-center">
                <span>终端</span>
                <div className="flex items-center">
                    <span className="cursor-pointer mr-1" onClick={handleCollapse}>
                        {!isCollapsed ? <ArrowCircleDownSharpIcon/> : <ArrowCircleUpSharpIcon/>}
                    </span>
                    <span><HighlightOffSharpIcon className="text-red-700 cursor-pointer"/></span>
                </div>
            </div>
            <div ref={terminalRef}/>
        </animated.div>
    )
}
export default TerminalView
