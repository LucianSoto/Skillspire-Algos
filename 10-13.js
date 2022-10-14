const array = [98,45,78,9,0]

const printReverse = (array) => {
  let resultArr = []
  for(let i = array.length - 1; i >= 0; i--) {
    resultArr.push(array[i])
  }
  console.log(resultArr)
  return resultArr
}

printReverse(array)

// 1. Given an array of [98,45,78,9,0], use a loop to print this array in reverse.
// 2. Given an array of [98,45,78,9,0], call a function that accepts the array, goes 
// through it and modifies each element by adding 10, and returns the modified 
// array. 
var number = 10

const addItemsInArray = (arr, num) => {
  const resultArr = []
  
  for(let i = 0; i <= arr.length - 1; i++) {
    resultArr.push(arr[i] + num)
  }
  return console.log(resultArr)
}  

addItemsInArray(array, number)

console.log(array.map((num, i) =>  num + 10 ))
