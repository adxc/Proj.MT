/*
*  Create by xic, date: 2022/5/22
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
const { geFileListSize, getScript } = require('../utils')
async function createNewProjectByImport(path){
    const sizes = geFileListSize(path)
    const scripts = await getScript(path)
    return {
        sizes,
        scripts,
    }
}
module.exports = {
    createNewProjectByImport
}
