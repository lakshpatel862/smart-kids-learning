/* =========================================
   KIDS ALPHABET LEARNING
========================================= */

const alphabet = [

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


let currentIndex = 0;


/* =========================================
   HOME → ALPHABET
========================================= */

function openAlphabetPage() {

    document.getElementById("homePage")
        .classList.add("hidden");

    document.getElementById("alphabetPage")
        .classList.remove("hidden");

    currentIndex = 0;

    showAlphabet();

}


/* =========================================
   HOME BUTTON
========================================= */

function goHome() {

    // Stop voice
    window.speechSynthesis.cancel();

    document.getElementById("alphabetPage")
        .classList.add("hidden");

    document.getElementById("homePage")
        .classList.remove("hidden");

}


/* =========================================
   SHOW ALPHABET
========================================= */

function showAlphabet() {

    const item = alphabet[currentIndex];

    const letter =
        document.getElementById("letter");

    const picture =
        document.getElementById("picture");

    const word =
        document.getElementById("word");

    const sentence =
        document.getElementById("sentence");

    const progress =
        document.getElementById("progress");


    /* Remove animation first */

    letter.style.animation = "none";

    word.style.animation = "none";

    sentence.style.animation = "none";


    /* Force browser to restart animation */

    void letter.offsetWidth;
    void word.offsetWidth;
    void sentence.offsetWidth;


    /* Set new data */

    letter.innerText = item[0];

    picture.innerText = item[2];

    word.innerText = item[1];

    sentence.innerText =
        item[0] + " for " + item[1];

    progress.innerText =
        item[0] + " / Z";


    /* Start animations */

    letter.style.animation =
        "letterDrop .9s ease-out";

    word.style.animation =
        "wordPop .7s ease-out";

    sentence.style.animation =
        "sentencePop .7s ease-out";


    /* Previous button */

    document.getElementById("previousButton")
        .style.visibility =
        currentIndex === 0
            ? "hidden"
            : "visible";


    /* Next button */

    document.getElementById("nextButton")
        .innerText =
        currentIndex === alphabet.length - 1
            ? "🏠 Finish"
            : "Next ▶";


    /* Automatically speak ONCE */

    setTimeout(function() {

        speakCurrent();

    }, 800);

}


/* =========================================
   SPEAK
========================================= */

function speakCurrent() {

    // Stop previous speech
    window.speechSynthesis.cancel();

    const item = alphabet[currentIndex];

    const text =
        item[0] + " for " + item[1];


    const speech =
        new SpeechSynthesisUtterance(text);


    speech.rate = 0.75;

    speech.pitch = 1.15;

    speech.volume = 1;


    window.speechSynthesis.speak(speech);

}


/* =========================================
   NEXT
========================================= */

function nextLetter() {

    if (currentIndex < alphabet.length - 1) {

        currentIndex++;

        showAlphabet();

    }

    else {

        goHome();

    }

}


/* =========================================
   PREVIOUS
========================================= */

function previousLetter() {

    if (currentIndex > 0) {

        currentIndex--;

        showAlphabet();

    }

}
