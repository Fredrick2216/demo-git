"use strict";

/**
 * 
 * object destruction and arrays
 * 
 * 1. spread
 * 2. rest
 */
// Array
// 1.Spread : unpack the elements into individual elements
var arr1 = [1, 2, 3];
console.log("Arr1-", arr1);
var arr2 = [].concat(arr1);
console.log("Arr2-", arr2);