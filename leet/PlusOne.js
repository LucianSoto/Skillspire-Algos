var plusOne = function(digits) {
  for(let i = digits.length - 1; i >= 0; ) {
    let current = digits[i] + 1
    if(current < 10) {
      digits[i] = current
      return digits
    } else {
      if (i > 0){
        digits[i] = 0
        i--
      } else if (i === 0) {
        digits[i] = 0
        digits.unshift(0)
      }
    }
  }
};

console.log(plusOne([1, 2, 9]))