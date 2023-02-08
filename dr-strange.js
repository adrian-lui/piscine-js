"use strict";

function addWeek(date) {
    const oneDay = new Date('1970-01-02').getTime() - new Date('1970-01-01').getTime()
    const day = (new Date(date) - new Date('0001-01-01')) / oneDay % 14
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
        case 6:
            return "Sunday"
        case 7:
            return "secondMonday"
        case 8:
            return "secondTuesday"
        case 9:
            return "secondWednesday"
        case 10:
            return "secondThursday"
        case 11:
            return "secondFriday"
        case 12:
            return "secondSaturday"
        case 13:
            return "secondSunday"
    }
}

function timeTravel(obj) {
    const date = new Date(obj.date.toString())
    date.setHours(obj.hour)
    date.setMinutes(obj.minute)
    date.setSeconds(obj.second)
    date.set
    return date
}

// console.log(timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString())
