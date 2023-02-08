"use strict";

function map(arr, f) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(f(arr[i], i, arr))
    }
    return newArr
}

function flatMap(arr, f) {
    const newArr2 = []
    for (let j = 0; j < arr.length; j++) {
        newArr2.push(f(arr[j], j, arr))
    }
    const newArr3 = []
    for (let k = 0; k < newArr2.length; k++) {
        Array.isArray(newArr2[k])? newArr3.push(...newArr2[k]):newArr3.push(newArr2[k])
    }
    return newArr3
}
