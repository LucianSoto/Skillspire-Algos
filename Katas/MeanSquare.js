var solution = (arr1, arr2) => {
  let compArr = []

  if(arr1.length !== arr2.length) {
    return false
  }
  for(let i = 0; i < arr1.length; i++){
    let current = Math.abs(arr1[i] - arr2[i] )
    // console.log(current * current)
    compArr.push(current * current)
  }

  // console.log(compArr)
  const res = compArr.reduce((p, c, i) => {
    return p + c 
  })

  // console.log(res)
  return res / arr1.length

}

console.log(solution([1, 2, 3], [4, 5, 6]))

console.log(solution([10,20,10,2],[10,25,5,-2]))