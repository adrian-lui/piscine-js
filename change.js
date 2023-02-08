"user strict";

/*
Create 2 functions:

get: a function that takes a key and returns the corresponding value from the sourceObject.

set: a function that takes a key and a value. Update the value for the corresponding property of the sourceObject and return the value. */

function get(x) {
    return sourceObject[x];
}

function set(x, value) {
    sourceObject[x] =  value;
    return value;
}