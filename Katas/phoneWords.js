function phoneWords(stringOfNums) {
  const letters = {
    '2' : 'a',
    '22' : 'b',
    '222' : 'c',
    '3' : 'd',
    '33' : 'e',
    '333' : 'f',
    '4' : 'g',
    '44' : 'h',
    '444' : 'i',
    '5' : 'j',
    '55' : 'k',
    '555' : 'l',
    '6' : 'm',
    '66' : 'n',
    '666' : 'o',
    '7' : 'p',
    '77' : 'q',
    '777' : 'r',
    '7777' : 's',
    '8' : 't',
    '88' : 'u',
    '888' : 'v',
    '9' : 'w',
    '99' : 'x',
    '999' : 'y',
    '9999' : 'z',
    '0' : ' '
  }
  if(stringOfNums.length = 0) {return ''}
  const arr = stringOfNums.split('')
  let word = ''
  let current = ''

  while ( arr.length > 0 ) {
    let current = ''

    if(arr[0] === '1') {
      arr.splice(0,1)
    } else if ( arr[0] === '0') {
      word += ' '
      arr.splice(0,1)
    }else if (arr[0] !== arr[1] ) {
      current += arr[0]
      word += letters[current]
      arr.splice(0,1)
    } else if ( arr[3] === arr[2] && arr[2] === arr[1] && arr[3] ==='7' ) {
      current += arr[3] + arr[2] + arr[1] + arr[0]
      word += letters[current]
      arr.splice(0,4)
    } else if ( arr[3] === arr[2] && arr[2] === arr[1] && arr[3] ==='9' ) {
      current += arr[3] + arr[2] + arr[1] + arr[0]
      word += letters[current]
      arr.splice(0,4)
    } else if (arr[2] === arr[1] ) {
      // console.log(arr[2], arr[1], arr[0])
      current += arr[2] + arr[1] + arr[0]
      word += letters[current]
      arr.splice(0, 3)
    } else {
      current += arr[1] + arr[0]
      word += letters[current]
      arr.splice(0,2)
    }
  }
  return word
}

// && arr[3] === '7' || arr[3] === '9'

console.log(phoneWords('111'))
console.log(phoneWords('000'))
console.log(phoneWords('22266631339277717777'))
console.log(phoneWords('443355555566604466690277733099966688'))
console.log(phoneWords('99990007777'))
console.log(phoneWords('66885551555'))
//4433 555 555 66604466690277733099966688

// this is how we can get keys by the value
// const getKey = (obj, val) => Object.keys(obj).find(key => obj[key] === val)
// console.log(getKey(letters, '22'))
// console.log(letters['2'])


///// should use array for this challenge as strings cannot be manipulated as easily as arrays.
// var numbers = '5545'

// var newnumbers = numbers.slice(0,2)

// console.log( numbers, newnumbers)

// const numsArr = [1, 1, 2]

// console.log(numsArr[0] === numsArr[2], 'numsArr comparision')

// numsArr.splice(0,2)

// console.log(numsArr)

const numsArr = [ '1', '2', '3']
let numsWord = 'wer'
// for(let i = 0; i < numsArr.length ; i++) {
//   numsWord += numsArr[i]
// }

// numsWord = numsArr[0] + numsArr[1] + numsArr[2]

// console.log(numsWord, 'nums word')

// console.log(letters[22])

// numsWord = 'a' + ' ' + ' '
// console.log(numsWord.split(''))

// console.log(numsWord.splice(2, 3))