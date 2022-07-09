/*
*  Create by xic, date: 2022/4/30
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
const { ipcMain } = require('electron');
const os = require('os');
const pty = require('node-pty');
const shell = os.platform() === 'win32' ? 'cmd.exe' : 'bash';
let ptyContainer = new Map();
function handleTerminalMsg(event,params) {
    const [pid,data] = params;
    const ptyProcess = ptyContainer.get(pid);
    ptyProcess.write(data);
}
function resizeTerminal(event, params) {
    const [pid,cols, rows] = params;
    const ptyProcess = ptyContainer.get(pid);
    ptyProcess.resize(cols, rows);
}
function handleCreateTerminal(win) {
    const ptyProcess = pty.spawn(shell, [], {
        name: 'xterm-color',
        cols: 120,
        rows: 18,
        cwd: process.env.HOME, // 首次进入系统根目录
        env: process.env
    });
    ptyProcess.on('data', function (data) {
        win.webContents.send('terminal:receiveData', [ptyProcess.pid,data]);
    });
    ptyContainer.set(ptyProcess.pid, ptyProcess);
    return ptyProcess.pid;
}
module.exports = function initialiseTerminalListeners (win){
    ipcMain.handle('terminal:sendData', handleTerminalMsg);
    ipcMain.handle('terminal:createTerminal', () => handleCreateTerminal(win));
    ipcMain.handle('terminal:resize', resizeTerminal);
}
