const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
});

const solve = () => {
    const requests = lines.slice(1);
    const stack = [];

    for (const request of requests) {
        const spltRequest = request.split(' ').map(Number);

        if (spltRequest[0] === 1) {
            stack.push(spltRequest[1]);
            console.log(spltRequest[1]);
        }

        if (spltRequest[0] === 2) {
            stack.pop();

            if (!stack.length) {
                console.log(-1);
            } else {
                console.log(stack[stack.length - 1]);
            }
        }
    }
};

rl.on('close', () => {
    solve();
});