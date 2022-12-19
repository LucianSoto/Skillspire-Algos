// splice
const list1 = [1, 2, 4]
const list2 = [1, 3, 4]

// console.log(list1.slice(0,2))
// console.log(list1.splice(0,2))

// console.log(list1, list2)

// splice actually takes away from array
// slice just copies whaever you want in the array.
var mergeTwoLists = (list1, list2) => {
  let resArr = []
  while(list1.length > 0 && list2.length > 0) {
    // let i = 0
    list1[0] < list2[0] ?
      (resArr.push(list1[0]), list1.splice(0,1)) : (resArr.push(list2[0]), list2.splice(0,1))
  }
  // console.log('lengths', list1.length, list2.length)

  console.log(list1)
  // list1.length == true ? 
    // (console.log('here'), resArr.concat(list1)) : (resArr.concat(list2), console.log('over here'))

  if(list1.length == true) {
    // console.log('here')
    resArr.push(...list1)
  } else {
    resArr.push(...list2)
  }

  return resArr 
}

console.log(mergeTwoLists(list1, list2))