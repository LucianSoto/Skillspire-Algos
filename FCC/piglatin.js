

function translatePigLatin(str) {
  // let regex = /[aeiou]/
  // str = str.split('')
  
  // for(let i = 0; i < str.length; i++) {
  //   // console.log(str.length)
  //   if(str[0].match(regex)){
  //     if(i === 0) {
  //       str = str.join('')
  //       return str + 'way'
  //     } else {
  //       return str + 'ay'
  //     }
  //   } else {
  //     console.log('here')
  //     str.push(str[0])
  //     str.shift()
  //     // console.log(str, str[0])
  //   }
  //   i++
  // }
  // return str.join('') + 'ay'

  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("schwartz"))



// let string = 'hello'
// string = string.split('')

// console.log(string)
// console.log(string.push(string[0]))
// console.log(string)
// console.log(string.shift())
// console.log(string)

