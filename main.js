const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron')

let mainWindow

// Create a hidden background window
function createBgSchedulerWindow() {
  result = new BrowserWindow({
    "show": false // TODO hidde bg window here
  })
  result.loadURL('file://' + __dirname + '/background-scheduler.html')

  result.webContents.openDevTools()

  result.on('closed', () => {
    console.log('background window closed')
  });
  return result
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})


/**
 * Background Queue
 */
// check if main process is ready
ipcMain.on('ready-index', (event, arg) => {
  console.log("\n Setup bg-window");
  // create Bg Window AFTER app started
  createBgSchedulerWindow()
})

//Check if BG Process is ready
ipcMain.on('ready-bg-scheduler', (event, arg) => {
  console.log("App Ready!");
})

// Log Messages from processes
ipcMain.on('to-main-log', (event, arg) => {
  console.log(arg)
});