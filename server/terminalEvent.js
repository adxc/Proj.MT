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

function handleTerminalMsg(event,data) {
  console.log(data)
  if(data === 'Backspace'){
    return '\b \b'
  }
  return data
}

module.exports = function initialiseTerminalListeners (){
  ipcMain.handle('terminal:sendData', handleTerminalMsg);
}
