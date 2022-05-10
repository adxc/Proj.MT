const fs = require('fs')

async function getScript(path) {
	return new Promise((r, j) => {
		fs.readFile(path + '/package.json', function (err, data) {
			console.log(4444, data, path)
			const scripts = JSON.parse(data).scripts
			const scriptsArr = Object.keys(scripts).map((i) => ({
				name: i,
				value: scripts[i],
			}))
			r(scriptsArr)
		})
	})
}
getScript('/Users/wangjianhua/code/qmai/bi-vue').then((res) => console.log(res))
module.exports = getScript
