var removeDuplicates = function(nums) {
  let arr1 = []
    for(let n of nums) {
      // console.log()
      !arr1.includes(n) ?
      arr1.push(n) :
      (console.log('nope'))

    }
    console.log(arr1)
};


console.log(removeDuplicates([0, 1, 1, 2 ]))


// get length of array
// for each array filter/ remove duplicates
    // loop and find  and push to new array
    // array get length of that first array
// get index of last number
// push blanks for rest of array