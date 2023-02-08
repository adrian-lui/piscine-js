"use strict";

function findIP(str) {
    const regex = /([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})(:[0-9]{1,5})?/g
    let result1 = str.match(regex)
    const result2 = result1.filter(x => {
        let port
        let ip
        if (x.includes(":")) {
            port = x.split(":")[1]
            if (parseInt(port).toString() !== port) return false
            if (parseInt(port) > 65535) return false
            ip = x.split(":")[0].split(".")
        } else {
            ip = x.split(".")
        }
        for (const ele of ip) {
            if (parseInt(ele).toString() !== ele) return false
            if (parseInt(ele) > 255) return false
        }
        return true
    })
    return result2
}