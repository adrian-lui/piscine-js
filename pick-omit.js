"use strict";

function pick(obj, str) {
    const newObj = new Object
    for (const [key1, value1] of Object.entries(obj)) {
        if (typeof str === "string") {
            if (key1 === str) newObj[key1] = value1
            continue
        }
        for (const key2 of str) {
            console.log(key1, value1, key2, str)
            if (key1 === key2) newObj[key1] = value1
        }
    }
    return newObj
}

function omit(obj, str) {
    const newObj = new Object
    for (const [key1, value1] of Object.entries(obj)) {
        if (typeof str === "string") {
            if (key1 === str) continue
        }
        let exist = false
        for (const key2 of str) {
            if (key1 == key2) exist = true
        }
        if (!exist) newObj[key1] = value1
    }
    return newObj
}