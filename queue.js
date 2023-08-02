/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) { 
    const newNode = new Node(val);

    if (!this.last) {
      // If the queue is empty, set both the first and last nodes to the new node.
      this.first = newNode;
      this.last = newNode;
    } else {
      // If the queue is not empty, update the next pointer of the current last node to the new node.
      this.last.next = newNode;
      // Update the last pointer to the new node.
      this.last = newNode;
    }

    // Increase the size of the queue.
    this.size++;

  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) {
      // If the queue is empty, set both the first and last nodes to the new node.
      throw new Error('Queue is empty');
    } else {
      // If the queue is not empty, update the next pointer of the current last node to the new node.
      const firstVal = this.first.val;
      // Update the last pointer to the new node.
      this.first =this.first.next ;

         if (!this.first) {
      this.last = null;
    }

    // Decrease the size of the queue.
    this.size--;

    return firstVal;

  }
  }
  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (!this.first) {

      return null;
    }
    return this.first.val;

  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(!this.first){
      return true;
    }
    return false;

  }
}
const train = new Queue();
train.enqueue('Bobio');
train.enqueue('Bobiod');

module.exports = Queue;
