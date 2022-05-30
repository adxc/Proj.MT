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
	insertProject,
	initializeProject,
	queryProject,
	getProjectInfo,
	deleteProject,
} = require('../services/projectService')

async function createNewProjectByImport(path) {
	const info = await getProjectInfo(path)
	insertProject(info)
	return {
		name: info.name,
		pid: info.pid,
	}
}
function queryAllProjectList() {
	return initializeProject()
}
function queryProjectInfo(pid) {
	return queryProject(pid)
}
function deleteProjectByPid(pid) {
	return deleteProject(pid)
}
module.exports = {
	createNewProjectByImport,
	queryAllProjectList,
	queryProjectInfo,
	deleteProjectByPid
}
