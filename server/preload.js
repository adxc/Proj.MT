// @ts-nocheck
const {contextBridge, ipcRenderer} = require('electron');
contextBridge.exposeInMainWorld('electronAPI', {
  openFolder: () => {
    return ipcRenderer.invoke('dialog:openFolder');
  },
  sendTerminalData:(command) => {
    ipcRenderer.invoke('terminal:sendData', command);
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
  }
});
