

const frequencyAnagram = (s1, s2) => {
  let obj1 = {}
  let obj2 = {}

  if(s1.length !== s2.length) {
    return false
  }

  for(let l of s1) {
    // console.log(l)
    obj1[l] = (obj1[l] || 0) + 1
  }

  for(let l of s2) {
    obj2[l] = (obj2[l] || 0) + 1
  }

  for(let i in obj1) {
    console.log(obj2[i], obj1[i])

    if(obj1[i] !== obj2[i]) {
      console.log('fail')
    }
  }
  // console.log(obj1, obj2)
}

console.log(frequencyAnagram('banana', 'nanaba'))