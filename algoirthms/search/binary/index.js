// It eliminates half of the remaining elements at a time in sorted arrays
function binary(arr = [], num) {
    let start = 0
    let end = arr.length - 1
    let middle = Math.round((start + end) / 2)
    
    while (arr[middle] !== num && end > start) {
        if(arr[middle] > num) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        middle = Math.round((start + end) / 2)
    }
    if(arr[middle] === num) return middle
    return -1    
}