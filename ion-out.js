"use strict";

function ionOut(x) {
    const regexp = /\w*tion/g
    const arr = x.match(regexp)
    if (!arr) return []
    const newArr = []
    for (let ele of arr) {
        newArr.push(ele.replace("ion", ""))
    }
    return newArr
}