"use strict";

function letterSpaceNumber(x) {
    const regexp = /[a-z]\s[0-9](?![0-9a-z])/gi
    return (x.match(regexp)? x.match(regexp):[])
}