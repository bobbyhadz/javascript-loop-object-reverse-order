// EXAMPLE 1 - Loop through Object in Reverse Order in JavaScript

const obj = {
  a: 'one',
  b: 'two',
  c: 'three',
};

// 👇️ ['c', 'b', 'a']
const reversedKeys = Object.keys(obj).reverse();

reversedKeys.forEach(key => {
  console.log(key, obj[key]); // 👉️ c three, b two, a one
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Loop through an Object's Values in Reverse Order in JavaScript

// const obj = {
//   a: 'one',
//   b: 'two',
//   c: 'three',
// };

// // 👇️ [ 'three', 'two', 'one' ]
// const reversedValues = Object.values(obj).reverse();

// reversedValues.forEach(value => {
//   console.log(value); // 👉️ three, two, one
// });

// ------------------------------------------------------------------

// // EXAMPLE 3 - Loop through an Object's entries in Reverse Order in JavaScript

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// // 👇️ [ [ 'c', 3 ], [ 'b', 2 ], [ 'a', 1 ] ]
// const reversedEntries = Object.entries(obj).reverse();

// reversedEntries.forEach(([key, value]) => {
//   console.log(key, value); // 👉️ c 3, b 2, a 1
// });
