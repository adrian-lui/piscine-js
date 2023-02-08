"use strict";

function bloodySunday(date) {
    const day = (date.getTime() - new Date('0001-01-01').getTime()) / (24 * 60 * 60 * 1000) % 6
    switch (day) {
        case 0:
            return "Monday"
        case 1:
            return "Tuesday"
        case 2: 
            return "Wednesday"
        case 3:
            return "Thursday"
        case 4:
            return "Friday"
        case 5:
            return "Saturday"
    }
}