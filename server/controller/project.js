/*
 *  Create by xic, date: 2022/5/22
 *               _            _
 *              (_)          | |
 *      __  __  _      ___  | |__     ___   _ __
 *     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
 *     >  <  | |   | (__  | | | | |  __/ | | | |
 *   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
 */

const {
	createNewProject,
	creatNewProjectName,
	insertProject,
	initializeProject,
	queryProject,
	getProjectInfo,
} = require('../services/projectService')
const { geFileListSize, getPackage } = require('../utils')
async function createNewProjectByImport(path) {
	const info = getProjectInfo()
	insertProject(info)
	return {
		name,
		pid,
	}
}
function queryAllProjectList() {
	return initializeProject()
}
function queryProjectInfo(pid) {
	return queryProject(pid)
}
module.exports = {
	createNewProjectByImport,
	queryAllProjectList,
	queryProjectInfo,
}
