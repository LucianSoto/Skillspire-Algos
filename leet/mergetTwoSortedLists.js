// var mergeTwoLists = function(l1, l2) {
//   let comArr = l1.slice()
//   console.log(comArr)
//   comArr.splice(l1.length, 0, ...l2)

//   return comArr.sort() 
// }

// console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]))
// // console.log(mergeTwoLists([], []))



var mergeTwoLists = function(list1, list2) {
  let comArr = list1.slice()
  console.log(comArr)
  comArr.splice(list1.length, 0, ...list2)

  return comArr.sort() 
} 