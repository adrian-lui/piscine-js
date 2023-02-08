"use strict";

export const pick = () => {
    let hueVal = 0
    let lumVal = 0
    const body = document.querySelector('body')
    const hslDiv = document.createElement('div')
    hslDiv.classList.add("hsl")
    hslDiv.textContent = "hsl"
    body.append(hslDiv)

    const hueDiv = document.createElement('div')
    hueDiv.classList.add("hue")
    hueDiv.classList.add("text")
    hueDiv.textContent = hueVal
    body.append(hueDiv)

    const luminosityDiv = document.createElement('div')
    luminosityDiv.classList.add("luminosity")
    luminosityDiv.classList.add("text")
    luminosityDiv.textContent = lumVal
    body.append(luminosityDiv)

    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
    const xLine = document.createElementNS('http://www.w3.org/2000/svg','line')
    const yLine = document.createElementNS('http://www.w3.org/2000/svg','line')
    xLine.id = "axisX"
    yLine.id = "axisY"
    svg.append(xLine)
    svg.append(yLine)
    body.append(svg)

    document.addEventListener('click', function(e) {
        hueVal = Math.round((e.clientX / window.innerWidth) * 360)
        lumVal = Math.round((e.clientY / window.innerHeight) * 100)
        navigator.clipboard.writeText(`hsl(${hueVal}, 50%, ${lumVal}%)`)
    })

    document.addEventListener('mousemove', function(e) {
        xLine.setAttribute("y1", "0")
        xLine.setAttribute("y2", window.innerHeight)
        xLine.setAttribute("x1", e.clientX)
        xLine.setAttribute("x2", e.clientX)
        yLine.setAttribute("y1", e.clientY)
        yLine.setAttribute("y2", e.clientY)
        yLine.setAttribute("x1", "0")
        yLine.setAttribute("x2", window.innerWidth)
        hueVal = Math.round((e.clientX / window.innerWidth) * 360)
        lumVal = Math.round((e.clientY / window.innerHeight) * 100)
        hslDiv.textContent = `hsl(${hueVal}, 50%, ${lumVal}%)`
        hueDiv.textContent = `hue\n${hueVal}`
        luminosityDiv.textContent = `${lumVal}\nluminosity`
        body.style.background = `hsl(${hueVal}, 50%, ${lumVal}%)`
    })
}