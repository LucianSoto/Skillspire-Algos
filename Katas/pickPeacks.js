function pickPeaks(arr){
  // console.log(arr[arr.length - 1])
  let current
  let peaks = []
  let pos = []

  for(let i = 1; i < arr.length - 1; i++){
    let current = arr[i]

    if(current > arr[i - 1]){
      if(current > arr[i + 1]){
        peaks.push(i)
      } else if (current === arr[i + 1]){
        for (let j = i + 1; j < arr.length - 1; j++){
          console.log(current, j , arr[j+1])
          if(current > arr[j + 1]){
            peaks.push(i)
          } else if (current === arr[j + 1]) {
            //continue loop
          } else if (current < arr[j + 1]) {
            console.log('in here', current, arr[j + 1])
            // end loop
            i = j
            {break}
          }
        }
      }
    } 
  }  

return peaks

  //  return {pos:[],peaks:[]}  Where peaks == height of pos
}

console.log(pickPeaks([1, 3, 3, 3, 4, 2]))
