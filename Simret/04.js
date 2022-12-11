const numsArr = [1, 2, 3, 5, 8]

const equalsFour = (arr, n) => {
  const result = []

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < n ){
      for(let j = i + 1; j < arr.length; i++) {
        arr[i] + arr[j] === 4 ?
          result.push(arr[i], arr[j]) : null
      } 
    } 
  }
}

console.log(equalsFour(numsArr, 4))