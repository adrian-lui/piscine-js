"use strict";

function repeat(exp, x) {
    let ret = ""
    for (let i = 0; i < x; i++) {
        ret = ret + " " + exp
    }
    return ret
}

function findExpression(num) {
    if (num == 1) return 1
    if (num <= 0) return undefined
    if ((num % 2 == 1) && (num - 1) % 4 != 0) return undefined    
    if ((num - 1) % 4 == 0) return "1" + repeat(add4, (num - 1) / 4)
    if (num % 2 == 0) {
        let ret = "1"
        let div = 0;
        let x = 0;
        let y = 0;
        let z = 0;
        if (num % 4 == 0) {
            for (; 2 ** x < num;) {
                x++
            }
            if (2 ** x != num) {
                x = x - 1
                z = (num - 2 ** x) / 4
            }
        } else {
            y = (num - 2) / 4 / 2 - 1
            z = (num - 2) / 4 % 2
            x = 1;
        }        
        return ret + repeat(add4, y) + repeat(mul2, x) + repeat(add4, z)
    }
    return undefined
}