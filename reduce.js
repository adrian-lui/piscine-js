"use strict";

function fold(arr, f, acc = 0) {
    for (let i = 0; i < arr.length; i++) {
        acc = f(acc, arr[i])
    }
    return acc
}

function foldRight(arr, f, acc = 0) {
    for (let i = arr.length-1; i >= 0; i--) {
        acc = f(acc, arr[i])
    }
    return acc
}

function reduce(arr, f) {
    if (!arr) return false
    let acc = arr[0]
    for (let i = 1; i < arr.length; i++) {
        acc = f(acc, arr[i])
    }
    return acc
}

function reduceRight(arr, f) {
    if (!arr) return false
    let acc = arr[arr.length-1]
    for (let i = arr.length-2; i >= 0; i--) {
        acc = f(acc, arr[i])
    }
    return acc
}