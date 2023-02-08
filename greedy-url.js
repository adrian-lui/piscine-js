"use strict";

function getURL(dataSet) {
    const regex = /http(s?):\/\/([a-z1-9]+)(\S*)/gi
    return dataSet.match(regex)
}

function greedyQuery(dataSet) {
    const regex = /http(s?):\/\/([a-z1-9]+)(\S*)/gi
    return dataSet.match(regex).filter(x => x.match(/&/g)?.length >= 2)
}

function notSoGreedy(dataSet) {
    const regex = /http(s?):\/\/([a-z1-9]+)(\S*)/gi
    return dataSet.match(regex).filter(x => {
        if (x.match(/&/g)?.length == 1 || x.match(/&/g)?.length == 2) return x  
    })
}
