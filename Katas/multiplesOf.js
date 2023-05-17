function solution(n) {
  let resArr = []
  let sum = 0

  for (let i = 3; i < n; i++){
    if(i % 3 == 0) {
      resArr.push(i)
    }
  }

  for (let i = 5; i < n; i++){
    if(i % 5 == 0 && resArr.indexOf(i) === -1) {
      resArr.push(i)
    }
  }

  for(let i = 0; i <= resArr.length-1; i++){
    sum = sum + resArr[i]
  }

  return sum
}

console.log(solution(16))