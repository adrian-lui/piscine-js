"use strict";

function mult2(x) {
    return function(y) {
        return x*y
    }
}

function add3(x) {
    return function(y) {
        return function(z) {
            return x+y+z
        }
    }
}

function sub4(w) {
    return function(x) {
        return function(y) {
            return function(z) {
                return w-x-y-z
            }
        }
    }
}