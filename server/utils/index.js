/*
*  Create by xic, date: 2022/5/22
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
const fs = require('fs')

//遍历文件夹，获取所有文件夹里面的文件信息
/*
 * @param path 路径
 *
 */

function geFileListSize(path) {
    const filesList = []
    readFile(path, filesList)
    let size = filesList.reduce((a, b) => {
        return a + b.size
    }, 0)
    const unit = ['B', 'KB', 'MB', 'GB']
    for (let i = 0; i < unit.length; i++) {
        if (size > 1024) {
            size = size / 1024
            if (i === 3) return size.toFixed(2) + unit[i]
            continue
        }
        return size.toFixed(2) + unit[i]
    }
}

//遍历读取文件
function readFile(path, filesList) {
    files = fs.readdirSync(path) //需要用到同步读取
    files.forEach(walk)
    function walk(file) {
        states = fs.statSync(path + '/' + file)
        if (states.isDirectory()) {
            if (file.indexOf('node_modules') > -1) return
            readFile(path + '/' + file, filesList)
        } else {
            //创建一个对象保存信息
            var obj = new Object()
            obj.size = states.size //文件大小，以字节为单位
            obj.name = file //文件名
            obj.path = path + '/' + file //文件绝对路径
            filesList.push(obj)
        }
    }
}
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
module.exports = {
    geFileListSize,
    getScript
}
