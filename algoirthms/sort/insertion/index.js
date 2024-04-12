// it works by keeping left side always sorted
function insertion(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        for(var j = i; j > 0 && arr[j - 1] > currentValue; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = currentValue
    }
    return arr
}