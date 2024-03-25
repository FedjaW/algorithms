// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor () {
        this.a = []
    }

    add(element) {
        this.a.push(element)
    }

    remove() {
        if (this.a.length >= 0) {
            const x = this.a[0]
            this.a.shift() // more elegant to use unshift()
            return x
        }

        return undefined
    }

}

const q = new Queue();
q.add(9);
q.add(2);
q.add(12);
console.log(q.remove()) // returns 9;
console.log(q.remove()) // returns 2;
console.log(q.remove()) // returns 12;
console.log(q.remove()) // undefined;

module.exports = Queue;