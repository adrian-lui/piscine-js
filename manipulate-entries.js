"use strict";

function filterEntries(nutrients, f) {
    const newObj = new Object
    for (const entry of Object.entries(nutrients)) {
        if (f(entry)) newObj[entry[0]] = entry[1] 
    }
    return newObj
}

function mapEntries(nutrients, f) {
    const newObj = new Object
    for (const entry of Object.entries(nutrients)) {
        newObj[f(entry)[0]] = f(entry)[1] 
    }
    return newObj
}

function reduceEntries(nutrients, f, acc = undefined) {
    let reduced = acc
    for (const entry of Object.entries(nutrients)) {
        reduced = f(reduced, entry, acc)
    }
    return reduced
}

function totalCalories(cart) {
    return reduceEntries(cart, (acc, cur) => acc + (cur[1] * nutritionDB[cur[0]]["calories"] * 0.01) , 0)
}

function lowCarbs(cart) {
    return filterEntries(cart, (item) => {
        return nutritionDB[item[0]]["carbs"] * (item[1] / 100) < 50
    })
}

function cartTotal(cart) {
    return mapEntries(cart, (item) => {
        const newObj2 = new Object
        for (const [key, value] of Object.entries(nutritionDB[item[0]])) {
            newObj2[key] = Number.parseInt(value * item[1] * 100) / 10000
        }
        return [item[0], newObj2]
    })
}