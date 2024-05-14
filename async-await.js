async function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function runTasks() {
    const tasks = [
        async () => {
            await delay(1000);
            return "Task 1 completed";
        },
        async () => {
            await delay(2000);
            return "Task 2 completed";
        },
    ];

    for (const task of tasks) {
        const result = await task();
        console.log(result);
    }
}

runTasks();