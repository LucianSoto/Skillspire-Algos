

// const users = [
//   { name: 'John', age: 34 },
//   // { name: 'Amy', age: 20 },
//   // { name: 'camperCat', age: 10 }
// ];

// const sumOfAges = users.reduce((sum, user) => sum + user.age);
// console.log(sumOfAges);

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

                      /////////does obj here or down there create an object?
const usersObj = users.reduce((obj, user) => {
  console.log(obj[0])
  console.log(obj)

  // obj[] creates a new object 
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj, 'result')

console.log(users[0], 'test')