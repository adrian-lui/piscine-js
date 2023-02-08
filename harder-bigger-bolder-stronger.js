"use strict";

export const generateLetters = () => {
    const x = 120
    for (let i = 0; i < x; i++) {
        const ascii = String.fromCharCode(Math.trunc(Math.random() * 26 + 65))
        const div = document.createElement('div')
        div.style.fontSize = (i + 11) + "px"
        if (i <= 39) {
            div.style.fontWeight = 300
        } else if (i <= 79) { 
            div.style.fontWeight = 400
        } else div.style.fontWeight = 600
        div.textContent = ascii
        document.querySelector('body').append(div)
    }
}
