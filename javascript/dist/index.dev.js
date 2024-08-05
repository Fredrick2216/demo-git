"use strict";

// variables
var num = 5;
var names = "LEO"; // local scope

var a = "leonard"; // global scope

var pi = 3.14; //console.log(a)

{} // let a = "hello"
//console.log(a)
//let x = 5
//let y = ++x
//console.log("X:", x)
//console.log("Y:", y)
//let c = 5
//let d = c++
//  console.log("C:", c)
//console.log("D:", d)
//let numb = 5
//let bool = true
//let ab = "sam"
//console.log(typeof(numb), typeof(bool), typeof(ab))
//function abd(x, y) {
//console.log(x + y)
//return 5
//}
//abd(5, 5)
//abd(10, 10)
//abd(20, 20)
//function area(l, b) {
//return l * b
//}
//const ans = area(5, 5)
//console.log(ans)
//let f = 100
//if (f == 100) {
//console.log("IF BLOCK")
//} else {
//console.log("FALSE BLOCK")
//}
//if (f == 10) {
//console.log("IF BLOCK")
//} else {
//console.log("FALSE BLOCK")
//}
//for (let i = 0; i < 3; i++) {
//console.log(i)
//}
// ARRAY

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5, true, "hello"]; // 1. How to access element in an array

console.log(arr2[5]); // 2. How to modify the element in an array

console.log("before modify:", arr1);
arr1[3] = true;
console.log("after modify:", arr1); // 3. How to add and remove a element in an array

arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1); // 4. length of an array

console.log(arr1.length); // OBJECTS
// 1. creating objects

var person = {
  Name: "rohit",
  age: 35
};
console.log(person);
var person1 = {
  Name: "virat",
  age: 35
};
console.log(person);
/* 2.How to access a element
(i) Dot Notation
(ii) Braket Notation */
// Dot Notation

console.log(person.Name); // Bracket Notation

console.log(person1["Name"]); // How to modify an Object
// Dot Notation

person.name = "maxwell";
console.log(person);