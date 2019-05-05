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
