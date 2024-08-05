const array = [1, 2, 3, 4, 5, 6]

// Map- IT LIKE A FOR LOOP -[IT RETURN AS AN ARRAY]

const ans = array.map((e) == > {
    return e
})
console.log(ans)





// filter - IT LIKE A FOR LOOP + condition -[IT RETURN AS AN ARRAY]
const filterans = array.filter((e) == > {
    return e > 3 // output-[4,5,6]
})
console.log(filterans)

const filterans = array.filter((e) == > {
    return e // output-[1,2,3,4,5,6]
})
console.log(filterans)




// reduce
const ans3 = array.reduce((accumulater, currentvalue) => {
    return accumulater + currentvalue;
});
console.log(ans3); // output of [1,2,3,4,5,6]= 21

// reverse
console.log(array.reverse()) // output - [6,5,4,3,2,1]

// flat
console.log(array.flat()) // if array=[1,2,3,4,[1,2,3]], using flat it reduces into one array = [1,2,3,4,1,2,3]

//forEach
array.forEach((e) => {
        console.log("--", e) //  array=[1,2,3,4,[1,2,3]]= --[1,2,3]
            // --4
            // --3
            // --2
            // --1
    })
    /**
     * 
     * Mutable- we can change[ it will change the original array]
     * - reverse()
     * - pop()
     * - push()
     * 
     * Immutable - we cannot change [ it will not change the original array]
     * - map()
     * - filter()
     * - reduce()
     * 
     */

const val = "HELLO WORLD"
console.log(val.toLowerCase()) // output- hello world
console.log(val.toUpperCase()) // output - HELLO WORLD

// trim
const val1 = " HELLO "
console.log(val1.trimStart()) // output - HELLO '
console.log(val1.trimStart().length) // output - 6
console.log(val1.trim().length) // output - 5
console.log(val1.includes("a")) // ouput - false
console.log(val1.includes("e")) // ouput - true