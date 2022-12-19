const strs = ["eat","tea","tan","ate","nat","bat"]

const groupAnagrams = (strs) => {
  // console.log(strs)
  const sortedStrings = strs.map(str => 
    str.split('').sort().join('')
  )
  
  sortedStrings
  return 
}

console.log(groupAnagrams(strs))    