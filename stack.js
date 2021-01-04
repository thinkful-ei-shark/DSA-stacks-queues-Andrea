
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if(this.top === null) {
      this.top = new Node (data, null);
      return this.top;
    }
    const node = new Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    const node = new Node(data);
    if (this.first === null){
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if(this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.next;
    if (node === this.last){
      this.last = null;
    }
    return node.data;
  }

}

const starTrek = new Stack;
let values = ['kirk', 'Spock', 'McCoy', 'Scotty'];

values.forEach((value) => {
  starTrek.push(value);
});

console.log(starTrek);