"use strict";

// Create three copies of the person object named clone1, clone2 and samePerson.

// Increase the age of person by one, and set its country to 'FR'.

// You must find a way to keep the original values of clone1 and clone2. The values of samePerson should change when person is changed.

const samePerson = person;
const clone1 = {};
Object.assign(clone1, person);
const clone2 = {};
Object.assign(clone2, person);

person.age += 1;
person.country = 'FR';