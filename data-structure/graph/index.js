class Graph {
    constructor() {
        this.adjacencyList = {};
        this.DFS = this.DFS.bind(this);
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if (!this.adjacencyList[vertex1].includes(vertex2))
                this.adjacencyList[vertex1].push(vertex2);
            if (!this.adjacencyList[vertex2].includes(vertex1))
                this.adjacencyList[vertex2].push(vertex1);
        } else {
            throw new Error("You can only add edges to valid vertices");
        }
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if (!this.adjacencyList[vertex1].includes(vertex2))
                this.adjacencyList[vertex1] = this.adjacencyList[
                    vertex1
                ].filter((v) => v !== vertex2);
            if (!this.adjacencyList[vertex2].includes(vertex1))
                this.adjacencyList[vertex2] = this.adjacencyList[
                    vertex2
                ].filter((v) => v !== vertex1);
        } else {
            throw new Error("You can only remove edges from valid vertices");
        }
    }

    removeVertex(name) {
        if (this.adjacencyList[name]) {
            this.adjacencyList[name].forEach((value) => {
                this.adjacencyList[value] = this.adjacencyList[value].filter(
                    (v) => v !== name
                );
            });
            delete this.adjacencyList[name];
        } else {
            throw new Error("The vertex passed does not exist");
        }
    }

    DFS(start) {
        let visited = {};
        let results = [];

        (function dfsHelper(vertex) {
            if (!this.adjacencyList[vertex]) return;
            visited[vertex] = true;
            results.push(vertex);
            this.adjacencyList[vertex].forEach((v) => {
                if (!visited[v]) return dfsHelper.call(this, v);
            });
        }).bind(this)(start);

        return results;
    }

    DFSIterative(start) {
        let stack = [],
            results = [],
            visited = {};
        stack.push(start);
        visited[start] = true;
        while (stack.length) {
            let vertix = stack.pop();
            results.push(vertix);
            this.adjacencyList[vertix].forEach((v) => {
                if (!visited[v]) {
                    visited[v] = true;
                    stack.push(v);
                }
            });
        }

        return results;
    }

    BFS(start) {
        let stack = [],
            results = [],
            visited = {};
        stack.push(start);
        visited[start] = true;
        while (stack.length) {
            let vertix = stack.shift();
            results.push(vertix);
            this.adjacencyList[vertix].forEach((v) => {
                if (!visited[v]) {
                    visited[v] = true;
                    stack.push(v);
                }
            });
        }

        return results;
    }
}
