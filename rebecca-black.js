"use strict";

function isFriday(date) {
    return date.getDay() === 5
}

function isWeekend(date) {
    return date.getDay() === 6 || date.getDay() === 0
}

function isLeapYear(date) {
    return date.getFullYear() % 4 === 0
}

function isLastDayOfMonth(date) {
    return date.getMonth() !== new Date(date.getTime() + 24 * 60 * 60 * 1000).getMonth()
}
