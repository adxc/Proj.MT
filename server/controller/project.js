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
} = require('../services/projectService')
const { geFileListSize, getPackage } = require('../utils')
async function createNewProjectByImport(path) {
	const sizes = geFileListSize(path)
	const { scripts, packageList, projectTypes } = await getPackage(path)
	const commandList = []
	const name = creatNewProjectName(path)
	const pid = createNewProject()
	/**储存 */
	const info = {
		name,
		pid,
		sizes,
		packageList,
		projectTypes,
		commandList,
		path,
		scripts,
	}
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
