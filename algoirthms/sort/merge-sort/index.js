function merge(arr1, arr2) {
    let result = []
    let i = 0;
    let j = 0
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }

    for(let x = i; x < arr1.length; x++) {
        result.push(arr1[x])
    }
    for(let z = j; z < arr2.length; z++) {
        result.push(arr2[z])
    }
    return result
}

function mergeSort(arr) {
    // break array in half repeatdly until we end up with one or zero items
    // compare arrays and merge them together
    if(arr.length <= 1) return arr
    // half point (whole number)
    let halfPoint = Math.round(arr.length / 2)
    const first = mergeSort([...arr].splice(0, halfPoint))
    const second = mergeSort([...arr].splice(halfPoint, arr.length))
    
    return merge(first, second)
}