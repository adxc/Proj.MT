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
// 项目数据命名空间
const STORE_PROJECT = 'PROJECT'
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
/**
 * 查询项目详细信息
 * @param {*} pid
 * @returns Object
 */
function queryProject(pid) {
	return store.get(`${STORE_PROJECT}.${pid}`)
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
	const allStore = store.store[STORE_PROJECT] || {}
	Object.keys(allStore).some((i) => {
		if (allStore[i].path === info.path) {
			deleteProject(allStore[i].pid)
			//todo:提示路径重复
			return true
		}
		return false
	})
	store.set(`${STORE_PROJECT}.${info.pid}`, info)
}

/**
 * 删除项目
 */
function deleteProject(pid) {
	store.delete(`${STORE_PROJECT}.${pid}`)
}
/**
 * 初始化项目
 */
function initializeProject() {
	const allStore = store.store[STORE_PROJECT] || {}
	const projects = Object.keys(allStore).map((i) => ({
		name: allStore[i].name,
		pid: allStore[i].pid,
		path: allStore[i].path,
	}))
	return projects
}
module.exports = {
	createNewProject,
	creatNewProjectName,
	queryProject,
	insertProject,
	deleteProject,
	initializeProject,
}
