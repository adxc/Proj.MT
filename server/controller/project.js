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
const { geFileListSize, getScript } = require('../utils')
async function createNewProjectByImport(path) {
	const sizes = geFileListSize(path)
	const scripts = await getScript(path)
	const name = creatNewProjectName(path)
	const pid = createNewProject()
	/**储存 */
	insertProject({
		name,
		pid,
		sizes,
		path,
	})
	return {
		name,
		pid,
		sizes,
		scripts,
		path,
	}
}
module.exports = {
	createNewProjectByImport,
}
