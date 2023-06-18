function incrementString (strng) {
  return /\d/.test(strng)
}



console.log(incrementString('foo'))


// 1)  check if string ends with a number

// if number - check where number starts and use that to iterate.

// get rid of any 00z that come before the first positive int

