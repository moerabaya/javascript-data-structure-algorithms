function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

// it loops over array several times to re-arrange smallest to left
function selection(arr) {
    for(let i = 0; i < arr.length; i++) {
        let smallest = i
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < arr[smallest]) smallest = j
        }
        swap(arr, i, smallest)
    }
    return arr
}