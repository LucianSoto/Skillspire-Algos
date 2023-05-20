

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age);
console.log(sumOfAges);


                      /////////does obj here or down there create an object?
// const usersObj = users.reduce((obj, user) => {
//   console.log(obj[0])
//   console.log(obj)

//   // obj[] creates a new object 
//   obj[user.name] = user.age;
//   return obj;
// }, {});
// console.log(usersObj, 'result')

// console.log(users[0], 'test')



//-----------------------------> obj here creates an object
// const newUsers = users.reduce((obj, user) => {
//   obj[user.name] = user.age;
//   return obj;
// }, {});
// console.log(newUsers, ' result');


let string = "10.2"

// console.log(eval(string, 10), 'converted')
// console.log(Math.floor(string))


const squareList = arr => {
  let resArr = []

  // let fArr = arr.map((curr) => {
  //   curr % 1 === 0 && curr > 0 ? resArr.push(curr) : null
  // })

  // resArr = resArr.map(curr => curr * curr)

  // console.log(resArr, 'res arr')

  let fArr = arr.filter((c) => 
    c % 1 === 0 && c > 0
  )

  

  console.log(fArr)
  
  return fArr.map((c) => c * c);
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);