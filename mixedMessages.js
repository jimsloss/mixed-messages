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
    'Captain_America',
    'Thor',
    'Joker',
];

const quotes = [
    'My Spidey Sense is ',
    'With great power, comes great ',
    'Kriptonite is my ',
    'Hulk ',
    'My wings are like a shield of ',
    'Surely you can lift my ',
    'I can do this all ',
    'Let me show you a magic ',
    "I am ",
];

const endings = [
    "tinglng.",
    "responsibility.",
    "weakness.",
    "smash.",
    "steel.",
    "hammer.",
    "day.",
    "trick.",
    "batman.",
];

let quote = "";

let hero = "";

let ending = "";

let newquote = "";

function getQuote() {
    quote = quotes[Math.floor((Math.random()*quotes.length))];
    hero = heroes[Math.floor((Math.random()*heroes.length))];
    ending = endings[Math.floor((Math.random()*endings.length))];

    newquote = quote + ending;

    document.getElementById('quotelabel').innerHTML = hero +" says;";
    document.getElementById('heroquote').value = newquote;
}
