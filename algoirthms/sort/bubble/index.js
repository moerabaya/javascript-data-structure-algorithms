function swap(arr, idx1, idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

// it loops over the array n^2, each time moving the largest item a step further
function bubble(arr) {
    let noSwaps
    for(let i = arr.length; i > 0; i--){
        noSwaps = true
        for(let j = 0; j < i - 1; j++) {
            
            if(arr[j] > arr[j + 1] && j + 1 < arr.lengt){
                swap(arr, j, j + 1)
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    
    return arr;
}