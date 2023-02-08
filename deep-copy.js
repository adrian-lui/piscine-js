"use strict";

function deepCopy(elem) {
    if (Array.isArray(elem)) {
        let newArr = new Array
        for (const value of elem) {
            Array.isArray(value)? newArr.push(deepCopy(value)): newArr.push(value)
        }
        return newArr
    } else {
        let newObj = new Object
        for (const [key, value] of Object.entries(elem)) {
            newObj[key] = typeof value === "object"? deepCopy(elem[key]): value
        }
        return newObj
    }
}