"use strict";

function groupPrice(str) {
    const regex = /([a-z]{3}|\$)([0-9]+).([0-9]{2})/gi
    let reArr = []
    if (!str.match(regex)) return []
    for (const price of str.match(regex)) {
        let arr = []
        arr.push(price)
        let breakdown = price.split(".")
        breakdown[0].includes("$")? arr.push(breakdown[0].slice(1)) : arr.push(breakdown[0].slice(3))
        arr.push(breakdown[1])
        reArr.push(arr)
    }
    return reArr
}