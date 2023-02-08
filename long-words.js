"use strict";

function longWords(arr) {
    return arr.every(word => typeof word === "string" && word.length >= 5)
}

function oneLongWord(arr) {
    return arr.some(word => typeof word === "string" && word.length >= 10)
}

function noLongWords(arr) {
    return !arr.some(word => typeof word === "string" && word.length >= 7)
}