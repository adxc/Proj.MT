const {dialog, ipcMain} = require('electron');

function handleFolderOpen(){
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }).then(result => {
        if(result.canceled){
            return;
        }
        console.log(result.filePaths)
    });
}

module.exports = function initialiseEventListeners (){
    ipcMain.handle('dialog:openFolder',handleFolderOpen)
}
