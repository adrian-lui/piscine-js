"use strict";

/*
Create 3 functions which accept an array to be searched, and a value to be matched.

indexOf: which returns the index of the first occurrence. It also accepts an optional index from where the search should begin. If the value was not found, -1 is returned.
lastIndexOf: which works just like your indexOf function, but returns the index of the last occurrence.
includes: which returns true if the value was found in the array, and false otherwise.
Of course you must not use any of Array.indexOf(), Array.lastIndexOf() or Array.includes().
*/

function indexOf(arr, value, index = 0) {
    for (let i = index; i < arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}

function lastIndexOf(arr, value, index = arr.length - 1) {
    for (let i = index; i >= 0; i--) {
        if (arr[i] === value) return i
    }
    return -1
}

function includes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return true
    }
    return false
}