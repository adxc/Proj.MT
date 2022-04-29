import {useEffect, useMemo, useRef} from "react";
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import 'xterm/css/xterm.css';

const TerminalView = function (){
  const terminalRef = useRef<HTMLDivElement>(null);
  const term = useMemo(() => new Terminal({
      rendererType: "canvas",
      convertEol: true,
      cursorBlink: true,
  }), []);
  const fitAddon = new FitAddon();
  useEffect(() => {
      term.loadAddon(fitAddon);
      term.open(terminalRef.current as HTMLDivElement);
      fitAddon.fit();
      term.writeln('Welcome to Proj.MT');
      term.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
      term.writeln('Type some keys and commands to play around.');
      term.write("\r\n" + "$ ");
      term.onData((data) => {
          console.log(data)
      });
      term.onKey(e => {
          const char = e.domEvent.key;
          if (char === "Enter") {
              term.write("\r\n$ ");
          } else if (char === "Backspace") {
              term.write("\b \b");
          } else {
              term.write(char);
          }
          console.log((term as any)._core.buffer.x )
          console.log(e)
      });
  },[])
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
