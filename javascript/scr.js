/**
 * 
 * object destruction and arrays
 * 
 * 1. spread
 * 2. rest
 */

// Array
// 1.Spread : unpack the elements into individual elements

let arr1 = [1, 2, 3]
console.log("Arr1-", arr1)

let arr2 = [...arr1, 4, 5] // output-[1,2,3,4,5]
console.log("Arr2-", arr2)

//copy

let arr3 = [...arr2]
console.log(arr3)

// concatenation
let arr5 = [...arr1, ...arr2] // [1,2,3,1,2,3,4,5]
console.log(arr5)

// objects
// {key:value}

let personx = {
    Name: "leo"
    Age: 20
};
let persony = {
    Name: "jai"
    Age: 20
};

// copy
let person2 = {...personx }
console.log(person2)

// concatenation
let person3 = {...personx, ...persony }
console.log(person3)

let new person = {...personx, city: "chennai" };
console.log(new person)

// spread with function
//function add(a,b){
//console.log(a+b)
//}

//let arr=[1,2,3,4]
//add(...arr) // output -3 (it will take only 1 & 2 not 3 & 4)

// rest: pack the elements into arrays
//array: must be add in last only

function add(a, b, ...arg) {
    console.log(a + b)

    console.log(arg)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8] // output: 3
    //[   3,4,5,6,7,8]

add(...arr)


const a = [1, 2, 3, 4, 5];
const b = { Name: "Hello" }
console.log("==>", a[1]) // output will be ==>2
console.log(b['Name']) // Hello
console.log(b.Name) // Hello

// Array destructuring
const [x, y, z] = [1, 2, 3, 4, 5]
console.log(x, y, z) // output = [1,2,3]

// object destructuring

const { Name, car } = { Name: "Hello"
    car: "Audi" };
console.log(Name, car);