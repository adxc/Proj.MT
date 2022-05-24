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
} = require('../services/projectService')
const { geFileListSize, getPackage } = require('../utils')
async function createNewProjectByImport(path) {
	const sizes = geFileListSize(path)
	const package = await getPackage(path)
	const name = creatNewProjectName(path)
	const pid = createNewProject()
	/**储存 */
	const info = {
		name,
		pid,
		sizes,
		package,
		path,
	}
	insertProject(info)
	return {
		name,
		pid,
	}
}
module.exports = {
	createNewProjectByImport,
}
