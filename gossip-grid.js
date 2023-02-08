"use strict";

const gossips = [
    `Oasis star Noel Gallagher used to gorge on Greggs pastries and donuts every day`,
    `Lea Michele's lookalike Monica Moskatow says Glee star called her ugly`,
    `WE PAY FOR JUICY INFO!`,
    `Trainer to Hollywood's biggest stars reveals how to get an A-list body`,
    `Ed Sheeran comes out of music retirement to write brand new song`,
    `Kylie Jenner & Travis Scott’s breakup timeline`,
    `Quiet on the set: temper tantrums stars hope you forget`,
    `The style & grace of Chloë Grace Moretz: her top 20 red carpet looks`,
    `Paulina Porizkova feels betrayed after being cut out of husband Ric Ocasek's will`,
    `From too hot to not: Paris Hilton and Chris Zylka's relationship history`,
    `No bite in the big apple? Celine Dion looks scary skinny in New York`,
    `Jennifer Aniston and Brad Pitt relationship timeline`,
    `They shouldn’t have said that: 10 celebrity rants heard around the world`,
    `The most intense celebrity fights on set`,
    `The 18 most bitter real housewives feuds`,
    `Tristan Thompson's remarkable transformation from skinny teen to hulking NBA ace`,
    `Kim Kardashian 'considers leaving home' with Kanye West to 'save marriage'`,
]

export const grid = () => {
    const body = document.querySelector('body')
    const rangesDiv = document.createElement('div')
    const widthInput = document.createElement('input')
    const fontSizeInput = document.createElement('input')
    const backgroundInput = document.createElement('input')
    widthInput.type = "range"
    fontSizeInput.type = "range"
    backgroundInput.type = "range"
    widthInput.id = "width"
    fontSizeInput.id = "fontSize"
    backgroundInput.id = "background"
    widthInput.setAttribute('min', "200")
    widthInput.setAttribute('max', "800")
    fontSizeInput.setAttribute('min', "20")
    fontSizeInput.setAttribute('max', "40")
    backgroundInput.setAttribute('min', "20")
    backgroundInput.setAttribute('max', "75")
    
    rangesDiv.classList.add('ranges')
    widthInput.classList.add("range")
    fontSizeInput.classList.add("range")
    backgroundInput.classList.add("range")
    rangesDiv.append(widthInput)
    rangesDiv.append(fontSizeInput)
    rangesDiv.append(backgroundInput)
    body.append(rangesDiv)

    const gossipForm = document.createElement('form')
    gossipForm.classList.add("gossip")
    const gossipText = document.createElement('textarea')
    gossipText.placeholder = "Got a gossip to share?"
    const gossipSubmit = document.createElement('button')
    gossipSubmit.textContent = "Share gossip!"
    gossipSubmit.type = "submit"
    gossipForm.append(gossipText)
    gossipForm.append(gossipSubmit)
    body.append(gossipForm)

    gossips.map(gossip => {
        const gossipDiv = document.createElement('div')
        gossipDiv.classList.add("gossip")
        gossipDiv.textContent = gossip
        body.append(gossipDiv)
    })

    gossipSubmit.addEventListener('click', function(e) {
        e.preventDefault()
        if (!gossipText.value) return
        const gossipDiv = document.createElement('div')
        gossipDiv.classList.add("gossip")
        gossipDiv.classList.add('fade-in')
        gossipDiv.textContent = gossipText.value
        gossipDiv.style.width = gossipForm.style.width
        gossipDiv.style.background = gossipForm.style.background
        gossipDiv.style.fontSize = gossipForm.style.fontSize
        gossipText.value = ""
        gossipForm.insertAdjacentElement('afterend', gossipDiv)
    })

    widthInput.addEventListener('input', function() {
        const gossipCards = document.getElementsByClassName('gossip')
        for (const card of gossipCards) {
            card.style.width = widthInput.value + "px"
        }
    })

    fontSizeInput.addEventListener('input', function() {
        const gossipCards = document.getElementsByClassName('gossip')
        for (const card of gossipCards) {
            card.style.fontSize = fontSizeInput.value + "px"
        }
    })

    backgroundInput.addEventListener('input', function() {
        const gossipCards = document.getElementsByClassName('gossip')
        for (const card of gossipCards) {
            card.style.background = `hsl(280, 50%, ${backgroundInput.value}%)`
        }
    })
}