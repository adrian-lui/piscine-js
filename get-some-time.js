"use strict";

function firstDayWeek(week, year) {
    let dd, mm, yyyy
    const year2 = new Date(year)
    const oneDay = 24 * 60 * 60 * 1000
    if (week === 1) {
        dd = year2.getDate().toString().padStart(2, '0')
        mm = (year2.getMonth()+1).toString().padStart(2, '0')
        yyyy = year2.getFullYear().toString().padStart(4, '0')
        return `${dd}-${mm}-${yyyy}`
    }
    const dateOfWeek = new Date((week - 1) * oneDay * 7 + year2.getTime())
    const monday = dateOfWeek.getDay() == 0? 7:dateOfWeek.getDay()
    const firstDate = new Date(dateOfWeek.getTime() - ((monday - 1) * oneDay))
    dd = firstDate.getDate().toString().padStart(2, '0')
    mm = (firstDate.getMonth()+1).toString().padStart(2, '0')
    yyyy = firstDate.getFullYear().toString().padStart(4, '0')
    return `${dd}-${mm}-${yyyy}`
}