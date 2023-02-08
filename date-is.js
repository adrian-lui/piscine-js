"use strict";

function isValid(date) {
    if (typeof date === "number" && !Number.isNaN(date)) return true
    if (typeof date === "object" && date.toString() === "Invalid Date") return false
    if (typeof date !== "object") return false
    return true
}

function isAfter(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false
    return new Date(date1).getTime() > new Date(date2).getTime()
}

function isBefore(date1, date2) {
    if (!isValid(date1) || !isValid(date2)) return false
    return new Date(date2).getTime() > new Date(date1).getTime()
}

function isFuture(date) {
    return isValid(date) && date.getTime() > new Date().getTime()
}

function isPast(date) {
    return isValid(date) && date.getTime() < new Date().getTime()
}
