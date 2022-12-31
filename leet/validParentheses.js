
// var isValid = function(s) {
//   if(s.length % 2 !== 0) {
//     return false
//   }
//   let res = true
//   let obj1 = {
//     "[" : 1,
//     "{" : 2,
//     "(" : 3,
//   }
  
//   let obj2 = {
//     "]" : 1,
//     "}" : 2,
//     ")" : 3,
//   }

//   let sArr = s.split('')
//   let arr1 = []
//   let arr2 = []
  
//   for(let i = 0; i < sArr.length / 2;) {
//     if(obj1[sArr[i]] === obj2[sArr[i + 1]]){
//       sArr.splice(0,2)
//     } else {
//       arr1.push(sArr[i])
//       i++
//     }
//   } 
//   // console.log(sArr)
//   arr2 = sArr
//   console.log(arr2)

//   if(arr2.length > 0) {
//     for(let i = 0; i < arr1.length; i++){
//       // console.log(obj1[s[i]] , obj2[arr2[i]])
//       if(obj1[s[i]] === obj2[arr2[i]]) {
//         // console.log('true')
//       } else {
//         return false
//       }
//     }
//   }
//   return res
// };

// console.log(isValid('[]()'))
// console.log(isValid('(({{}}))'))
// console.log(isValid('({(}}}'))
// console.log(isValid('('))

// // console.log(obj1, obj2)

// // console.log(obj1["["] === obj2["}"])

// let obj3 = {
//   "[" : "]",
//   "{" : "}"
// }
// // for (const [key, value] of Object.entries(obj3)
// // console.log()


// // const object1 = {
// //   a: 'somestring',
// //   b: 42
// // };

// // for (const [key, value] of Object.entries(object1)) {
// //   console.log(`${key}: ${value}`);
// // }

// // expected output:
// // "a: somestring"
// // "b: 42"

// // console.log('{' === obj['}'])

// const str = 'abc'

// let strArr = str.split('')

// // console.log(strArr)

// //first parameter is index, second is number of indexes to splice
// // console.log(strArr.splice(1,2))




// var isValid = function(s) {
//   const hm = { "(": ")", "{" : "}", "(" : ")" }
//   const stk = []
//   for (let char of s) {
//     if(hm[char]) {
//       stk.push(hm[char])
//     } else if (stk.length > 0 && stk[stk.length - 1] === char) {
//       stk.pop()
//     } else {
//       return false
//     }
//   }
//   return stk.length === 0
// }

var isValid = function(s) {
  if(s==='') { return true}
  if(s.length % 2 !== 0) { return false }
  const pairs = { "[":"]", "(":")", "{":"}" }
  let stack = []
  let sArr = s.toString().split("")

  for(let i = 0; i < sArr.length; i++){
    let br = sArr[i]
    // console.log(pairs[br], 'pairs bracket')
    if(pairs[br]){
      stack.push(br)
      // console.log(stack)
    }
    else {
      let chkBr = stack.pop()
      // console.log(br, pairs[chkBr], 'after pop')
      if(pairs[chkBr] != br){
        return false
      }
    }
  }

  return stack.length === 0
}

console.log(isValid('(({}[]))'))

// const pairs = { "[":"]", "(":")", "{":"}" }

// console.log(pairs["]"])
// console.log(pairs[])