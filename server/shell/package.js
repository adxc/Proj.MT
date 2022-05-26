/**
 * 包安装 更新 卸载相关
 */
const shell = require('shelljs')
const { queryProject } = require('../services/projectService.js')
const INSTALL_UPDATE = ['install', 'update']
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
 * } params
 * @param {
 *
 * } callback
 */
function installOrUpdatePackage(type, params, callback) {
	const { pid, packageName, version = 'latest' } = params
	const path = queryProject(pid)?.path
	shell.cd(path)
	const child = shell.exec(
		`npm ${INSTALL_UPDATE[type]} ${packageName}@${version}`,
		{
			silent: false,
			async: true,
		}
	)

	child.stdout.on('data', function (code, stdout, stderr) {
		callback?.(code, stdout, stderr)
	})
}
/**
 *安装包
 * @param {
 * pid:唯一标识
 * packageName:包名称
 * version:包版本
 * } params
 * @param {
 *
 * } callback
 */

function installPackage(params, callback) {
	installOrUpdatePackage(0, params, callback)
}
/**
 *更新包
 * @param {
 * pid:唯一标识
 * packageName:包名称
 * version:包版本
 * } params
 * @param {
 *
 * } callback
 */
function updatePackage(params, callback) {
	installOrUpdatePackage(1, params, callback)
}
/**
 *更新包
 * @param {
 * pid:唯一标识
 * packageName:包名称
 * version:包版本
 * } params
 * @param {
 *
 * } callback
 */
function getPackageVersionsByNpm(params, callback) {
	const { pid, packageName, version = 'latest' } = params
	const path = queryProject(pid)?.path
	shell.cd(path)
	const child = shell.exec(`npm view ${packageName} versions --json`, {
		silent: true,
		async: true,
	})
	const arr = []
	child.stdout.on('data', function (code, stdout, stderr) {
		const versions = code.split(',\n')

		console.log(11111, versions)
		callback?.(code, stdout, stderr)
	})
}
module.exports = {
	installPackage,
	updatePackage,
}
getPackageVersionsByNpm({
	pid: '46b54b41-295d-48e2-8e3a-6648897f904f',
	packageName: 'react',
})
