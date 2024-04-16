function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    getParent(num) {
        return Math.floor((num - 1) / 2)
    }

    getChild(num, right = false) {
        return num * 2 + (right ? 2 : 1)
    }

    insert(value) {
        this.values.push(value)
        let move = true
        let index = this.values.length
        while(move) {
            const parentIdx = this.getParent(index)
            if(this.values[parentIdx] > value || parentIdx < 0) move = false
            else {
                swap(this.values, index, parentIdx)
                index = parentIdx
            }
        }

        return this
    }

    extractMax() {
        let end = this.values.pop()
        this.values[0] = end

        let itemIdx = 0
        let leftIdx = 1
        let rightIdx = 2

        if(this.values.length > 0) {
            while(end < this.values[leftIdx] || end < this.values[rightIdx]) {
                let swapIdx = this.values[leftIdx] > this.values[rightIdx] ? leftIdx : rightIdx
                swap(this.values, itemIdx, swapIdx)
                itemIdx = swapIdx
                leftIdx = this.getChild(swapIdx)
                rightIdx = this.getChild(swapIdx, true)
            }
        }
        
        return this
    }
}