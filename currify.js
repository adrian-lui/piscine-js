"use strict";

function currify(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args)
        } else {
            return function(...args2) {
                return curried(...args.concat(args2))
            }
        }
    }
}
