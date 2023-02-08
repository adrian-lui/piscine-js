"use strict";

function triangle(str, num) {
    let x = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < i; j++) {
            x += str;
        }
        x += "\n"
    }
    return x.slice(0, -1)
}