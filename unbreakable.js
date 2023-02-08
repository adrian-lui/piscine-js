
/*
Implement 2 functions:

split that works like String.split, but takes the string as its first argument.

join that works like Array.join, but take the array as its first argument.
*/

function join(arr, delimit = "") {
    let str = "";
    for (const ele of arr) {
        str = str + ele + delimit
    }
    return str.slice(0, -delimit.length)
}

function split(str, delimit) {
    const len = str.length
    const arr = []

    if (!str) return ['']
    if (!delimit) return [...str]
    for (let i = 0; i < len; i++) {
        if (str.indexOf(delimit) == -1) {
            arr.push(str)
            return arr
        }
        arr.push(str.slice(0, str.indexOf(delimit)))
        str = str.slice(str.indexOf(delimit) + delimit.length)
    }
    
    return arr
}