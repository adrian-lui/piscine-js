"use strict";

function citiesOnly(obj) {
    return obj.map(x => x = x.city)
}

function upperCasingStates(arr) {
    return arr.map(city => city.split(' ').map(word => (word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())).join(' '))
}

function fahrenheitToCelsius(arr) {
    return arr.map(f => Math.floor((Number.parseInt(f) - 32) * 5 / 9).toString() + "°C")
}

function trimTemp(arr) {
    return arr.map(obj => {
        obj.temperature = obj.temperature.replaceAll(" ", "")
        return obj
    })
}

function tempForecasts(arr) {
    return arr.map(obj => {
        obj.state = upperCasingStates([obj.state])
        obj.city = upperCasingStates([obj.city])
        obj.temperature = fahrenheitToCelsius([obj.temperature])
        return `${obj.temperature}elsius in ${obj.city}, ${obj.state}`
    })
}
