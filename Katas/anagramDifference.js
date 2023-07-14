function anagramDifference(w1,w2){
  if(!w2 && !w1) {return false}

  // if()

    let a1 = w1.split('')
    let a2 = w2.split('')

    let counter1 = 0

    a1.map(l => {
      // console.log(a2.indexOf(l), l)
      if(a2.indexOf(l) === -1) {
        counter1++
      } else if(a2.indexOf) {
        a2.splice(a2.indexOf(l), 1)        
      }
    })



    return counter1 + a2.length
    
 }

//  console.log(anagramDifference('codewars', 'hackerrank'))
 console.log(anagramDifference('ab', 'a'))



//  let arr = [1, 2, 3]

//  arr.splice(1,1)



//  console.log(arr)