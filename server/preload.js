// @ts-nocheck
const {contextBridge, ipcRenderer} = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  openFolder: () => {
    return ipcRenderer.invoke('dialog:openFolder');
  },
  createTerminal: () => {
    return ipcRenderer.invoke('terminal:createTerminal');
  },
  sendTerminalData:(pid,command) => {
    ipcRenderer.invoke('terminal:sendData', [pid,command]);
  },
  receiveTerminalData: (callback) => {
    ipcRenderer.on('terminal:receiveData', (event, data) => {
      callback(data);
    });
  },
  queryAllProjectList:() => {
    return ipcRenderer.invoke('queryAllProjectList');
  },
  queryProjectDetails:(pid) => {
    return ipcRenderer.invoke('queryProjectDetails', pid);
  },
  createNewProject:(params) => {
    return ipcRenderer.invoke('createNewProject', params);
  },
  deleteProject:(pid) => {
    return ipcRenderer.invoke('deleteProject', pid);
  },
  resizeTerminal:(pid,cols,rows) => {
    ipcRenderer.invoke('terminal:resize', [pid,cols,rows]);
  }
});
