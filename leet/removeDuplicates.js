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

var removeDuplicates = function(nums) {
    let k 
  for(let i = 0; i < nums.length;) {
     if(nums[i] === nums[i+1] && nums[i+1] !== "_"){
      nums.splice(nums[i], 1)
      nums.push('_')
    } else {
       i++
     }
  }

  k = nums.indexOf('_')
  return k + ", nums = [" + nums + "]"
};

console.log(removeDuplicates([0 , 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 5]))


// let arr = [1, 2, 3, 4, 5]

// arr.splice(1, 1)

// console.log(arr)


