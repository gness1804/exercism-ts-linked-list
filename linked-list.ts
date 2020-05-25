class ListNode<U> {
  previous: null | ListNode<U>;
  data: U;
  next: null | ListNode<U>;

  constructor(data: U, previous?: ListNode<U>, next?: ListNode<U>) {
    this.previous = previous || null;
    this.data = data;
    this.next = next || null;
  }
}

export default class LinkedList<T> {
  first: null | ListNode<T>;
  last: null | ListNode<T>;

  constructor() {
    this.first = null;
    this.last = null;
  }

  push(input: T): void {
    const newNode = new ListNode(input);

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

  unshift(input: T): void {
    const newNode = new ListNode(input);

    if (!this.first || !this.last) {
      this.first = newNode;
      this.last = newNode;
      return;
    }

    const oldHead = this.first;

    this.first.previous = newNode;
    this.first = newNode;
    this.first.next = oldHead;
  }

  count(): number {
    if (!this.first || !this.last) {
      return 0;
    }

    let current = this.first;

    if (!current.next) {
      return 1;
    }

    let count = 1;

    while (current.next) {
      current = current.next;
      count++;
    }
    return count;
  }

  delete(input: T): T | undefined {
    const count = this.count();

    if (!count || !this.first) return undefined;

    if (count === 1) {
      this.first = null;
      this.last = null;
      return input;
    }

    let current = this.first;

    while (current.next) {
      if (current.data === input) {
        const nodeRightBehind = current.previous;
        const nodeRightAfter = current.next;

        if (nodeRightAfter) {
          nodeRightAfter.previous = nodeRightBehind;
        }
        if (nodeRightBehind) {
          nodeRightBehind.next = nodeRightAfter;
        }

        return current.data;
      }
      current = current.next;
    }
  }
}
