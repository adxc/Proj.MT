// @ts-nocheck
const {contextBridge, ipcRenderer} = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  openFolder: () => {
    ipcRenderer.invoke('dialog:openFolder');
  },
});
