class Node {
    constructor(num) {
        this.value = num;
        this.link = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }
    prepend(node) {
        if (this.head === null) {
            this.head = node
        } else {
            const tempNode = this.head;
            this.head = node;
            node.link = tempNode
        }
        this.length++
    }
}

const node1 = new Node(2);
const node2 = new Node(6);
const node3 = new Node(100);
const node4 = new Node(200);


const MyLinkedList = new LinkedList();
MyLinkedList.prepend(node1);
console.log(MyLinkedList);
MyLinkedList.prepend(node2);
console.log(MyLinkedList);
MyLinkedList.prepend(node3);
console.log(MyLinkedList);
MyLinkedList.prepend(node4);
console.log(MyLinkedList);

let temp = MyLinkedList.head;
while(temp.link !== null) {
    console.log(temp.value);
    temp = temp.link;
}

console.log(temp.value);

