function myReplace(str, before, after) {
  const regex = /[A-Z]/
  if( regex.test(before[0]) ){
    console.log('here')
    const a = after[0].toUpperCase() + after.slice(1)
    console.log(a, 'a')
    return str.replace(before, a) + ' yay'
  }  else {
    console.log('down')
    return  str.replace(before, after)
  }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"))