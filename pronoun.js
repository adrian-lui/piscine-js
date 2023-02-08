"use strict";

function pronoun(str) {
    const regexPronoun = /\b(i|you|he|she|it|they|we)\b/gi
    const regexWordReversed = /\w+\s\b(i|uoy|eh|ehs|ti|yeht|ew)\b/gi
    const pronounMatch = str.match(regexPronoun)?.map(x => x.toLowerCase())
    let wordMatch = [...str].reverse().join("").match(regexWordReversed)?.map(x => [...x.toLowerCase()].reverse().join("")).reverse()
    const pronouns = ["i", "you", "he", "she", "it", "they", "we"]
    wordMatch = wordMatch?.filter(x => !pronouns.includes(x.split(" ")[1]))
    
    const obj = new Object

    pronounMatch?.forEach(x => {
        if (obj[x]) {
            obj[x]["count"]++
         } else {
            obj[x] = {
                word: new Array,
                count: 1
            }
        } 
    })
    wordMatch?.forEach(x => {
        if (!obj[x.split(" ")[0]].word.includes(x.split(" ")[1])) obj[x.split(" ")[0]].word.push(x.split(" ")[1])
    })
    return obj
}
