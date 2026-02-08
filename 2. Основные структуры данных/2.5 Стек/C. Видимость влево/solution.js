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
    const n = parseInt(lines[0]);
    const nums = lines[1].split(' ').map(Number);
    const result = new Array(n).fill(0);
    const stack = []; // стек хранит пары [значение, количество видимых элементов]

    for (let i = 0; i < n; i++) {
        let count = 0;

        // Удаляем из стека все элементы, которые меньше текущего
        // При этом суммируем их "видимости"
        while (stack.length > 0 && stack[stack.length - 1][0] < nums[i]) {
            count += stack[stack.length - 1][1] + 1;
            stack.pop();
        }

        result[i] = count;

        // Добавляем текущий элемент в стек
        stack.push([nums[i], count]);
    }

    console.log(result.join(' '));
};

rl.on('close', () => {
    solve();
});