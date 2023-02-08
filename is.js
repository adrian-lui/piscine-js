"use strict";

/*
Add new function properties to the is object to check value types. Each function should take one argument, and return a boolean.

is.num: value is a number.
is.nan: value is NaN.
is.str: value is a string.
is.bool: value is a boolean.
is.undef: value is undefined.
is.def: value is defined.
is.arr: value is an array.
is.obj: value is a simple object or null objects.
is.fun: value is a function.
is.truthy: value is truthy.
is.falsy: value is falsy.
*/
const is = {}
is.num = x => typeof x === "number"
is.nan = x => Number.isNaN(x)
is.str = x => typeof x === "string"
is.bool = x => typeof x === "boolean"
is.undef = x => typeof x === "undefined"
is.def = x => typeof x != "undefined"
is.arr = x => Array.isArray(x)
is.obj = x => typeof x == "object" && !Array.isArray(x) && x !== null
is.fun = x => typeof x == "function"
is.falsy = function (x) {
    if (x === null) return true
    if (x) return false
    return true
} 
is.truthy = x => !is.falsy(x)