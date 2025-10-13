const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

if(isMainThread){
    console.time("worker");
    const worker = new Worker(__filename, { workerData: { limit: 1e8} });

    worker.on("message", (sum) => {
        console.log("Suma:", sum);
        console.timeEnd("worker");
    });

    worker.on("error", console.error);
    worker.on("exit", (code) => {
        if(code !==0) console.error("Worker zakończył się kodem ${code}");
    });
} else {
    const { limit } = workerData;
    let sum = 0;
    for (let i = 0; i < limit; i++) sum += i;
    parentPort.postMessage(sum);
}

/*
const { Worker } = require("worker_threads");

function runWorker(limit){
    return new Promise((resolve, reject) => {
        const worker = new Worker("./workerThreads.js", { workerData: { limit}});
        worker.on("message", resolve);
        worker.on("error", reject);
    });
}

(async () => {
    console.time("multiWorkers");
    const results = await Promise.all([
        runWorker(5e7),
        runWorker(5e7),
        runWorker(5e7)
    ]);
    console.log("Wyniki:", results);
    console.timeEnd("multiWorkers");
})();
*/