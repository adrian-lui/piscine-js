"use strict";

function replica(target, ...objs) {
    for (const obj of objs) {
        const newObj = new Object
        Object.assign(newObj, obj)
        for (const [key, value] of Object.entries(obj)) {
            if (value.constructor == RegExp) {
                continue
            }
            if (typeof value === "object" && !Array.isArray(value) && !Array.isArray(target[key])) {
                Object.assign(newObj[key], target[key], JSON.parse(JSON.stringify(obj[key])))
            }
        } 
        Object.assign(target, newObj)
    }
    return target
}
