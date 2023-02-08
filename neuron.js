"use strict";

function neuron(arr) {
    const neuronObj = new Object
    arr.forEach(sentence => {
        const first = sentence.split(" - Response: ")[0]
        const response = sentence.split(" - Response: ")[1]
        const firstKey = first.slice(0, first.indexOf(":")).toLowerCase()
        const firstValue = first.slice(first.indexOf(":")+2)
        let firstValueKey = ""
        for (let i = 0; i < firstValue.length; i++) {
            if (firstValue.charCodeAt(i) === 32) firstValueKey += "_"
            if (firstValue.toLowerCase().charCodeAt(i) >= 97 && firstValue.toLowerCase().charCodeAt(i) <= 122) firstValueKey += firstValue.at(i).toLowerCase()
        }
        if (!neuronObj[firstKey]) neuronObj[firstKey] = new Object
        if (!neuronObj[firstKey][firstValueKey]) {
            neuronObj[firstKey][firstValueKey] = new Object
            neuronObj[firstKey][firstValueKey][firstKey.slice(0, -1)] = firstValue
        }
        if (!neuronObj[firstKey][firstValueKey]["responses"]) neuronObj[firstKey][firstValueKey]["responses"] = new Array
        neuronObj[firstKey][firstValueKey]["responses"].push(response)
    })
    return neuronObj
}
