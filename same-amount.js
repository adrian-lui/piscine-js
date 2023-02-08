"use strict";

function sameAmount(str, reg1, reg2) {
    if (!str) return false
    return str.split(reg1)?.length === str.split(reg2)?.length
}