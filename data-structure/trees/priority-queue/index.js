
class PriorityQueue {
    constructor() {
        this.values = []
    }

    getParent(num) {
        return Math.floor((num - 1) / 2)
    }

    getChild(num, right = false) {
        return num * 2 + (right ? 2 : 1)
    }

    enqueue(value, priority) {
        const node = new Node(value, priority)
        this.values.push(node)
        let move = true
        let index = this.values.length - 1
        while(move) {
            const parentIdx = this.getParent(index)
            const parent = this.values[parentIdx]
            if(parentIdx < 0 || !parent || parent.priority < node.priority) move = false
            else {
                swap(this.values, index, parentIdx)
                index = parentIdx
            }
        }

        return this
    }

    dequeue() {
        let end = this.values.pop()
        this.values[0] = end

        let itemIdx = 0
        let leftIdx = 1
        let rightIdx = 2

        if(this.values.length > 0) {
            let left = this.values[leftIdx]
            let right = this.values[rightIdx]
            while(left && right && (end.priority > left.priority || end.priority > right.priority)) {
                let swapIdx = left.priority > right.priority ? rightIdx : leftIdx
                swap(this.values, itemIdx, swapIdx)
                itemIdx = swapIdx
                leftIdx = this.getChild(swapIdx)
                rightIdx = this.getChild(swapIdx, true)
                left = this.values[leftIdx]
                right = this.values[rightIdx]
            }
        }
        
        return this
    }
}

class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}