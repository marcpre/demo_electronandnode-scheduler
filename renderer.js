const {
    ipcRenderer
} = require('electron')

// let the main thread know this thread is ready to process something
function ready() {
    console.log("ready index");
    ipcRenderer.send('ready-index')
}
// Let main process know that index is ready
ready()