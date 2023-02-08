"use strict";

function invert(obj) {
    let newObj = new Object
    for (const [key, value] of Object.entries(obj)) {
        newObj[value] = key
    }
    return newObj
}