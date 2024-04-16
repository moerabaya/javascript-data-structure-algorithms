import Queue from '../../queue/index.js'

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if(!this.root) {
            this.root = node
            return this
        } else {
            let temp = this.root
            while(true){
                if(value === temp.value) return this
                if(value > temp.value) {
                    if(!temp.right) {
                        temp.right = node
                        return this
                    }
                    temp = temp.right
                } else {
                    if(!temp.left) {
                        temp.left = node
                        return this
                    }
                    temp = temp.left
                }
            }
        }
    }
    find(value) {
        if(!this.root) return undefined
        let current = this.root
        let found = false
        while(current && !found) {
            if(value === current.value) {
                found = true
            } else if(value > current.value) {
                current = current.right
            } else {
                current = current.left
            }
        }

        return current
    }

    BFS() {
        let data = []
        let queue = []
        queue.push(this.root)
        while(queue.length) {
            const item = queue.shift()
            if(item.left) {
                queue.push(item.left)
            }
            if(item.right) {
                queue.push(item.right)
            }
            data.push(item.value)
            
        }
        return data
    }

    DFSPreOrder() {
        let data = []
        function trevarse(node) {
            data.push(node.value)
            if(node.left) trevarse(node.left)
            if(node.right) trevarse(node.right)
        }
        trevarse(this.root)

        return data
    }

    DFSPostOrder() {
        let data = []
        function trevarse(node) {
            if(node.left) trevarse(node.left)
            if(node.right) trevarse(node.right)
            data.push(node.value)
        }
        trevarse(this.root)

        return data
    }
    
    DFSInOrder() {
        let data = []
        function trevarse(node) {
            if(node.left) trevarse(node.left)
            data.push(node.value)
            if(node.right) trevarse(node.right)
        }
        trevarse(this.root)

        return data
    }
}