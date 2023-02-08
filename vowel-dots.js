"use strict";

const vowels = /[aeiou](?![.])/gi

function vowelDots(x) {
    for (; x.search(vowels) != -1;) {
        x = x.slice(0, x.search(vowels)+1) + "." + x.slice(x.search(vowels)+1)
    }
    return x
}