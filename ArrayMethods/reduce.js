const array = [15, 16, 17, 18, 19];
const array2 = [100, 40, 2]

const arrayReducer = array.reduce((prev, curr, index) => {
  return prev + curr
})

const arraySubtractor = array2.reduce((prev, curr) =>
  prev - curr
) 

console.log(arrayReducer)
console.log(arraySubtractor)
console.table(array)  