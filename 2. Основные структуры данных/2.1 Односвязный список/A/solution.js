const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
});

rl.on('close', () => {
    solve();
});

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getByPosition(position) {
        let currentNode = this.head;

        for (let i = 1; i < position; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.value;
    }

    addAfterPosition(position, value) {
        const newNode = new LinkedListNode(value);

        if (position === 0 || this.head === null) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let currentNode = this.head;

            for (let i = 1; i < position; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.size++;
    }

    deleteByPosition(position) {
        if (position === 1) {
            this.head = this.head.next;
        } else {
            let prevNode = this.head;
            for (let i = 1; i < position - 1; i++) {
                prevNode = prevNode.next;
            }
            prevNode.next = prevNode.next.next;
        }
        this.size--;
    }
}

const solve = () => {
    const q = Number(lines[0]);
    const list = new LinkedList();
    const result = [];

    for (let i = 1; i <= q; i++) {
        const parts = lines[i].split(' ').map(Number);
        const type = parts[0];

        if (type === 1) {
            const x = parts[1];
            const y = parts[2];
            list.addAfterPosition(x, y);
        } else if (type === 2) {
            const x = parts[1];
            result.push(list.getByPosition(x));
        } else if (type === 3) {
            const x = parts[1];
            list.deleteByPosition(x);
        }
    }

    console.log(result.join('\n'));
};