"use strict";

/*
Create a function named slice that works like Array.slice() and String.slice().

It takes 3 arguments:

string or array to process.
starting index.
optional ending index.
*/

function slice(arr, index = 0, lastIndex = arr.length) {
    let x;
    if (typeof arr === "string") x = "";
    if (typeof arr === "object") x = []
    if (index < 0) {
        index = arr.length+index;
    }
    if (lastIndex < 0) {
        lastIndex = arr.length+lastIndex;
    }
    for (let i = index; i < lastIndex; i ++) {
        if (typeof arr === "string") x += arr[i]
        if (typeof arr === "object") x.push(arr[i])
    }
   
    return x
}