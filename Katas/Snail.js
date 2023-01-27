function snail(column, day, night) {
  let columnH = column
  let counter = 0
  
  while(columnH > 0) {
    columnH -= day
    counter++
    if(columnH <= 0){
      return counter
    } else {
      columnH += night
    }
  }
  return counter
}

console.log(snail(10, 3, 1))