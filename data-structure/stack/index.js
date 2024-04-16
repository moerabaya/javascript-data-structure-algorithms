class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        const node = new Node(val)
        if(!this.first) {
            this.first = node
            this.last = this.first
        } else {
            let temp = this.first
            this.first = node
            this.first.next = temp
        }
        return ++this.size
    }

    pop() {
        if(!this.first) return null
        let temp = this.first
        this.first = temp.next
        this.size--
        if(this.size === 0) {
            this.last = null
        }
        return temp
    }
}