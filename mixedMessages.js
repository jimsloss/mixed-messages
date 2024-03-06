//   MIXED MESSAGES 

// every time a usewr runs a program, they should get a new, 
// randomized output.

// messages output should be made up of at least 3 different
// pieces of data

// MY SOLUTION: MIXED UP HEROES


const heroes = [
    'Batfink',
    'Batman',
    'Captain_America',
    'Hulk',
    'Joker',
    'SpiderMan',
    'Superman',
    'Thor',
    'Uncle_Ben',  
];

const quotes = [
    'My wings are like a shield of Steel!',
    "I am Batman!",
    'I can do this all day!',
    'Hulk Smash!',
    'Let me show you a magic trick!',
    'My Spidey Sense is tingling!',
    'Kryptonite is my weakness.',
    'No-one can lift my Hammer!',
    'With great power, comes great responsibility.',
];

let wrongAnswers = [
    'No!',
    'Of course Not!',
    'Dont be stupid!',
    'Ehh?',
    'Ha! I dont think so!',
    'Really?'
]

let quote = "";

let hero = "";

let answer = "";

let wrong = "";

function getQuote() {

    let heroIndex = Math.floor((Math.random()*heroes.length));
    let quoteIndex = Math.floor((Math.random()*quotes.length));

    hero = heroes[heroIndex];
    quote = quotes[quoteIndex];

    if(hero=="Uncle_Ben"){
        newimage = "images/" + hero + ".jpg";
    }
    else{
        newimage = "images/" + hero + ".png";
    }
    
    document.getElementById('heroimage').src = newimage;
    document.getElementById('quotelabel').innerHTML = "Did " + hero  +" say?";
    document.getElementById('heroquote').value = quote;

    if ( heroIndex === quoteIndex){
        answer = "YES!  Of course he did!";
    }
    else{
        wrong = wrongAnswers[Math.floor((Math.random()*wrongAnswers.length))];
        answer = wrong;
    }


    document.getElementById('response').innerHTML = answer;
    
}
