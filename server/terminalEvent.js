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
const shell = os.platform() === 'win32' ? 'powershell.exe' : 'zsh';
const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 160,
    rows: 40,
    cwd: process.env.HOME,
    env: process.env
});

function handleTerminalMsg(event,data) {
    ptyProcess.write(data);
}

module.exports = function initialiseTerminalListeners (win){
    ipcMain.handle('terminal:sendData', handleTerminalMsg);
    ptyProcess.on('data', function (data) {
        win.webContents.send('terminal:receiveData', data);
    });
}
