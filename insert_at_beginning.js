const scanner = require('readline-sync');
class Node {
    constructor(value) {
        this.data = value;
        this.next = null
    }
}
class MyLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBeginning(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode
    }
    print() {
        let temp = this.head;
        let res = "";
        while (temp !== null) {
            res += `${temp.data} `
            temp = temp.next;
        }
       return res;
    }
}
function main() {
    const head = new MyLinkedList;
    const lengthList =  scanner.question('Panjang list : '); 
    for(let i = 0; i < lengthList; i++) {
        const currentValue = scanner.question(`Value ke ${i+1} : `);
        head.insertAtBeginning(currentValue);
        console.log(head.print());
    }
}


main()