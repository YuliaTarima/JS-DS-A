//Creates a class instance to represent a node.
// The node should have two properties, 'data' and 'next'.
// Accept both of these as arguments to the 'Node' constructor,
// then assign them to the instance as properties 'data' and 'next'.
// If 'next' is not provided to the constructor, then default its value to be 'null'.

//const n = new Node('Hi');
// n.data // 'Hi'
// n.next // null
// const n2 = new Node('There', n);
// n.next // returns n

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    // Create a class to represent a linked list.
    // When created, a linked list should have no head node associated with it.
    // The LinkedList instance will have one property, 'head',
    // which is a reference to the first node of the linked list.
    // By default 'head' should be 'null'.

    // const list = new LinkedList();
    // list.head // null
    constructor() {
        this.head = null;
    }

    // Creates a new Node from argument 'data'
    // and assigns the resulting node to the 'head' property.
    // Make sure to handle the case
    // in which the linked list already has a node
    // assigned to the 'head' property.

    // const list = new LinkedList();
    // list.insertFirst('Hi There'); // List has one node
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    // Returns the number of nodes in the linked list.
    // const list = new LinkedList();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.insertFirst('c');
    // list.size(); // returns 3
    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    // Returns the first node of the linked list.
    // const list = new LinkedList();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.getFirst(); // returns Node instance with data 'a'
    getFirst() {
        return this.head;
    }

    // 	Returns the last node of the linked list
    // const list = new LinkedList();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.getLast(); // returns node with data 'a'
    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    // Empties the linked list of any nodes.
    // const list = new LinkedList();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.clear();
    // list.size(); // returns 0
    clear() {
        this.head = null;
    }

    // Removes only the first node of the linked list.
    // The list's head should now be the second element.
    // const list = new LinkedList();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.removeFirst();
    // list.getFirst(); // returns node with data 'a'
    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    // Removes the last node of the chain
    // const list = new LinkedList();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.removeLast();
    // list.size(); // returns 1
    // list.getLast(); // returns node with data of 'b'
    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }

    // Inserts a new node with provided data at the end of the chain
    // const list = new LinkedList();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.insertLast('c');
    // list.getLast(); // returns node with data 'C'
    insertLast(data) {
        const last = this.getLast();

        if (last) {
            // There are some existing nodes in our chain
            last.next = new Node(data);
        } else {
            // The chain is empty!
            this.head = new Node(data);
        }
    }

    // Returns the node at the provided index
    // const list = new List();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.insertFirst('c');
    // list.getAt(1); // returns node with data 'b'
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }
        return null;
    }

    // Removes node at the provided index
    // const list = new List();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.insertFirst('c');
    // list.removeAt(1);
    // list.getAt(1); // returns node with data 'a'
    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }

    // Create and insert a new node at provided index.
    // If index is out of bounds, add the node to the end of the list.
    // const list = new List();
    // list.insertFirst('a');
    // list.insertFirst('b');
    // list.insertFirst('c');
    // list.insertAt('Hi', 1)
    // list.getAt(1); // returns node with data 'Hi'
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
    }

    // Calls the provided function with every node of the chain and the index of the node.
    // const list = new List();
    // list.insertLast(1);
    // list.insertLast(2);
    // list.insertLast(3);
    // list.insertLast(4);
    // list.forEach((node, index) => { node.data += 10; });
    // list.getAt(0); // Returns node with data '11'
    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    // Linked list should be compatible as the subject of a 'for...of' loop
    // const list = new List();
    // list.insertLast(1);
    // list.insertLast(2);
    // list.insertLast(3);
    // list.insertLast(4);
    // for (let node of list) { node.data += 10; }
    // node.getAt(1); // returns node with data 11
    * [Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = {Node, LinkedList};