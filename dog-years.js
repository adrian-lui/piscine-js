"use strict";

/*
Someone once said that a human year is equal to 7 dog years.

Create a function named dogYears, that accepts the name of a planet, and the age of the dog in seconds. Your function should return the age of the dog on that planet in dog years.

earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31,557,600 seconds.
mercury: orbital period 0.2408467 Earth years.
venus: orbital period 0.61519726 Earth years.
mars: orbital period 1.8808158 Earth years.
jupiter: orbital period 11.862615 Earth years.
saturn: orbital period 29.447498 Earth years.
uranus: orbital period 84.016846 Earth years.
neptune: orbital period 164.79132 Earth years.
If you were told that a dog was 1,000,000,000 seconds old, you should calculate that the dog would be 221.82 Earth-years old.

You will have to format the number so that the result is rounded like the example above.
*/

function dogYears(planet, ageInSec) {
    switch (planet) {
        case "earth":
            return Number.parseFloat((ageInSec / 31557600 * 7).toFixed(2));
        case "mercury":
            return Number.parseFloat((ageInSec / 31557600 * 7 / 0.2408467).toFixed(2));
        case "venus":
            return Number.parseFloat((ageInSec / 31557600 * 7 / 0.61519726).toFixed(2));
        case "mars":
            return Number.parseFloat((ageInSec / 31557600 * 7 / 1.8808158).toFixed(2));
        case "jupiter":
            return Number.parseFloat((ageInSec / 31557600 * 7 / 11.862615).toFixed(2));
        case "saturn":
            return Number.parseFloat((ageInSec / 31557600 * 7 / 29.447498).toFixed(2));
        case "uranus":
            return Number.parseFloat((ageInSec / 31557600 * 7 / 84.016846).toFixed(2));
        case "neptune":
            return Number.parseFloat((ageInSec / 31557600 * 7 / 164.79132).toFixed(2));
    }
}