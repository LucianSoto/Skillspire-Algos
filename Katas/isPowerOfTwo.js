function isPowerOfTwo(n){
  //.. should return true or false ..
  return Math.log2(n) % 1 === 0
}

console.log(isPowerOfTwo(4096))
console.log(isPowerOfTwo(333))
