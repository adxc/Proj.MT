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
const Store = require('electron-store')

const store = new Store()
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

function queryProject(path) {
	return store.get(path)
}
/**
 *项目信息持久化储存
 * @param {
 * size
 * path
 * pid
 * script
 * name
 * } info
 */
function insertProject(info) {
	store.set(info.path, info)
}

/**
 * 删除项目
 */
function deleteProject(path) {
	store.delete(path)
}
module.exports = {
	createNewProject,
	queryProject,
	creatNewProjectName,
	insertProject,
	deleteProject,
}
