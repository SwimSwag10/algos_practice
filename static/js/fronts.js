class Node {
  constructor(data) {
      this.value = data;
      this.next = null; 
  }
}
class LinkedList {
  constructor() {
      this.head = null;
  }
  addFront(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode; 
    return this.head; 
  }
  removeFront() {
    if (this.head == null) {
        return this.head;
    }
    var removedNode = this.head;
    this.head = removedNode.next; 
    removedNode.next = null;
    return this.head;
  }
  front() {
    if (this.head == null) {
        return null;
    } else {
        return this.head.value;
    }
  }
}