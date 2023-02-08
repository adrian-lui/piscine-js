"use strict";

/*
Create a function named nasa that takes a number N as an argument and returns a string with all numbers from 1 to N separated by spaces. There are three exceptions:

Convert numbers which are divisible by 3 to "NA".
Convert numbers which are divisible by 5 to "SA".
Convert numbers which are divisible by 3 and 5 to "NASA".
*/

function nasa(N) {
    let x = "";
    for (let i = 1; i <= N; i++) {
        if (i % 15 === 0) {
            x += "NASA"
        } else if (i % 3 === 0) {
            x += "NA"
        } else if (i % 5 === 0) {
            x += "SA"
        } else {
            x += i
        }
        x += ' '
    }
    return x.slice(0, -1)
}