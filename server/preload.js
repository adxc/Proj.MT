// @ts-nocheck
const {contextBridge, ipcRenderer} = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  openFolder: () => {
    return ipcRenderer.invoke('dialog:openFolder');
  },
  sendTerminalData:(command) => {
    return ipcRenderer.invoke('terminal:sendData', command);
  },
});
