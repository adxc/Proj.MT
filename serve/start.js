// 项目启动
const shell = require('shelljs')
function start(path) {
	const children = shell.exec('npm install && npm run dev', {
		cwd: path,
		async: true,
	})
	children.stdout.on('data', function (data) {
		// shell.echo(data).to('log.txt')
	})
}
module.exports = start
