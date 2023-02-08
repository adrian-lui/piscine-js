"use strict";

function format(date, str) {
    const regex = /[a-zA-Z+]{1,4}/g
    const regexArr = str.match(regex)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    
    for (const ele of regexArr) {
        switch (ele) {
            case 'y':
                str = str.replace(ele, Math.abs(date.getFullYear()))
                break;
            case 'yyyy':
                str = str.replace(ele, Math.abs(date.getFullYear()).toString().padStart(4, '0'))
                break;
            case 'G':
                str = str.replace(ele, date.getFullYear() > 0? "AD":"BC")
                break;
            case 'GGGG':
                str = str.replace(ele, date.getFullYear() > 0? "Anno Domini":"Before Christ")
                break;
            case 'M':
                str = str.replace(ele, date.getMonth()+1)
                break;
            case 'MM':
                str = str.replace(ele, (date.getMonth()+1).toString().padStart(2, '0'))
                break;
            case 'MMM':
                str = str.replace(ele, monthNames[date.getMonth()].slice(0, 3))
                break;
            case 'MMMM':
                str = str.replace(ele, monthNames[date.getMonth()])
                break;
            case 'd':
                str = str.replace(ele, date.getDate())
                break;
            case 'dd':
                str = str.replace(ele, date.getDate().toString().padStart(2, '0'))
                break;
            case 'E':
                str = str.replace(ele, weekNames[date.getDay()].slice(0, 3))
                break;
            case 'EEEE':
                str = str.replace(ele, weekNames[date.getDay()])
                break;
            case 'h':
                str = str.replace(ele, date.getHours() % 12)
                break;
            case 'hh':
                str = str.replace(ele, (date.getHours() % 12).toString().padStart(2, '0'))
                break;
            case 'm':
                str = str.replace(ele, date.getMinutes())
                break;
            case 'mm':
                str = str.replace(ele, date.getMinutes().toString().padStart(2, '0'))
                break;
            case 's':
                str = str.replace(ele, date.getSeconds())
                break;
            case 'ss':
                str = str.replace(ele, date.getSeconds().toString().padStart(2, '0'))
                break;
            case 'H':
                str = str.replace(ele, date.getHours())
                break;
            case 'HH':
                str = str.replace(ele, date.getHours().toString().padStart(2, '0'))
                break;
            case 'a':
                str = str.replace(ele, date.getHours() < 12? `AM`:`PM`)
                break;
        }
    }
    return str
}
