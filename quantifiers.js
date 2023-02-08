"use strict";

function every(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (!f(arr[i], i, arr)) return false
    }
    return true
}

function some(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr)) return true
    }
    return false
}

function none(arr, f) {
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i], i, arr)) return false
    }
    return true
}