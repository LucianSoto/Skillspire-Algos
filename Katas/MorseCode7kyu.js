function encryption(message) {
  //YourCodeHere
  //CHAR_TO_MORSE preloaded to convert characters into Morse code
//   console.log(CHAR_TO_MORSE)
  let resArr = []

  for(let l of message) {
    if(CHAR_TO_MORSE[l]) {
      resArr.push(CHAR_TO_MORSE[l])
    } else {
      resArr.push(' ')
    }
  }
   console.log(resArr)
  return resArr.join(' ')
}