var lengthOfLastWord = function(s) {
    s.split(' ')
    let wordArr = s.split(' ')
    let res = wordArr.filter( word => word.length > 0)
   return  res[res.length - 1].length
  
};

console.log(lengthOfLastWord("   fly me   to   the moons  "))