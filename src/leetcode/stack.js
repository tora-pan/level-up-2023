class Stack {
  constructor() {
    this.items = [];
  }

  // implement push, pop, peek, isEmpty, printStack

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length == 0) {
      return "nothing to pop";
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length == 0) {
      return "nothing to peek";
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printStack() {
    let stackResult = "";
    for (let item in this.items) {
      stackResult += `${this.items[item]}` + " ";
    }
    return stackResult;
  }
}

let stackTest = new Stack();
stackTest.push("item1");
stackTest.push("item2");
stackTest.push("item3");
console.log(stackTest.printStack());
console.log("popping");
console.log(stackTest.pop());
console.log(stackTest.printStack());
