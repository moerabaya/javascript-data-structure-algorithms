class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    /**
     * Pushs an item to end
     * @param {*} val 
     */
    push(val) {
        const node = new Node(val)
        if(!this.head) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }

    /**
     * removes an item from the end of a list
     */
    pop() {
        if(!this.head) return this
        
        let current = this.head
        let prev = current
        while(current.next) {
            prev = current
            current = current.next
        }
        prev.next = null
        this.tail = prev
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return this
    }

    /**
     * removes an item from the beginning of a list
     */
    shift() {
        if(!this.head) return this
        let temp = this.head
        this.head = temp.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return this
    }
    /**
     * Adds an item to the beginning of a list
     * @param {*} val 
     */
    unshift(val) {
        let temp = this.head
        this.head = new Node(val)
        this.head.next = temp
        this.length++
        if(this.length === 1) {
            this.tail = this.head
        }
        return this
    }
    /**
     * Gets an item at a certain index
     * @param {*} index 
     */
    get(index) {
        if(index < 0 | index >= this.length) return undefined
        let counter = 0
        let current = this.head
        while(counter !== index) {
            counter++
            current = current.next
        }
        return current
    }
    /**
     * Sets an item at a certain index
     */
    set(index, val) {
        const item = this.get(index)
        item.val = val

        return this
    }
    /**
     * Inserts an item at a certain index
     * @param {*} index 
     * @param {*} val 
     * @returns 
     */
    insert(index, val) {
        console.log(index === this.length)
        if(index < 0 || index > this.length) return undefined
        if(index === this.length) return this.push(val)
        if(index === 0) return this.unshift(val)
        const item = this.get(index - 1)
        const node = new Node(val)
        let next = item.next
        node.next = next
        item.next = node
        this.length++
        
        return this
    }
    /**
     * Removes an item at a certain index
     * @param {*} index 
     */
    remove(index) {
        if(index < 0 || index >= this.length) return undefined
        if(index === this.length - 1) return this.pop()
        if(index === 0) return this.shift()
        const item = this.get(index - 1)
        const removed = item.next
        item.next = removed.next
        this.length--
        return this
    }
    /**
     * Reverse the list
     */
    reverse(){
        let current = this.head
        let next
        let prev = null
        let temp = this.tail
        this.tail = current
        for(let i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = temp

        return this
    }
}
