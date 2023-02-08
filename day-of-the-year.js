"use strict";

function dayOfTheYear(date) {
    const year = new Date(date.getFullYear().toString().padStart(4, '0'))
    return Math.abs(date.getTime() - year.getTime()) / (24 * 60 * 60 * 1000) + 1
}
