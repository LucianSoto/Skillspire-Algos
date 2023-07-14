function dominator (arr) {
  let ob = {}
  const half = arr.length / 2
  let res = -1

  for(let n of arr) {
    ob[n] = ob[n] + 1 || 1
  }

  for(let [key, value] of Object.entries(ob)) {
    if(value > half) {
      res = key
      break
    }
  }
 
  res = parseInt(res)
  return res
}

console.log(dominator([3,4,3,2,3,1,3,3]))