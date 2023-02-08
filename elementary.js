"use strict";

/*
Create 3 functions which each take (a, b) as arguments:

multiply that acts like the * operator, without using it.
divide that acts like the integer division operator /, without using it.
modulo that acts like the % operator, without using it.
*/

function flipNeg(num) {
    if (num < 0) return -num;
    return num
}

function checkNeg(a, b) {
    if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) return true
    return false
}

function multiply(a, b) {
    const check = checkNeg(a, b)
    a = flipNeg(a)
    b = flipNeg(b)

    let x = 0;
    for (let i = 0; i < b; i++) {
        x += a;
    }
    if (check) x = -x
    return x;
}

function divide(a, b) {
    const check = checkNeg(a, b)
    a = flipNeg(a)
    b = flipNeg(b)

    let x = 0;
    for (; a >= b;) {
        x += 1;
        a = a - b;
    }
    if (check) x = -x
    return x
}

function modulo(a, b) {
    let check = false;
    if (a < 0) {
        check = true
    }
    a = flipNeg(a)
    b = flipNeg(b)

    for (; a >= b;) {
        a = a - b;
    }
    if (check) a = -a
    return a
}