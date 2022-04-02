const fs = require('fs')

async function scripts(path) {
	return new Promise((r, j) => {
		fs.readFile(path + '/package.json', function (err, data) {
			const scripts = JSON.parse(data).scripts
			const scriptsArr = Object.keys(scripts).map((i) => ({
				name: i,
				value: scripts[i],
			}))
			r(scriptsArr)
		})
	})
}
// scripts('/Users/wangjianhua/code/project/Proj.MT').then(res=>console.log(res))
module.exports = scripts
