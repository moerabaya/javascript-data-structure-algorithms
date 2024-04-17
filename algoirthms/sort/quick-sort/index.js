import swap from "../../../util/swap.js";

function pivot(arr, start = 0, end = arr.length - 1) {
    const currentValue = arr[start];
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
        if (currentValue > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx);
        }
    }
    swap(arr, start, swapIdx);

    return swapIdx;
}

function quick(arr, left = 0, right = arr.length - 1) {
    if (right <= left) return;
    // we create our pivot point
    let pivotIdx = pivot(arr, left, right);
    // left quick sort
    quick(arr, left, pivotIdx - 1);
    // right quick sort
    quick(arr, pivotIdx + 1, right);

    return arr;
}
