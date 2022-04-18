import {useEffect, useMemo, useRef} from "react";
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
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
      term.writeln('Welcome to xterm.js');
      term.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
      term.writeln('Type some keys and commands to play around.');
  },[])
    return (
        <div ref={terminalRef}/>
    )
}
export default TerminalView
