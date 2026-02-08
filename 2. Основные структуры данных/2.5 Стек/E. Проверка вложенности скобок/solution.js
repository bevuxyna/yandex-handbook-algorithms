const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = '';
const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
}

rl.on('line', (line) => {
    input = line;
});

const solve = () => {
    const stack = [];

    for (const bracket of input) {
        if (pairs[bracket]) {
            stack.push(bracket);
        } else {
            if (pairs[stack.pop()] !== bracket) {
                console.log('NO');
                return;
            }
        }
    }

    console.log(stack.length === 0 ? 'YES' : 'NO');
};

rl.on('close', () => {
    solve();
});