 // given an input of numbers, return the counts of odd and even numbers

const numsArr = [3, 6, 3, 7, 8, 1, 345, 8, 5]

const counts = (arr) => {
  let evens = 0
  let odds = 0

  for (let n of arr) {
    n % 2 === 0 ? evens++ : odds++
  }

  return {
    evens: evens,
    odds: odds
  }
}

console.log(counts(numsArr))