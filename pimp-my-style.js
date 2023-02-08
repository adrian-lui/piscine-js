"use strict";

const styles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
]

const stylesNow = []
let i = 0
  

export const pimp = () => {
    const button = document.getElementsByClassName('button')[0]

    if (button.classList.contains("unpimp")) {
        button.classList.remove(styles[i])
        i--
    } else {
        button.classList.add(styles[i])
        i++
    }
    if (i === -1 && button.classList.contains("unpimp")) {
        button.classList.toggle("unpimp")
        i++
    }
    if (i === 15) {
        button.classList.toggle("unpimp")
        i--
    }
}