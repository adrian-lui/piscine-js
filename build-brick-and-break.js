"use strict";

export const build = (num) => {
    let i = 1;
    let building = setInterval(function() {
        const brick = document.createElement("div")
        brick.id = `brick-${i}`
        brick.textContent = i
        if (i % 3 === 2) brick.dataset.foundation = true
        document.querySelector('body').append(brick)
        i++
        if (i === num+1) clearInterval(building)
    }, 100)
}

export const repair = (...ids) => {
    for (let i = 0; i < ids.length; i++) {
        const brick = document.getElementById(ids[i])
        if (!brick) continue
        brick.dataset.foundation? brick.dataset.repaired = "in progress":brick.dataset.repaired = true
        brick.textContent = brick.getAttribute("repaired")
    }
}

export const destroy = () => {
    const bricks = document.querySelectorAll('div')
    console.log(bricks[bricks.length-1])
    bricks[bricks.length-1].remove()
}