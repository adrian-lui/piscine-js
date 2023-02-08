"use strict";

let trapped = false
const boxXL = window.innerWidth / 2 - (window.innerWidth/4/2)
const boxXR = window.innerWidth / 2 + (window.innerWidth/4/2)
const boxYU = window.innerHeight / 2 + (window.innerHeight/4/2)
const boxYB = window.innerHeight / 2 - (window.innerHeight/4/2)

export const createCircle = () => {
    document.addEventListener('click', function(e) {
        const div = document.createElement('div')
        div.style.position = "absolute"
        div.style.top = e.clientY - 25 + "px"
        div.style.left = e.clientX - 25 + "px"
        div.style.background = "white"
        div.classList.add('circle')
        trapped = false
        if (e.clientY + 25 < boxYU && e.clientY - 25 > boxYB && e.clientX - 25 > boxXL && e.clientX + 25 < boxXR) {
            trapped = true
            div.style.background = "var(--purple)"
        }
        document.querySelector('body').append(div)
    })
}

export const moveCircle = () => {
    document.addEventListener('mousemove', function(e) {
        if (document.getElementsByClassName('circle').length !== 0) {
            const lastCircle = document.getElementsByClassName('circle')[document.getElementsByClassName('circle').length-1]
            
            if (e.clientY + 25 < boxYU && e.clientY - 25 > boxYB && e.clientX - 25 > boxXL && e.clientX + 25 < boxXR) {
                trapped = true
                lastCircle.style.background = "var(--purple)"
            }
            let xDisplace = 0
            let yDisplace = 0
            if (trapped) {
                if (e.clientX - 26 < boxXL) xDisplace = e.clientX - boxXL - 50/2 - 1
                if (e.clientX + 26 > boxXR) xDisplace = e.clientX - boxXR + 50/2 + 1
                if (e.clientY - 26 < boxYB) yDisplace = e.clientY - boxYB - 50/2 - 1
                if (e.clientY + 26 > boxYU) yDisplace = e.clientY - boxYU + 50/2 + 1
            }
            lastCircle.style.left = e.clientX - 25 - xDisplace + "px"
            lastCircle.style.top = e.clientY - 25 - yDisplace + "px"
        }
    })
}

export const setBox = () => {
    const box = document.createElement('div')
    box.classList.add('box')
    document.querySelector('body').append(box)
}