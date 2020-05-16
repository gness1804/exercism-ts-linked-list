class Node<U> {
  previous: null | Node<U>;
  data: U;
  next: null | Node<U>;

  constructor(data: U, previous?: Node<U>, next?: Node<U>) {
    this.previous = previous || null;
    this.data = data;
    this.next = next || null;
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
    const newNode = new Node(input);

    if (!this.first || !this.last) {
      this.first = newNode;
      this.last = newNode;
      return;
    }

    const oldTail = this.last;

    this.last.next = newNode;
    this.last = newNode;
    this.last.previous = oldTail;
  }

  pop(): T | undefined {
    if (!this.last) return undefined;

    const lastData = this.last.data;

    const nextToLastNode = this.last.previous;

    if (nextToLastNode) {
      nextToLastNode.next = null;
      this.last = nextToLastNode;
    } else {
      this.first = null;
      this.last = null;
    }
    return lastData;
  }

  shift(): T | undefined {
    if (!this.first) return undefined;

    const firstData = this.first.data;

    const secondNode = this.first.next;

    if (secondNode) {
      secondNode.previous = null;
      this.first = secondNode;
    } else {
      this.first = null;
      this.last = null;
    }
    return firstData;
  }
}
