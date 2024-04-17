class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(value) {
        if (!this.adjacencyList[value]) this.adjacencyList[value] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
}

export default WeightedGraph;
