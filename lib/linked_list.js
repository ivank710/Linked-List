// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
      this.value = val;
      this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
      let newNode = new Node(val);

      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let temp = this.tail;
        temp.next = newNode;
        this.tail = newNode;
        this.tail.next = null;
      }

      this.length += 1;
      return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
      let oldTail = this.tail;

      if (this.length === 0) {
        return undefined; 
      } else if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let currNode = this.head;

        while(currNode) {
          if (currNode.next === this.tail) {
            this.tail = currNode;
            this.tail.next = null;
            break;
          }

          currNode = currNode.next;
        }
      }

      this.length -= 1;
      return oldTail;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
      let newNode = new Node(val);

      if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
      }

      this.length += 1;
      return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
      let oldHead = this.head;

      if (this.length === 0) {
        return undefined;
      } else if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHead.next;
      }

      this.length -= 1;
      return oldHead;
    }

    // TODO: Implement the contains method here
    contains(target) {
      let currNode = this.head;

      while(currNode) {
        if (currNode.value === target) return true;

        currNode = currNode.next;
      }

      return false;
    }

    // TODO: Implement the get method here
    get(index) {
      if (this.length - 1 < index) {
        return null;
      } else {
        let i = 0;
        let currNode = this.head;

        while (currNode) {
          if (i === index) {
            return currNode;
          }

          i++;
          currNode = currNode.next;
        }
      }
    }

    // TODO: Implement the set method here
    set(index, val) {
      let i = 0;
      let currNode = this.head;

      while(currNode) {
        if (i === index) {
          currNode.value = val;
          return true;
        }

        i += 1;
        currNode = currNode.next;
      }

      return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
      if (this.length - 1 < index) return false;
      let newNode = new Node(val);

      let i = 0; 
      let currNode = this.head;

      while(currNode) {
        if (i + 1 === index) {
          let temp = currNode.next;
          currNode.next = newNode;
          newNode.next = temp;
        }
        
        i += 1;
        currNode = currNode.next;
      }
      
      this.length += 1;
      return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
      if (this.length - 1 < index) return undefined;

      let i = 0;
      let currNode = this.head;

      while(currNode) {
        if (i + 1 === index) {
          let removedNode = currNode.next;
          currNode.next = removedNode.next;
          this.length -= 1;
          return removedNode;
        }

        i += 1;
        currNode = currNode.next;
      }
    }

    // TODO: Implement the size method here
    size() {
      return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
