// let arr = [1, 2, 3, 4, 5]

// const fA = arr.filter(a => a !== 3)
// console.log(fA)

// arr = arr.filter(n => n !== 2)

// console.log(arr, 'result')



// console.log(arr.filter(a => a = 1))

// console.log(arr.includes(1))

// console.log(arr.indexOf(1))

// arr.splice(arr.indexOf(2), 1)

// console.log(arr)

// const arr1 = ['hello', 'hi', 'Oh Yeah!']

// // console.log(arr1.indexOf('hi'), 'index of')

// arr1.splice(arr1.indexOf('hi'), 1)

// console.log(arr1)

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  console.log(accumulator, currentvalue),
  0,
);

console.log(sum); // 6



