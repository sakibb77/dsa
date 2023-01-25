class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);
    console.log(newNode);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    // console.log(this.head);
  }

  getData() {
    let currentEl = this.head;
    let container = [];

    while (currentEl) {
      container.push(currentEl.data);
      currentEl = currentEl.next;
    }

    return container;
  }
}

const myList = new LinkedList();

myList.add(8);
myList.add(9);
myList.add(10);
myList.add(11);
myList.add(12);

console.log(myList.getData());
