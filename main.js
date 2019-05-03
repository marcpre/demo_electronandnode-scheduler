async function main() {

  const {
    app,
    BrowserWindow
  } = require('electron')
  const schedule = require('node-schedule');
  const {
    Schedule
  } = require('./schedule')
  
  let win
  
  let sch = new Schedule()
  try {
    await sch.initScheduledContent()
    console.log("Imported of jobs done!");
  } catch (error) {
    console.log(error);
  }

  function createWindow() {
    win = new BrowserWindow({
      width: 800,
      height: 600
    })
    win.loadFile('index.html')
    // win.webContents.openDevTools()
    win.on('closed', () => {
      win = null
    })
  }

  app.on('ready', createWindow)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })
}

main()
