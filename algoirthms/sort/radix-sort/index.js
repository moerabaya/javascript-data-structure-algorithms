function getDigit(num, idx) {
    return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
}

function maxDigit(arr) {
    return arr.reduce((acc, x) => Math.max(digitCount(x), acc), 0)
}

function digitCount(num) {
    if(num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function radixSort(arr) {
    const max = maxDigit(arr)
    
    for(let i = 0; i < max; i++) {
        let buckets = Array.from({length: 10}, () => [])
        for(let k = 0; k < arr.length; k++) {
            const digit = getDigit(arr[k], i)
            buckets[digit].push(arr[k])
        }
        arr = [].concat(...buckets)
        
    }
    return arr
}