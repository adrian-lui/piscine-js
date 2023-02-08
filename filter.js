"use strict";

function filter(arr, f) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr)) newArr.push(arr[i])
    }
    return newArr
}

function reject(arr, f) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!f(arr[i], i, arr)) newArr.push(arr[i])
    }
    return newArr
}

function partition(arr, f) {
    const trueArr = []
    const falseArr = []
    for (let i = 0; i < arr.length; i++) {
        f(arr[i], i, arr)? trueArr.push(arr[i]):falseArr.push(arr[i])
    }
    return [trueArr, falseArr]
}
