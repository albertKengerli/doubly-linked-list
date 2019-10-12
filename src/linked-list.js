const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = new Node ();
        this._tail = this._head;
    }

    moveTail() {
        this._tail = this._head;
        while (this._tail.next != null){
            this._tail = this._tail.next
        }
    }
    
    append(data) {
        if (this.length === 0) {
            this._head = new Node(data);
            this._tail = this._head;
            this.length++;
        } else {
            this.moveTail();
            this._tail.next = new Node(data, this._tail);
            
            this._tail=this._tail.next;
            this.length++;
        }
        return this;
    }

    head() {
      return this._head.data;
    }

    tail() {
      return this._tail.data;
    }

    at(index) {
        let findNode = this._head;
        while (index != 0) {
            findNode = findNode.next;
            index--;
        }
        return findNode.data;       
    }

    insertAt(index, data) {
        if (index === 0) {
            let tempNode = new Node (data, null, this._head);
            this._head.prev = tempNode;
            this._head = tempNode;
            this.length++;
        } else {
            this._tail = this._head;
            while (index != 0) {
                this._tail = this._tail.next;
                index--;
            }
            let tempNode = this._tail.prev;
            tempNode.next = new Node (data, tempNode, this._tail);
            this._tail.prev = tempNode.next;
            this.length++;
            this.moveTail();
        }
        return this;
    }
    
    isEmpty() {
        return (this.length === 0) ? true : false;
    }

    clear() {
        this._head = new Node ();
        this._tail = this._head;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        let findNode = this._head;
      
        while (index != 0) {
            findNode = findNode.next;
            index--;
        }
        
        if (findNode.prev != null) {
          findNode.prev.next = findNode.next;
        } else {
          this._head = findNode.next;
        }

        if (findNode.next != null) {
          findNode.next.prev = findNode.prev;
        } else {
          this._tail = findNode.prev;
        }
        
        this.length--;
        return this;
    }

    reverse() {
        let currentNode = new Node ();
        let oldNext = new Node ();
        let oldTail = this._tail;
      
        currentNode = this._head;
        this._tail = this._head;
        this._head = oldTail;
      
        while (!!currentNode) {
            oldNext = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = oldNext;
            currentNode = currentNode.prev;
        }
        return this;
    }

    indexOf(data) {
        let findNode = this._head;
        let i = 0;
        while (i<this.length) {
          if (findNode.data === data) return i;
          findNode = findNode.next;
          i++;
        }
        return -1;    
    }
}

module.exports = LinkedList;