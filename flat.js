"use strict";

function flat(arr, num = 1) {
    let loopArr = arr
    let newArr = []
    for (let i = 0; i < num; i++) {
        newArr = []
        let allFlat = true;
        for (let ele of loopArr) {
            if (Array.isArray(ele)) {
                newArr.push(...ele)
                allFlat = false
            } else {
                newArr.push(ele)
            }
        }
        if (allFlat) return newArr
        loopArr = newArr
    }
    return newArr
}