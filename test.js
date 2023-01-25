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

  multipleAdded(data) {
    for (let i = 0; i < data.length; i++) {
      this.add(data[i]);
    }
  }

  add(...data) {
    if (data.length > 1) {
      this.multipleAdded(data);
    } else {
      let newNode = new Node(data[0]);

      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  }

  get() {
    let currentEl = this.head;
    const container = [];

    while (currentEl) {
      container.push(currentEl.data);
      currentEl = currentEl.next;
    }

    return container;
  }

  remove(data) {
    let curEl = this.head;
    let prevEl = null;

    while (curEl) {
      if (data === curEl.data) {
        if (!prevEl) {
          this.head = curEl.next;
        } else {
          prevEl.next = curEl.next;
        }
        this.length--;
      }
      prevEl = curEl;
      curEl = curEl.next;
    }

    return null;
  }
}

const myLIst = new LinkedList();

myLIst.add(4);
myLIst.add(6);
myLIst.add(5);

myLIst.remove(6);

console.log(myLIst.get());
// console.log(myLIst);
