const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = new Node ();
        this._tail = this._head;
    }

    append(data) {
        if (this.length === 0) {
            this._head = new Node(data);
            this._tail = this._head;
            this.length++;
        } else {
            this._tail = this._head;
            while (this._tail.next != null){
              this._tail = this._tail.next
            }
            this._tail.next = new Node(data, this._tail);
            //this._tail.next.prev = this._tail;
            this._tail=this._tail.next;
            this.length++;
        }
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

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;