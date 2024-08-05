// variables

let num = 5
let names = "LEO" // local scope


var a = "leonard" // global scope
const pi = 3.14

//console.log(a)

{
    // let a = "hello"
    //console.log(a)
}

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

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5, true, "hello"]

// 1. How to access element in an array
console.log(arr2[5])

// 2. How to modify the element in an array
console.log("before modify:", arr1)
arr1[3] = true
console.log("after modify:", arr1)

// 3. How to add and remove a element in an array
arr1.push(6)
console.log(arr1)
arr1.pop()
console.log(arr1)
    // 4. length of an array
console.log(arr1.length)

// OBJECTS
// 1. creating objects

let person = { Name: "rohit", age: 35 }
console.log(person)

let person1 = { Name: "virat", age: 35 }
console.log(person)

/* 2.How to access a element
(i) Dot Notation
(ii) Braket Notation */

// Dot Notation

console.log(person.Name);

// Bracket Notation
console.log(person1["Name"])

// How to modify an Object
// Dot Notation

person.Name = "maxwell"
console.log(person)

// Bracket Notation
person["Name"] = "raina"

// adding properties

person.color = "yellow"

// accessing not presented element
console.log(person.xyz) // results as "undefined"

/* identifiers : set of rules naming the variable
 -firstname
 -$firstname
 -_firstname
 -firstname12
 -123firstname
 -first name*/

const person2 = {
    NAME: "sam",
    num: "12345",
    habit: true,
    habits: ['chess', 'dancing'],
    car: {
        "name": "A5",
        "model": "efefr"
    },
    run: function() {
        console.log("From a function")
    }
}

console.log(person2.name, person2.num, person2.run, person2.habits, person2.habits[1], person2.car.model)

// === [types]=5="5"
console.log(5 == "5") // results true
console.log(5 === "5") // results along with type and true 



const { NAME, num } = {
    NAME: "sam",
    num: "12345",
    habit: true,
    habits: ['chess', 'dancing'],
    car: {
        "name": "A5",
        "model": "efefr"
    },
    run: function() {
        console.log("From a function")
    }
}
console.log(NAME)

const [a, b, c] = [0, 1, 2]
console.log(a, b, c)