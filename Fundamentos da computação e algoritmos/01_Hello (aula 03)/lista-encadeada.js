class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }

}

class LinkedList {
    constructor() {
        this.count = 0;
        this.header = null;
        this.tail = null;
    }

    add(element) {
        if(this.count == 0) {
            this.header = this.tail = element;
        }
        else {
            this.tail.next = element;
            this.tail = element;
        }
        this.count++;
    }

    print() {
        var aux = this.header;
        while(aux != null) {
            console.log(aux.element);
            aux = aux.next;
        }
    }
}

var mLL = new LinkedList();

mLL.add(new Node(1));
mLL.print();

mLL.add(new Node(2));
mLL.print();

mLL.add(new Node(4));
mLL.print();

mLL.add(new Node(3));
mLL.print();