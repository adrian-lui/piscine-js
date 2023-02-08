"use strict";

function filterKeys(nutrients, f) {
    const newObj = new Object
    for (const [key, value] of Object.entries(nutrients)) {
        if (f(key)) newObj[key] = value
    }
    return newObj
}

function mapKeys(nutrients, f) {
    const newObj = new Object
    for (const [key, value] of Object.entries(nutrients)) {
        newObj[f(key)] = value
    }
    return newObj
}

function reduceKeys(nutrients, f, acc = undefined) {
    let reduced = acc? acc : Object.entries(nutrients)[0][0]
    if (acc === 0) reduced = 0
    if (acc) {
        for (const [key] of Object.entries(nutrients)) 
        {
        reduced = f(reduced, key, acc)
        } 
    } else {
        for (let i = 1; i < Object.entries(nutrients).length; i++) {
            reduced = f(reduced, Object.entries(nutrients)[i][0])
        }
    }
    return reduced
}
