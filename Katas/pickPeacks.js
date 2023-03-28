function pickPeaks(arr){
  let peaks = []
  let pos = []

  for(let i = 1; i < arr.length - 1; i++){
    let current = arr[i]

    if(current > arr[i - 1]){
      if(current > arr[i + 1]){
        peaks.push(current)
        pos.push(i)
      } else if (current === arr[i + 1]){
        for (let j = i + 1; j < arr.length - 1; j++){
          if(current > arr[j + 1]){
            peaks.push(current)
            pos.push(i)
            {break}
          } else if (current === arr[j + 1]) {
            //continue loop
          } else if (current < arr[j + 1]) {
            // end loop
            i = j + 1
            {break}
          }
        }
      } else if (current < arr[i + 1]) {

      }
    } 
  }  
  return {
    pos: pos,
    peaks: peaks,
  }
}

console.log(pickPeaks([4,5,3,2,1,2,3,5,5,4,3,5,16, 6]))
