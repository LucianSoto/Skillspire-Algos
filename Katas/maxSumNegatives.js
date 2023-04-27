function maxSumBetweenTwoNegatives(a) {
  let resArr = []
  let current = 0
  let current2 = 0

  if ( a.length === 0 ){
    return -1
  }

  for(let i = 0; i < a.length; i++){
    if(a[i] > 0 && i !== 0){
      current = current + a[i]
    }

    if(a[i] < 0 ) {
      resArr.push(current)
      current = 0
    }
  }

  console.log(resArr)
  for(let i = 0; i < resArr.length; i++){
    if(resArr[i] > current2) {
      current2 = resArr[i]
    }
  }

  console.log(current2)
  // current2 > 0 ? current2 : current2 = -1

  return current2
}


console.log(maxSumBetweenTwoNegatives([5, -1, -2]))