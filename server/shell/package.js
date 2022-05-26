/**
 * 包安装 更新 卸载相关
 */
const shell = require('shelljs')
const {
	queryProject,
	updateStorePackage,
} = require('../services/projectService.js')
const INSTALL_UPDATE_UN = ['install', 'update', 'uninstall']
/**
 * 更新或者安装包的公共方法
 * @param {
 * 0:install
 * 1:update
 * } type
 * @param {
 * pid:唯一标识
 * packageName:包名称
 * version:包版本
 * isDev:是否是开发环境安装 默认false
 * } params

 */
function installOrUpdatePackage(type, params) {
	return new Promise((r, j) => {
		const { pid, packageName, version = 'latest', isDev = false } = params
		const path = queryProject(pid)?.path
		const dev = isDev ? '-D' : ''
		shell.cd(path)
		const child = shell.exec(
			`npm ${INSTALL_UPDATE_UN[type]} ${packageName}@${version} ${dev}`,
			{
				silent: false,
				async: true,
			},
			function (code, stdout, stderr) {
				if (stderr) {
					j(stderr)
					return
				}
				updateStorePackage(pid)
				r(stdout)
			}
		)
	})
}
/**
 *安装包
 * @param {
 * pid:唯一标识
 * packageName:包名称
 * version:包版本
 * } params
 */

function installPackage(params) {
	installOrUpdatePackage(0, params)
}
/**
 *更新包
 * @param {
 * pid:唯一标识
 * packageName:包名称
 * version:包版本
 * isDev:是否是开发环境安装 默认false
 * } params
 */
function updatePackage(params) {
	installOrUpdatePackage(1, params)
}
/**
 *卸载包
 * @param {
 * pid:唯一标识
 * packageName:包名称
 * version:包版本
 * } params
 */
function uninstallPackage(params) {
	installOrUpdatePackage(2, params)
}
/**
 *更新包
 * @param {
 * pid:唯一标识
 * packageName:包名称
 * version:包版本
 * } params
 * @return Array[string]
 */
function getPackageVersionsByNpm(params) {
	return new Promise((r, j) => {
		const { pid, packageName, version = 'latest' } = params
		const path = queryProject(pid)?.path
		shell.cd(path)
		shell.exec(
			`npm view ${packageName}@* versions`,
			{
				silent: true,
			},
			function (code, stdout, stderr) {
				if (stderr) {
					j(stderr)
					return
				}
				const versions = stdout
					.split(',\n')
					.filter((i) => i.indexOf('-') < 0)
					.slice(-10)
				r(versions)
			}
		)
	})
}
module.exports = {
	installPackage,
	updatePackage,
	uninstallPackage,
	getPackageVersionsByNpm,
}
// getPackageVersionsByNpm({
// 	pid: '46b54b41-295d-48e2-8e3a-6648897f904f',
// 	packageName: 'react',
// })
