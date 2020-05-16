class Node<U> {
  previous: null | U;
  data: U;
  next: null | U;

  constructor(input: U) {
    this.previous = null;
    this.data = input;
    this.next = null;
  }
}

export default class LinkedList<T> {
  first: null | Node<T>;
  last: null | Node<T>;

  constructor() {
    this.first = null;
    this.last = null;
  }

  push(input: T): void {
    this.last = new Node(input);
  }

  pop(): T | undefined {
    if (!this.last) {
      return undefined;
    }
    // const returnVal = this.last.data;
    // this.last = null;
    // return returnVal;
  }

}
