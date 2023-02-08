"use strict";

function filterValues(nutrients, f) {
    const newObj = new Object
    for (const [key, value] of Object.entries(nutrients)) {
        if (f(value)) newObj[key] = value
    }
    return newObj
}

function mapValues(nutrients, f) {
    const newObj = new Object
    for (const [key, value] of Object.entries(nutrients)) {
        newObj[key] = f(value)
    }
    return newObj
}

function reduceValues(nutrients, f, acc = 0) {
    let reduced = acc
    for (const [key, value] of Object.entries(nutrients)) {
        reduced = f(reduced, value)
    }
    return reduced
}
