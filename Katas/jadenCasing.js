const jadenCasing = (str) => {
  let strArr = str.split(' ')
  
  for(let i = 0; i < strArr.length - 1; i++) {
    let word = strArr[i].split('')
    word[0] = word[0].toUpperCase()
    word = word.join('')
    strArr[i] = word
  }
  return strArr.join(' ')
}

console.log(jadenCasing("How can mirrors be real if our eyes aren't real"))


// let word = 'hello'

// word = word.split('') 

// word[0] = word[0].toUpperCase()

// word = word.join('')
// console.log(word)


