"use strict";

/*
Create a function named get which takes two arguments:

src: an object.
path: a string representing a path.
Your function will return the value at the given path in the src object.

Example:

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'
get(src, path) // -> 'peekaboo'

*/

function get(src, path) {
    const key = path.split('.')
    for (let i = 0; i < key.length; i++) {
        if (!src[key[i]]) return undefined
        src = src[key[i]]
    }
    return src
}