function longestRepetition(s) {
  if(s === '') return ["",0];
  let counter = 1
  let countsArr = []

  for( let i = 0; i < s.length; i++ ) {
    let char = s[i]

    if(char === s[i + 1]) {
      counter++
      console.log(true, char, counter)
    } else {
      console.log(counter, char)
      // push prev to array 
      // then set new char
      // then reset counter 
      countsArr.push([char, counter])
      counter = 1
      char = s[i + 1]
    }
  }

  // countsArr.map((arr, i) => {
  //   let max = 
  // })

  for( let i = 0; i < countsArr.length; i++ ) {
    let highest = countsArr[0][1]
    let current = countsArr[i][1]
    if(current > highest) {
      highest = countsArr[i][1]
    }
    console.log(highest, 'highest')
  }

  console.log(countsArr, 'counts arr')
  return countsArr
}


longestRepetition('bbaaa')