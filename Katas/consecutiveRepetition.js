function longestRepetition(s) {
  if(s === '') return ["",0];
  let counter = 1
  let lettersArr = []
  let countsArr = []
  let result = []

  for( let i = 0; i < s.length; i++ ) {
    let char = s[i]

    if(char === s[i + 1]) {
      counter++
    } else {
      lettersArr.push(char)
      countsArr.push(counter)
      counter = 1
      char = s[i + 1]
    }
  }

  for( let i = 0; i < countsArr.length; i++ ) {
    let highest = countsArr[0][1]
    let current = countsArr[i][1]
    if(current > highest) {
      highest = countsArr[i][1]
    }
  }

  const highestCount = Math.max(...countsArr)
  const hcIndex = countsArr.indexOf(highestCount)

  result.push(lettersArr[hcIndex], highestCount)
  return result
}


console.log(longestRepetition('bbaaacdddd'))