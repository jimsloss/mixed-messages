//   MIXED MESSAGES 

// every time a usewr runs a program, they should get a new, 
// randomized output.

// messages output should be made up of at least 3 different
// pieces of data

// MY SOLUTION: MIXED UP HEROES


const heroes = [
    'SpiderMan',
    'Superman',
    'Batman',
    'Batfink',
    'Hulk',
    'captainAmerica',
    'Thor',
    'Joker',
];

const quotes = [
    'My Spidey Sense is ',
    'with great power, comes great ',
    'Up Up and ',
    'hulk ',
    'my wings are like a shield of ',
    'surely you can lift my ',
    'I can do this all ',
    'let me show you a magic ',
    "im ",
    "I'll be "
];

const endings = [
    "tinglng.",
    "responsibility.",
    "Away.",
    "Smash.",
    "Steel.",
    "hammer.",
    "day.",
    "trick.",
    "batman.",
    "back."
]


let quote = quotes[Math.floor((Math.random()*quotes.length))];

let hero = heroes[Math.floor((Math.random()*heroes.length))]

let ending = endings[Math.floor((Math.random()*endings.length))]


console.log(hero + " says " + quote + ending);
