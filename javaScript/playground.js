// // let arr = [1, 2, 3]

// // let cutNew = arr.slice(0,1)
// // console.log(cutNew, arr)

// // let arr2 = [1, 2, 3]

// // let takeNew = arr2.splice(0,1)
// // console.log(takeNew, arr)

// // let arr3 = [1, 2, 3]

// // arr3.splice(0,1)
// // arr3.splice(0,1)
// // console.log(arr3)


// // let arr4 = [1, 2, 3]
// // arr4.slice(0,1)
// // console.log(arr4)

// // let arr5 = [1, 2, 3]
// // arr5.splice(1, 1, 'a', 'b', 'c', [1, 2, 3])
// // console.log(arr5)

// //splice changes the actual array
// // slice copies whatever you need 

// let numsArr = [1, 2, 3]

// const add = numsArr.reduce((a, b, i) => a + b)
// console.log(add)

// const sub = numsArr.reduce((a,b) => a - b)
// console.log(sub)

// const nums = [1, 2, 3, 5, 6, 87, 2, 5 ,3]
// const chosenOne = 3

// const remove = nums.filter(n => n !== chosenOne)
// // console.log(remove, 'remove')

// // console.log(nums, 'nums')

// const nums2 = nums.slice(0, nums.length/2)
// console.log(nums2, 'nums2', '\n', nums, 'nums')

// const nums3 = nums.splice(0, nums.length/2)
// nums.splice(1, 1, 'new number')
// console.log(nums3, 'nums 3', '\n', nums, 'nums')

const arr0 = [1, 2, 3, 4]

const initialValue = 0
function addAll (arr) {
  // console.log(arr)
  let adding =  arr0.reduce((a, c) => a + c, initialValue)
  return adding + ' sum'
}

// reduce(accumulator, currentValue, currentIndex, array)

const sumAll = arr0.reduce((a, c) => a + c, initialValue)

// console.log(addAll(arr0))
// console.log(sumAll)

// arr0.slice(0, 2)  
arr0.splice(0,1)  // alters the array -> used to add or remove elements of an existing array
arr0.splice(0,1, 10, 9) // does not alter the original array but returns a copy or portion of the array

//slice(start, end)
//splice(start, delectCount,  item1, item2, /*...*/, itemN)

console.log(arr0)