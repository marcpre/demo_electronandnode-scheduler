const schedule = require('node-schedule');

class Scheduler {

    constructor() {
        //...
    }

    randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    async initScheduledContent() {
        let start = new Date()
        let end = new Date()
        end.setSeconds(end.getSeconds() + 20) // add 5 seconds

        let arr = []
        const numb_jobs = 50
        for (let i = 0; i < numb_jobs; i++) {
            let d = this.randomDate(start, end)
            arr.push([i, d]) // job_number, date
            console.log('OPEN: Job  -- #' + arr[i][0] + ' -- scheduled at: ' + arr[i][1]);

            schedule.scheduleJob(arr[i][1], function () {
                console.log('DONE: Job -- #' + arr[i][0] + ' -- executed at: ' + arr[i][1]);
            });
        }
        console.log("\n Number of Jobs Scheduled: " + Object.keys(schedule.scheduledJobs).length + "\n");
    }
}

module.exports = {
    Scheduler
};