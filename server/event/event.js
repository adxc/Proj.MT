const { dialog, ipcMain } = require('electron')
const { createNewProjectByImport } = require('../controller/project')
function handleFolderOpen() {
	return dialog.showOpenDialog({
				properties: ['openDirectory'],
			}).then(({canceled,filePaths}) => {
				if (!canceled) {
					return createNewProjectByImport(filePaths[0])
				}
			})
}

module.exports = function initialiseEventListeners() {
	ipcMain.handle('dialog:openFolder', handleFolderOpen)
}
