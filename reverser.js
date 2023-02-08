"use strict";

/*
Create a function named reverse which accepts an array or a string. It should work like Array.reverse(), and of course you cannot use that.
*/

function reverse(x) {
    if (typeof x == "string") {
        let y = "";
        for (let i = x.length - 1; i >= 0; i--) {
            y += x[i]
        }
        return y
    }
    const y = []
    for (let i = x.length - 1; i >= 0; i--) {
        y.push(x[i])
    }
    return y
}