const { dialog, ipcMain } = require('electron')
const { createNewProjectByImport,queryAllProjectList,queryProjectInfo,deleteProjectByPid } = require('../controller/project')
function handleFolderOpen() {
	return dialog.showOpenDialog({
				properties: ['openDirectory'],
			}).then(({canceled,filePaths}) => {
				if (!canceled) {
					return createNewProjectByImport(filePaths[0])
				}
			})
}

function queryProjectDetails(e,pid) {
	return queryProjectInfo(pid)
}
function deleteProject(e,pid) {
	deleteProjectByPid(pid)
}
function createNewProject(e,params) {

}
module.exports = function initialiseEventListeners() {
	ipcMain.handle('dialog:openFolder', handleFolderOpen)
	ipcMain.handle('queryAllProjectList', queryAllProjectList)
	ipcMain.handle('queryProjectDetails', queryProjectDetails)
	ipcMain.handle('createNewProject', createNewProject)
	ipcMain.handle('deleteProject', deleteProject)
}
