"use strict";

function filterShortStateName(arr) {
    return arr.filter(x => x.length < 7)
}

function filterStartVowel(arr) {
    const regex = /^[aeiou]/gi
    return arr.filter(x => x.search(regex) === 0)
}

function filter5Vowels(arr) {
    const regex = /[aeiou]/gi
    return arr.filter(x => x.match(regex).length >= 5)
}

function filter1DistinctVowel(arr) {
    const regex = /[aeiou]/gi
    return arr.filter(x => new Set(x.match(regex).map(x => x.toLowerCase())).size === 1)
}

function multiFilter(arr) {
    return arr.filter(obj => {
        if (obj.capital.length < 8) return false
        const regex = /[aeiou]/gi
        if (obj.name.search(regex) === 0) return false
        if (!obj.tag.match(regex)) return false
        if (obj.region === "South") return false
        return true
    })
}
