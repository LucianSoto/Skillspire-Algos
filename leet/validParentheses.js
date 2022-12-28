
var isValid = function(s) {
  let obj1 = {
    "[" : 1,
    "{" : 2,
    "(" : 3,
  }
  
  let obj2 = {
    "]" : 1,
    "}" : 2,
    ")" : 3,
  }
  
  for(let i = 0; i < s.length / 2;) {
    console.log(obj1[s[i]])   
    i++
  }
};

console.log(isValid('[]()'))

// console.log(obj1, obj2)

// console.log(obj1["["] === obj2["}"])

let obj3 = {
  "[" : "]",
  "{" : "}"
}

console.log(ojb3['['])