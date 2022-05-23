/*
 *  Create by xic, date: 2022/5/22
 *               _            _
 *              (_)          | |
 *      __  __  _      ___  | |__     ___   _ __
 *     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
 *     >  <  | |   | (__  | | | | |  __/ | | | |
 *   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
 */
const { v4: uuidv4 } = require('uuid')
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')
/**
 *
 * 创建项目生成pid
 * @returns uuid
 */
function createNewProject() {
	return uuidv4()
}
/**
 * 创建项目生成name
 * @param {*} path
 * @returns name
 */
function creatNewProjectName(path) {
	return path.split('/').pop()
}
function queryProjectByPid(path) {
	return null
}
function insertProject(projectInfo) {
	db.run('UPDATE tbl SET name = $name WHERE id = $id', {
		$id: projectInfo.pid,
		$name: projectInfo.name,
	})
}
module.exports = {
	createNewProject,
	queryProjectByPid,
	creatNewProjectName,
	insertProject,
}
