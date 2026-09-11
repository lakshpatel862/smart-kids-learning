/* =====================================================
                  KIDS LEARNING WORLD
                     SCRIPT.JS
===================================================== */


/* =====================================================
                    ALPHABET DATA
===================================================== */

const alphabetData = [

    ["A", "Apple", "🍎"],
    ["B", "Ball", "⚽"],
    ["C", "Cat", "🐱"],
    ["D", "Dog", "🐶"],
    ["E", "Elephant", "🐘"],
    ["F", "Fish", "🐟"],
    ["G", "Grapes", "🍇"],
    ["H", "Horse", "🐴"],
    ["I", "Ice Cream", "🍦"],
    ["J", "Juice", "🧃"],
    ["K", "Kite", "🪁"],
    ["L", "Lion", "🦁"],
    ["M", "Mango", "🥭"],
    ["N", "Nest", "🪺"],
    ["O", "Orange", "🍊"],
    ["P", "Parrot", "🦜"],
    ["Q", "Queen", "👑"],
    ["R", "Rabbit", "🐰"],
    ["S", "Sun", "☀️"],
    ["T", "Tree", "🌳"],
    ["U", "Umbrella", "☂️"],
    ["V", "Van", "🚐"],
    ["W", "Watermelon", "🍉"],
    ["X", "Xylophone", "🎵"],
    ["Y", "Yo-Yo", "🪀"],
    ["Z", "Zebra", "🦓"]

];


let alphabetIndex = 0;


/* =====================================================
                       NUMBERS
===================================================== */

let currentNumber = 1;


/* =====================================================
                        TEST
===================================================== */

let testQuestions = [];

let testIndex = 0;

let testScore = 0;

let testAnswered = false;


/* =====================================================
                  HIDE ALL PAGES
===================================================== */

function hideAllPages() {

    document
        .getElementById("homePage")
        .classList.add("hidden");

    document
        .getElementById("alphabetPage")
        .classList.add("hidden");

    document
        .getElementById("numberPage")
        .classList.add("hidden");

    document
        .getElementById("testPage")
        .classList.add("hidden");

    document
        .getElementById("resultPage")
        .classList.add("hidden");

}


/* =====================================================
                         HOME
===================================================== */

function goHome() {

    window.speechSynthesis.cancel();

    hideAllPages();

    document
        .getElementById("homePage")
        .classList.remove("hidden");

}


/* =====================================================
                    OPEN ALPHABET
===================================================== */

function
