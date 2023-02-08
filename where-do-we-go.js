"use strict";

const places = [
    {
      name: 'Cordoba, Spain',
      color: 'deeppink',
      coordinates: `37°53'17.43"N 4°46'45.78"W`,
    },
    {
      name: 'Yuanyang County, China',
      color: 'cyan',
      coordinates: `23°09'32.30"N 102°44'41.46"E`,
    },
    {
      name: 'Namib Desert, Namibia',
      color: 'lime',
      coordinates: `24°45'4.19"S 15°16'21.00"E`,
    },
    {
      name: 'Newark, New Jersey, USA',
      color: 'yellow',
      coordinates: `40°44'8.37"N 74°10'20.52"W`,
    },
    {
      name: 'Nishinoshima Island, Japan',
      color: 'lightcoral',
      coordinates: `27°14'50.84"N 140°52'46.04"E`,
    },
    {
      name: 'Lisse, The Netherlands',
      color: 'cornflowerblue',
      coordinates: `52°15'28.55"N 4°33'26.94"E`,
    },
    {
      name: 'Shadegan Lagoon, Iran',
      color: 'firebrick',
      coordinates: `30°39'16.55"N 48°39'14.14"E`,
    },
    {
      name: 'Qinhuangdao, China',
      color: 'seashell',
      coordinates: `39°56'7.3"N 119°36'1.88"E`,
    },
    {
      name: 'Marrakesh, Morocco',
      color: 'orange',
      coordinates: `31°37'46.1"N 7°58'51.9"W`,
    },
    {
      name: 'Los Caracoles Pass, Chile',
      color: 'violet',
      coordinates: `32°49'51.6"S 70°05'22.9"W`,
    },
    {
      name: 'Tucson, Arizona, USA',
      color: 'springgreen',
      coordinates: `32°13'21.38"N 110°58'28.96"W`,
    },
    {
      name: 'Arlit, Niger',
      color: 'blue',
      coordinates: `18°44'20.41"N 7°23'22.12"E`,
    },
    {
      name: 'Black Rock Desert, Nevada, USA',
      color: 'crimson',
      coordinates: `40°54'35.0"N 119°03'26.5"W`,
    },
    {
      name: 'Mount Fuji, Japan',
      color: 'darkviolet',
      coordinates: `35°21'37.0"N 138°43'38.1"E`,
    },
    {
      name: 'Moab, Utah, USA',
      color: 'gold',
      coordinates: `38°34'23.94"N 109°32'59.42"W`,
    },
    {
      name: 'Rio de Janeiro, Brasil',
      color: 'hotpink',
      coordinates: `22°59'13.4"S 43°12'15.9"W`,
    },
    {
      name: 'Killeen, Texas, USA',
      color: 'greenyellow',
      coordinates: `31°07'1.63"N 97°43'40.07"W`,
    },
    {
      name: 'Skafta River, Iceland',
      color: 'mistyrose',
      coordinates: `63°39'47.7"N 17°47'57.9"W`,
    },
    {
      name: 'Almeria, Spain',
      color: 'mediumturquoise',
      coordinates: `36°50'08.7"N 2°27'44.8"W`,
    },
    {
      name: 'Atlanta, Georgia, USA',
      color: 'white',
      coordinates: `33°45'39.0"N 84°23'50.1"W`,
    },
    {
      name: 'Georgetown, California, USA',
      color: 'sandybrown',
      coordinates: `38°54'22.4"N 120°50'23.9"W`,
    },
  ]
  
export const explore = () => {
    const sortedPlaces = sort()
    const body = document.body

    sortedPlaces.map(place => {
        const placeSection = document.createElement('section')
        const city = place.name.split(',')[0].toLowerCase().replaceAll(' ', '-')
        placeSection.style.background = `url('./where-do-we-go_images/${city}.jpg')`
        body.append(placeSection)
    })

    const locationIndicator = document.createElement('a')
    locationIndicator.classList.add('location')
    locationIndicator.textContent = `${sortedPlaces[0].name}\n${sortedPlaces[0].coordinates}`
    // let urlCoordinates = sortedPlaces[0].coordinates.replaceAll(`"`, "%22")
    // urlCoordinates = urlCoordinates.replaceAll(` `, `%20`)
    locationIndicator.href = `https://www.google.com/maps/place/${sortedPlaces[0].coordinates}`
    locationIndicator.style.color = sortedPlaces[0].color
    body.append(locationIndicator)

    const compass = document.createElement('div')
    compass.classList.add('direction')
    body.append(compass)
    let oldScroll = 0
    let newScroll = 0

    document.addEventListener("scroll", function() {
        newScroll = window.scrollY;
        newScroll > oldScroll? compass.textContent = "S": compass.textContent = "N"
        let index = Math.round(window.scrollY / window.innerHeight)
        // urlCoordinates = sortedPlaces[index].coordinates.replaceAll(`"`, "%22")
        // urlCoordinates = sortedPlaces[index].coordinates.replaceAll(` `, `+`)
        locationIndicator.href = `https://www.google.com/maps/place/${sortedPlaces[index].coordinates}`
        locationIndicator.target = "_blank"
        locationIndicator.style.color = sortedPlaces[index].color
        locationIndicator.textContent = `${sortedPlaces[index].name}\n${sortedPlaces[index].coordinates}`
        oldScroll = window.scrollY;
    })
}

const sort = () => {
    const northPlaces = places.filter(place => place.coordinates.includes("N"))
    const southPlaces = places.filter(place => place.coordinates.includes("S"))
    northPlaces.sort((a, b) => {
        if (a.coordinates > b.coordinates) return -1
        if (b.coordinates > a.coordinates) return 1   
    })
    southPlaces.sort((b, a) => {
        if (a.coordinates > b.coordinates) return -1
        if (b.coordinates > a.coordinates) return 1   
    })
    return northPlaces.concat(southPlaces)
}
