"use strict";

/*
Write a bunch of functions which converts data from one type to another:

arrToSet: from Array to Set.
arrToStr: from Array to string.
setToArr: from Set to Array.
setToStr: from Set to string.
strToArr: from string to Array.
strToSet: from string to Set.

mapToObj: from Map to Object.
objToArr: from Object to Array.
objToMap: from Object to Map.

arrToObj: from Array to Object.
strToObj: from string to Object.
Finally, write a function named superTypeOf that unlike typeof returns a specific values for advanced types like Map and Set.
superTypeOf(map) //         -> 'Map'
superTypeOf(set) //         -> 'Set'
*/

function superTypeOf(x) {
    if (x === undefined) return "undefined"
    if (x === null) return "null"
    if (typeof x === "function") return "Function"
    if (Array.isArray(x)) return "Array"
    if (Number.isNaN(x)) return "Number"
    if (typeof x === "number") return "Number"
    if (typeof x === "string") return "String"
    if (x instanceof Map) return "Map"
    if (x instanceof Set) return "Set"

    if (typeof x === "object") return "Object"
}

function arrToObj(x) {
    const y = {}
    for (const [key, value] of Object.entries(x)) {
        y[key] = value;
    }
    return y
}

function strToObj(x) {
    const y = {}
    for (const [key, value] of Object.entries(x)) {
        y[key] = value;
    }
    return y
}

function arrToSet(x) {
    return new Set(x);
}

function arrToStr(x) {
    return x.join('');
}

function setToArr(x) {
    return new Array(...x);
}

function setToStr(x) {
    return setToArr(x).join('');
}

function strToArr(x) {
    return new Array(...x);
}

function strToSet(x) {
    return new Set(strToArr(x));
}

function mapToObj(x) {
    return Object.fromEntries(x);
}

function objToArr(x) {
    return Object.values(x);
}

function objToMap(x) {
    const y = new Map
    for (const [key, value] of Object.entries(x)) {
        y.set(key, value)
    }
    return y
}