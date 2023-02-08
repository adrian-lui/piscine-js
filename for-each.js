"use strict";

function forEach(arr, f) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(f(arr[i], i, arr))
    }
    return newArr
}