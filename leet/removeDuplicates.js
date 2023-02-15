// var removeDuplicates = function(nums) {
//   let k
//   let arr1 = []
//   for(let n of nums) {
//     !arr1.includes(n) ?
//     arr1.push(n) :
//     null
//   }
//   k = arr1.length
  
//   for(let i = k; i < nums.length; i++) {
//     arr1.push('_')
//   }
  
//   return k  + ", nums = " + arr1

// };


// console.log(removeDuplicates([0, 1, 1, 2, 3, 3, 3 ]))


// get length of array
// for each array filter/ remove duplicates
    // loop and find  and push to new array
    // array get length of that first array
// get index of last number
// push blanks for rest of array

// var removeDuplicates = function(nums, val) {
//   let k = 0
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] === val) {
//       nums[i] = "_"  

//       k++
//     } else {
//       console.log(false)
//     }
//   }


//   return 
// };

// console.log(removeDuplicates([2, 3, 2], 3))

var removeElement = function(nums, val) {
  if(nums.length == 0)
  return 0

  let firstPoint = 0

  for (let secondPoint = firstPoint; secondPoint < nums.length; secondPoint ++)
    if(nums[secondPoint] !== val)
      nums[firstPoint++] = nums[secondPoint]

    return firstPoint
}

// let arr = [1, 2, 3, 4, 5]

// arr.splice(1, 1)

// console.log(arr)


