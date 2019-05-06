const {
    ipcRenderer
} = require('electron')

/* function setVal(id, value) {
    document.getElementById(id).innerHTML = value
}

function toMain() {
    ipcRenderer.send('to-main', document.getElementById('msg').value)
}

function toBg() {
    ipcRenderer.send('for-background', document.getElementById('msg').value)
}

function assignTask() {
    ipcRenderer.send('assign-task', document.getElementById('task').value)
}
ipcRenderer.on('to-renderer', (event, arg) => {
    setVal('received', arg)
})
ipcRenderer.on('status', (event, threads, tasks) => {
    setVal('threads', threads)
    setVal('tasks', tasks)
}) */

// let the main thread know this thread is ready to process something
function ready() {
    console.log("ready index");
    ipcRenderer.send('ready-index')
}
// index is ready
ready()


/* console.log("renderer process says hello");

const {
    Scheduler
} = require('./scheduler')

async function main() {
    try {
        let sch = new Scheduler()
        await sch.initScheduledContent()
        console.log("Imported of jobs done!");
    } catch (error) {
        console.log(error);
    }
}

main()
 */