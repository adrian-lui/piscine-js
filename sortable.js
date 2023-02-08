"use strict";

export function loadData() {
    fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json").then(response => response.json()).then(createPage)
}

function createPage(json) {
    const table = document.createElement("table")
    
    json.map(data => {
        const row = document.createElement('tr')
        const arrShow = [".images.xs", ".name", ".biography.fullName", ".powerstats", ".appearance.race", ".appearance.gender", ".appearance.height", ".appearance.weight", ".biography.placeOfBirth", ".biography.alignment"]
        arrShow.map(show => {
            const col = document.createElement('td')
            const key = show.split('.')
            if (show === ".images.xs") {
                const img = document.createElement('img')
                img.src = data[`${key[1]}`][`${key[2]}`]
                row.append(img)
            } else if (show === ".powerstats") {
                // need reform
                for (const [stat, value] of Object.entries(data[`${key[1]}`])) {
                    console.log(data.name, stat, value)
                    col.textContent += `${stat}: ${value}\n`
                }
                row.append(col)
            } else {
                col.textContent = key.length === 2? data[`${key[1]}`] : data[`${key[1]}`][`${key[2]}`]
                row.append(col)
            }
        })
        table.append(row)
    })
    document.body.append(table)
}
