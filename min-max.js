"use strict";

/*
Create a function named max that takes 2 number arguments and returns the largest of the two.

You must not just use Math.max, make your own.

Create a function named min which is the same as max, but returns the lowest.

You must not just use Math.min, make your own.
*/

function max(a, b) {
    if (a>b) return a
    return b
}

function min(a, b) {
    if (a<b) return a
    return b
}