class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // add, insertAt, removeFrom, removeElement, isEmpty, sizeOfList, printList
  add(element) {
    let node = Node(element);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return "please select a valid index";
    } else {
      let node = new Node(element);
      let prev, curr;

      curr = this.head;

      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let currIndex = 0;

        while (currIndex < index) {
          currIndex++;
          prev = curr;
          curr = curr.next;
        }

        node.next = curr;
        prev.next = node;
      }

      this.size++;
    }
  }

  removeFrom(element, index) {}

  removeElement(element) {}

  isEmpty() {}

  sizeOfList() {}

  printList() {}
}
