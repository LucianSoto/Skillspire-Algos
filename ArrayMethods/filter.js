 // given an input of numbers, return the counts of odd and even numbers

 const nums = [1, 4, 5, 6, 7, 8, 10]

 const lessThan7 = (arr) => {
  const lessThan = arr.filter(n => n < 7)
  return lessThan
 }

 console.log(lessThan7(nums))