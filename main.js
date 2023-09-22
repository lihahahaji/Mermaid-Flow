const { app, BrowserWindow } = require('electron')
// app，它着您应用程序的事件生命周期。
// BrowserWindow，它负责创建和管理应用窗口。

// createWindow 函数用于创建一个应用窗口
const createWindow = () => {
  const win = new BrowserWindow({
    // 设置宽高
    width: 800,
    height: 600,
    frame:false,
  })
  // 加载静态页面
//   win.loadFile('index.html')
  // 加载网址
  win.loadURL('https://www.mermaidflow.app/flowchart#N4IgZgNg9g7iBcoB2UAmBTAzgg2gXQBoR1UBzLXQkANwEt0YAHKAJwBcFQAPBAWgEYALACZhRAJ59+AdkFEAXlCgBbBMIC+6oqloBDUi13KAsuja6AIrvOcQOlugDGbWlCQIQAFQBCIImBY3NmNrNnQWWxc2CHQPCz0DIwACT1po2K07WgdnWmoKeHwiRxVldCQ2bEKqRwhdTEwC-EzaTABRLmZ2AAVdJHQIAHlGcoQwXQhGolJoACMJtrJ0T3ER21QAVwmxiamQCFp+lbX4EEwoA9Q-YiWQlgBrcOPY06gR92KL1g8AYln+f6zABsIEyMyg8wgADk0MtVi9QGx4R4cuYkDN0DCMNcStAIqcfgAGYkk67zRz3AxQDZIVAAYS++JAPzArLZZNYGBYDLxvxJpKIs05TwAFrQKf0Gh5zpdrq0rJgRSQdpN0JogA')
}

// 在应用准备就绪时调用函数 创建窗口
app.whenReady().then(() => {
  createWindow()

  // 如果当前没有窗口 则点击 app 时重新打开一个窗口
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})