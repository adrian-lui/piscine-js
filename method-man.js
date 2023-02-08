"use strict";

/*
Write 5 functions:

words: that takes a string, splits it by spaces, and returns an array of those substrings.
sentence: that takes an array of strings, and joins them with spaces to return a single string.
yell: that takes a string and returns it in upper case.
whisper: that takes a string and returns it in lower case, surrounded by *.
capitalize: that takes a string and transforms it so that the first character is upper case, and the subsequent characters are lower case.
*/

function words(x) {
    return x.split(' ');
}

function sentence(x) {
    return x.join(' ');
}

function yell(x) {
    return x.toUpperCase();
}

function whisper(x) {
    return `*${x.toLowerCase()}*`
}

function capitalize(x) {
    return x[0].toUpperCase() + x.slice(1).toLowerCase();
}