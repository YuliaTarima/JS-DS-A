// Linked List Presentation:
// https://docs.google.com/presentation/d/1e4d9RgvUqS3rUHx9W4nv0ob7OW_XcwsnkkOI3qE66ac/edit
// Doubly Linked List:
// https://repl.it/@marybelousova/BrokenSmallApplicationpackage#index.js

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this. length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    insert(index, value) {
        if(index >= this.length) return this.append(value)
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index-1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = holdingPointer;
        holdingPointer.prev = newNode;
        this.length++;
        return this.printList()
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        const leader = this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        const follow = unwantedNode.next
        follow.prev = leader
        leader.next = follow;
        this.length--;
        return this.printList()
    }
}

let myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(5)
myLinkedList.prepend(4)
myLinkedList.insert(2,9)
myLinkedList.insert(3,1)
myLinkedList.insert(10,1)
myLinkedList.remove(3)
myLinkedList.remove(2)