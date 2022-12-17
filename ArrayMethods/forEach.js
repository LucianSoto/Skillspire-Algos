const string = 'Hi My name is, Whut'

const eachFor = (str) => {
  const strArr = str.split(' ')
  console.log(strArr, 'string array')
  strArr.forEach((word, i) => {
    console.log(word)
  })
}




// console.log(eachFor(string))

const numsArr = [1, 2, 3, 4]
const numsArr2= [4, 3, 2, 1]


const addArrays = (arr1, arr2) => {
  numsArr.forEach((num, index, arr2) => {
    console.log(num, index, numsArr2[index])
    console.log(num + numsArr2[index])
  })
}

// console.log(addArrays(numsArr, numsArr2))

// console.log(numsArr.filter(num => num === 4 || num === 2))

// console.log(numsArr.filter(num => num < 3))

// console.log(numsArr.filter(num => num !== 3))

// console.log(numsArr.reduce((acc, curr) => {
//   result = acc + curr
//   return result
// }))


const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    console.log(doubled, accumulator, 'Here')
    return [...accumulator, doubled];
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]