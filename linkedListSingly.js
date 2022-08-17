// node class
class Node {
    // passing the keys for the singly linked list
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

// values passed in to create the node object
// const node1 = new Node('Raven')
// const node3 = new Node('Amanda')
// const node2 = new Node('Erica')

// node1.next = node2;
// node2.next = node3;
// node3.next = null;

// console.log(node1)
// console.log(node2)

// singly linkedList class
class SinglyLinkedList {
    constructor(data) {
        this.head = data
    }
    // first function, sets the head
    setHead(data) {
        // check if there is an existing head
        if(!this.head) {
            this.head = new Node(data)
            return this.head
        } else {
            // redefine the head and references if there is already a head
            let tempHead = this.head
            // set the new head
            this.head = new Node(data)
            // define the new heads next reference to the old head
            this.head.next = tempHead
            return this.head
        }
    }
    // add a new node to the end of the list
    addNode(data) {
        // traverse through the list
        // redefine the next node's pointer
        // we start at the beginning of the linked list
        let currentNode = this.head
        // create a condition to check if we are at the end
        while(currentNode.next !== null) {
            currentNode = currentNode.next
        }
        currentNode.next = new Node(data)
        return
    }
    // create a function that console logs every node
    logList() {
        // edge case
        if(!this.head) {
            console.log('No nodes in this linked list')
            return
        } else {
            // define our starting point
            let currentNode = this.head
            while(currentNode !== null) {
                // print the node
                console.log(currentNode)
                // traverse, redefined the current node to the next one
                currentNode = currentNode.next
            }
        }
        
    }

//////////// Singly LL challenges /////////////

    //create a function that sets the tail(last node)
    setTail(data) {
        // check if there is an existing head
        if(!this.head) {
            this.head = new Node(data)
            return this.head
        } else {
            // redefine the head and references if there is already a head
            let tempHead = this.head
            // set the new head
            this.head = new Node(data)
            // define the new heads next reference to the old head
            this.head.next = tempHead
            return this.head
        }
    }


    //find node
    // findNode(data) {

    // }

    //insertNodeAtIdx
    // insertNodeAtIdx(idx, node) {

    // }

    //deleteNodeAtIdx
    // deleteNodeAtIdx(idx){

    // }

//////////// CHALLENGE /////////////    
//Prompt: Write a method that determines if the SSl is circular (hint: think of what happens when you draw a circle)

}





const sLL = new SinglyLinkedList()
sLL.setHead('Raven')
// sLL.setHead('Erica')
// sLL.setHead('Martin')

sLL.addNode('Preeti')
sLL.addNode('Richard')
sLL.addNode('Jared')
sLL.addNode('Sumele')
console.log(sLL)

sLL.logList();


// if (currentNode.next === null) {
//     // redefine the last next to the new node
//     currentNode.next = new Node(data)
//     return
// } else {
//     // move our currentNode to the next node in our list
//     currentNode = currentNode.next
// }