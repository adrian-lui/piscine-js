"use strict";

function fusion(...str) {
    const newObj = str[0]
    for (let i = 1; i < str.length; i++) {
        for (const [key, value] of Object.entries(str[i])) {
            if (Array.isArray(newObj[key]) && (Array.isArray(value))) {
                newObj[key] = newObj[key].concat(value)
            } else if (typeof newObj[key] === "string" && typeof value === "string") {
                newObj[key] += ` ${value}`
            } else if (typeof newObj[key] === "number" && typeof value === "number") {
                newObj[key] += value
            } else if (typeof newObj[key] === "object" && typeof value === "object") {
                newObj[key] = fusion(newObj[key], value)
            } else newObj[key] = value
        }
    }
    return newObj
}
