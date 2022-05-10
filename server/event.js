const { dialog, ipcMain } = require('electron')
const allFun = require('./index')
const { geFileListSize, getScript } = allFun
async function handleFolderOpen() {
	return new Promise((r, j) => {
		dialog
			.showOpenDialog({
				properties: ['openDirectory'],
			})
			.then(async (result) => {
				if (result.canceled) {
					return
				}
				const paths = result.filePaths
				const sizes = geFileListSize(paths[0])
				const scripts = await getScript(paths[0])
				const outJson = {
					sizes,
					scripts,
				}
				r(outJson)
			})
	})
}

module.exports = function initialiseEventListeners() {
	ipcMain.handle('dialog:openFolder', handleFolderOpen)
}
