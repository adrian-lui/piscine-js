"use strict";

function adder(arr, base = 0) {
    return arr.reduce((acc, cur) => acc + cur, base)
}

function sumOrMul(arr, base = 0) {
    return arr.reduce((acc, cur) => cur % 2 === 0? acc * cur : acc + cur, base)
}

function funcExec(arr, base = 0) {
    return arr.reduce((acc, cur) => cur(acc), base)
}