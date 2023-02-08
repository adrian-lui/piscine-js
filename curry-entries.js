"use strict";

function defaultCurry(obj) {
    return function(obj2) {
        const newObj = new Object
        for (const [key, value] of Object.entries(obj)) {
            newObj[key] = value
        }
        for (const [key, value] of Object.entries(obj2)) {
            newObj[key] = value
        }
        return newObj
    }
}

function mapCurry(f) {
    return function(obj) {
        const newObj = new Object
        for (const entry of Object.entries(obj)) {
            newObj[f(entry)[0]] = f(entry)[1]
        }
        return newObj
    }
}

function reduceCurry(f) {
    return function(obj, acc) {
        let reduced = acc
        for (const entry of Object.entries(obj)) {
            reduced = f(reduced, entry, acc)
        }
        return reduced
    }
}

function filterCurry(f) {
    return function (obj) {
        const newObj = new Object
        for (const entry of Object.entries(obj)) {
            if (f(entry)) newObj[entry[0]] = entry[1] 
        }
        return newObj
    }
}

function reduceScore(personnel, acc = 0) {
    return acc += reduceCurry((acc, entry) => entry[1]["isForceUser"] ? acc += entry[1]["pilotingScore"] + entry[1]["shootingScore"] : acc)(personnel, 0)
}

function filterForce(personnel) {
    return filterCurry((entry) => entry[1]["shootingScore"] >= 80 && entry[1]["isForceUser"])(personnel)
}

function mapAverage(personnel) {
    return mapCurry((entry) => {
        const newArr = [...entry]
        newArr[1]["averageScore"] = (newArr[1]["shootingScore"] + newArr[1]["pilotingScore"]) / 2
        return newArr
    })(personnel)
}
