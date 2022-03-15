/*
Linked lists are the first data structure we discuss as an **object**; they use **references**.

Head 
The first node in a list is called the Head Node. The head node is a very important node to the list because it 
is our only entry way into the list. I know that usually all train cars have their own door but just imagine if 
there was only a single door on the engine of the train. What would happen if that door broke? There would be no 
way to access any other cars on the train. The same holds true for the head of a linked list.

Node
As was stated earlier a Linked List is comprised of Nodes. But let's take a closer look at what a Node is. A node 
has two attributes. Data and a "next". Data can be anything, it can be a string, it can be a number, it can be a 
level on a video game. As we see on our train above we have some numbers, lets just say those numbers represent 
the number of passengers in each car.

Next
The next is simply the address to the next node. In our example the first car's "next" will be the the green car. 
In our actual lists, our nodes will be spread out through our memory of our computer and these Pointers will 
connect them

Caboose
The only thing special about the last node of a SIngly Linked List is that it points to null, this is a very 
important detail because when we start iterating, we'll be using this fact to know when to stop iterating
*/

/*
class Node:
  __init__(cls):
    cls.data=data
    cls.next=null
*/

class Node {
  constructor(data){
      this.data=data;
      this.next=null;
  }
}

class LinkedList {
  constructor() {
      this.head = null;
  }
  addFront(val) {
      // Creating a new node object with the value provided
      let new_node = new Node(val);
      // Checking to see if the current list does not have a head node (if the list is empty)
      // If the list is empty, place the new node as the head 
      if(!this.head) {
          this.head = new_node;
          return this;
      }
      // If the list is not empty, assign the head to be the next node to the new node (Blue Arrow in picture above)
      new_node.next = this.head;
      // Then finally assign the new_node to be the new head of the list (Red Arrow in picture above)
      this.head = new_node;
      return this;
  }
  removeFront() {
    
  }
  front() {

  }
}

