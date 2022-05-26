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
const { update } = require('react-spring')
const { getPackage, geFileListSize } = require('../utils')

const store = new Store()
/**
 * 项目数据命名空间 包含信息如下:
 * {
 * name,
 *pid,
 *sizes,
 *packageList,
 *projectTypes,
 *commandList,
 *path,
 *scripts,
 * }
 */
const STORE_PROJECT = 'PROJECT'

/**
 *
 * 获取store PROJECT
 * @returns store
 */
function getStoreProject() {
	return store.store[STORE_PROJECT] || {}
}

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
	const allStore = getStoreProject()
	const projects = Object.keys(allStore).map((i) => ({
		name: allStore[i].name,
		pid: allStore[i].pid,
		path: allStore[i].path,
	}))
	return projects
}

async function getProjectInfo(path) {
	const sizes = geFileListSize(path)
	const { commandList, packageList, projectTypes } = await getPackage(path)
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
	}
	return info
}
/**
 *更新store里package相关
 */
async function updateStorePackage(pid) {
	const { path } = queryProject(pid)
	const { commandList, packageList, projectTypes } = await getPackage(path)
	store.set(`${STORE_PROJECT}.${pid}`, {
		...getStoreProject,
		commandList,
		packageList,
		projectTypes,
	})
}
module.exports = {
	createNewProject,
	creatNewProjectName,
	queryProject,
	insertProject,
	deleteProject,
	initializeProject,
	getProjectInfo,
	updateStorePackage,
}
