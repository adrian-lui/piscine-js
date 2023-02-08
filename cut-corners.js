/*
Create some functions which behave like JavaScript's Math rounding functions:

round: which behaves similar to Math.round().
ceil: which behaves similar to Math.ceil().
floor: which behaves similar to Math.floor().
trunc: which behaves similar to Math.trunc().
Some restrictions apply:

You may not use strings conversion to do it
No bitwise operator
No % operator
*/
function findNearest(x) {
    let num = 0;
    if (x < 1 && x >= 0) return 0
    if (x < 0 && x >= -1) return 0
    for (let i = x; i > 1; i = i / 2) {
        num += 1;
    }
    return num - 1
}

function trunc(x) {
    let i = 2 ** findNearest(x);
    if (x >= 0) {
        for (; i < x;) {
            i++
        }
        if (i === x) return i
        return i - 1
    }
    if (x < 0) {
        i = 0
        for (; i > x;) {
            i--
        }
        if (x > -1) return -0
        if (i === x) return i
        return i + 1
    }
}

function floor(x) {
    let i = 0;
    if (x >= 0) {
        for (; i < x;) {
            i++
        }
        if (i === x) return i
        return i - 1
    }
    if (x < 0) {
        i = 0
        for (; i > x;) {
            i--
        }
        if (x === -0) return -0
        if (i === x) return i
        return i
    }
}

function ceil(x) {
    let i = 0;
    if (x >= 0) {
        for (; i < x;) {
            i++
        }
        if (i === x) return i--
        return i
    }
    if (x < 0) {
        i = 0
        for (; i > x;) {
            i--
        }
        if (i === x) return i
        if (i + 1 === 0) return -0
        return i + 1
    }
}

function round(x) {
    let i = 0;
    if (x >= 0) {
        for (; i < x;) {
            i++
        }
        if (i-x > 0.5) return i - 1
        if (i-x <= 0.5) return i
    }
    if (x < 0) {
        i = 0
        for (; i > x;) {
            i--
        }
        if (i-x > -0.5) return i
        if (i-x <= 0.5) {
            if (i + 1 === 0) return -0
            return i + 1
        }
    }
}