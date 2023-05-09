function countUniqueValues(arr){
  let counter = 1
  if ( arr.length === 0) {
    return 0
  }
  for (let i = 0, j = 1;  i < arr.length - 1; ) {

    if (arr[i] === arr[j] ) {
      j++
    } else if (arr[i] !== arr[j]){
      counter++
      i = j
      j++
    }
  }
  return counter
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5]))