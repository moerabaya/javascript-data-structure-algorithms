// it loops over the array one item at a time until it finds a match
function linearSearch(array, num) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === num) {
        return i;
      }
    }
    return -1;
}
  