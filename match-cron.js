"use strict";

function matchCron(str, date) {
    const cron = str.split(" ")

    if (Number.parseInt(cron[0]) !== date.getMinutes()) {
        if (cron[0] !== "*") return false
    } 
    if (Number.parseInt(cron[1]) !== date.getHours() ) {

        if (cron[1] !== "*") return false
    } 
    if (Number.parseInt(cron[2]) !== date.getDate()) {

        if (cron[2] !== "*") return false
    } 
    if (Number.parseInt(cron[3]) !== date.getMonth()+1) {

        if (cron[3] !== "*") return false
    } 
    if (Number.parseInt(cron[4]) !== date.getDay() ) {
        if (date.getDay() === 0 && cron[4] === 7) return true
        if (cron[4] === "*") return true
        return false 
    }
    return true
}
