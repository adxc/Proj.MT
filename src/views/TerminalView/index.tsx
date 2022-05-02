import {useEffect, useMemo, useRef} from "react";
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import 'xterm/css/xterm.css';
import chalk from 'chalk';


const TerminalView = function (){
  const terminalRef = useRef<HTMLDivElement>(null);
  const term = useMemo(() => new Terminal({
      rendererType: "canvas",
      cols: 80,
      rows: 40,
      convertEol: true,
      cursorBlink: true,
  }), []);
  const fitAddon = new FitAddon();
  useEffect(() => {
      term.loadAddon(fitAddon);
      term.open(terminalRef.current as HTMLDivElement);
      fitAddon.fit();
      term.writeln(`Welcome to ${chalk.red('Proj.MT')}`);
      term.focus();
  },[])
    term.onData(data =>{
        window.electronAPI.sendTerminalData(data)
    })
    window.electronAPI.receiveTerminalData((data: string | Uint8Array) =>{
        term.write(data)
    })
    return (
        <div className="absolute w-full bottom-0 h-96 bg-black text-white px-2">
            <div className="flex my-2 justify-between items-center"><span>终端</span> <div className="flex">
                <ArrowCircleDownSharpIcon className="cursor-pointer mr-1"/>
                <HighlightOffSharpIcon className="text-red-700 cursor-pointer"/>
            </div></div>
            <div ref={terminalRef}/>
        </div>
    )
}
export default TerminalView
