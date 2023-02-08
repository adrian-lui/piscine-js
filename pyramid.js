"use strict";

function pyramid(str, num) {
    let x = "";
    for (let i = 1; i <= num; i++) {
        for (let j = i; j < num; j++) {
            x += " ".repeat(str.length);
        }
        for (let k = 1; k < i * 2; k++) {
            x += str;
        }
        x += "\n"
    }
    return x.slice(0, -1)
}