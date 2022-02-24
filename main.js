/**
 * app 模块，它控制应用程序的事件生命周期
 * BrowserWindow 模块，它创建和管理应用程序 窗口。
 */
 const { app, BrowserWindow } = require('electron');

 function createWindow(){
     let win = new BrowserWindow({
         width:1024,
         height:760,
         frame: false, //设置为 false 时可以创建一个无边框窗口
         minHeight: 760,
         minWidth: 1024,
         webPreferences: {
             nodeIntegration: true,
             enableRemoteModule: true,
             contextIsolation: false,
             webSecurity: false //解决跨域
         },
         show: false // new BrowserWindow创建后先隐藏
     })
     // 加载页面
     win.loadURL('http://localhost:3000')
     //关闭页面
     win.on('closed', function(){
         win = null;  
     })
     // 开发者工具
    // win.openDevTools() 
     win.on('ready-to-show', function () {
         win.show() // 初始化后再显示
       })
 }
 
 app.whenReady().then(() => createWindow());