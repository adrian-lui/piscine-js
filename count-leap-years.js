"use strict";

function countLeapYears(date) {
    return Math.ceil(date.getFullYear() / 4) - Math.floor(date.getFullYear() / 100) + Math.floor(date.getFullYear() / 400) - 1
}
