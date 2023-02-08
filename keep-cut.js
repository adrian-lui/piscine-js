"use strict";

/*
Create some functions, which each take a string as an argument:

cutFirst: returns the string with the first 2 characters removed.

cutLast returns the string with the last 2 characters removed.

cutFirstLast returns the string with the first 2 characters and the last 2 characters removed.

keepFirst returns only the first 2 characters.

keepLast returns only the last 2 characters.

keepFirstLast returns the first 2 characters, and the last 2 characters.
*/

function keepFirstLast(x) {
    if (x.length < 4) return x
    return x.slice(0, 2) + x.slice(-2);
}

function keepLast(x) {
    return x.slice(-2);
}

function keepFirst(x) {
    return x.slice(0, 2)
}

function cutFirstLast(x) {
    return x.slice(2, -2)
}

function cutFirst(x) {
    return x.slice(2)
}

function cutLast(x) {
    return x.slice(0, -2)
}