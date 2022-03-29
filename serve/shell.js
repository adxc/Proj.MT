
const shell = require('shelljs')
const children = shell.exec('npm run dev',{
    cwd:'../',
    async:true
})
children.stdout.on('data',function(data){
    console.log(3333,data)
    shell.echo(data).to('log.txt')
})