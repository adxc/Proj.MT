/*
*  Create by xic, date: 2022/5/22
*               _            _
*              (_)          | |
*      __  __  _      ___  | |__     ___   _ __
*     \ \/ / | |    / __| | '_ \   / _ \ | '_ \
*     >  <  | |   | (__  | | | | |  __/ | | | |
*   /_/\_\ |_|    \___| |_| |_|  \___| |_| |_|
*/
const { v4: uuidv4 } = require('uuid');
function createNewProject(path){
   return uuidv4()
}
function queryProjectByPid(path){
    return null
}
module.exports = {
    createNewProject,
    queryProjectByPid
}
