
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




const isValid = (str) => {

}

const map = new Map([
  ['(', ')'],
])

// console.log('(' !== )