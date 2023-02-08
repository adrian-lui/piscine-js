"use strict";

/*
Create a function named chunk which accepts an array and an integer representing a size.

Your function will chunk the array into sub-arrays, and return an array with each sub-array as its elements. The length of each sub-array is denoted by the size argument.

If the array cannot be split evenly, the last sub-array will contain the remaining elements.
*/

function chunk(arr, size) {
    const newArr = []
    if (size === 0) return newArr;
    for (let i = 0; i < arr.length/size; i++) {
        newArr.push(arr.slice(size*i, size*i+size))
    }
    return newArr
}