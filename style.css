/* =========================================
             ALPHABET DATA
========================================= */

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


/* =========================================
                 NUMBERS
========================================= */

let currentNumber = 1;


/* =========================================
               HOME
========================================= */

function goHome() {

    window.speechSynthesis.cancel();

    document.getElementById("alphabetPage")
        .classList.add("hidden");

    document.getElementById("numberPage")
        .classList.add("hidden");

    document.getElementById("homePage")
        .classList.remove("hidden");

}


/* =========================================
            OPEN ALPHABET
========================================= */

function openAlphabetPage() {

    window.speechSynthesis.cancel();

    document.getElementById("homePage")
        .classList.add("hidden");

    document.getElementById("numberPage")
        .classList.add("hidden");

    document.getElementById("alphabetPage")
        .classList.remove("hidden");

    alphabetIndex = 0;

    showAlphabet();

}


/* =========================================
            SHOW ALPHABET
========================================= */

function showAlphabet() {

    const item =
        alphabetData[alphabetIndex];


    document.getElementById("letter")
        .innerText = item[0];


    document.getElementById("picture")
        .innerText = item[2];


    document.getElementById("word")
        .innerText = item[1];


    document.getElementById("sentence")
        .innerText =
            item[0] +
            " for " +
            item[1];


    document.getElementById("alphabetProgress")
        .innerText =
            item[0] +
            " / Z";


    restartAnimation(
        document.getElementById("letter"),
        "drop .8s ease-out"
    );


    setTimeout(function() {

        speakAlphabet();

    }, 700);

}


/* =========================================
             SPEAK ALPHABET
========================================= */

function speakAlphabet() {

    window.speechSynthesis.cancel();

    const item =
        alphabetData[alphabetIndex];


    const speech =
        new SpeechSynthesisUtterance(
            item[0] +
            " for " +
            item[1]
        );


    speech.rate = .75;

    speech.pitch = 1.1;

    window.speechSynthesis.speak(speech);

}


/* =========================================
             NEXT ALPHABET
========================================= */

function nextAlphabet() {

    if (
        alphabetIndex <
        alphabetData.length - 1
    ) {

        alphabetIndex++;

        showAlphabet();

    }

}


/* =========================================
           PREVIOUS ALPHABET
========================================= */

function previousAlphabet() {

    if (alphabetIndex > 0) {

        alphabetIndex--;

        showAlphabet();

    }

}


/* =========================================
             OPEN NUMBERS
========================================= */

function openNumberPage() {

    window.speechSynthesis.cancel();

    document.getElementById("homePage")
        .classList.add("hidden");

    document.getElementById("alphabetPage")
        .classList.add("hidden");

    document.getElementById("numberPage")
        .classList.remove("hidden");


    currentNumber = 1;

    showNumber();

}


/* =========================================
          NUMBER TO WORDS
========================================= */

function numberToWords(number) {

    const ones = [

        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine"

    ];


    const teens = [

        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen"

    ];


    const tens = [

        "",
        "",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety"

    ];


    if (number < 10) {

        return ones[number];

    }


    if (number < 20) {

        return teens[number - 10];

    }


    if (number < 100) {

        return (
            tens[Math.floor(number / 10)] +
            (
                number % 10 !== 0
                ? " " + ones[number % 10]
                : ""
            )
        );

    }


    if (number < 1000) {

        return (
            ones[Math.floor(number / 100)] +
            " Hundred" +
            (
                number % 100 !== 0
                ? " " +
                  numberToWords(number % 100)
                : ""
            )
        );

    }


    if (number === 1000) {

        return "One Thousand";

    }

}


/* =========================================
             SHOW NUMBER
========================================= */

function showNumber() {

    document.getElementById("bigNumber")
        .innerText =
            currentNumber;


    document.getElementById("numberName")
        .innerText =
            numberToWords(currentNumber);


    document.getElementById("numberProgress")
        .innerText =
            currentNumber +
            " / 1000";


    /* =====================================
              CREATE BALLS
    ===================================== */

    const ballBox =
        document.getElementById("balls");


    ballBox.innerHTML = "";


    /*
       For very large numbers we don't
       show 1000 balls because screen
       would become too crowded.

       We show up to 20 balls.
    */

    const ballCount =
        Math.min(currentNumber, 20);


    for (
        let i = 0;
        i < ballCount;
        i++
    ) {

        const ball =
            document.createElement("span");

        ball.innerText = "⚽";

        ballBox.appendChild(ball);

    }


    restartAnimation(
        document.getElementById("bigNumber"),
        "drop .8s ease-out"
    );


    /*
       Automatically speak only once
       when number changes.
    */

    setTimeout(function() {

        speakNumber();

    }, 700);

}


/* =========================================
               SPEAK NUMBER
========================================= */

function speakNumber() {

    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(
            numberToWords(currentNumber)
        );


    speech.rate = .75;

    speech.pitch = 1.1;

    speech.volume = 1;


    window.speechSynthesis.speak(speech);

}


/* =========================================
              NEXT NUMBER
========================================= */

function nextNumber() {

    if (currentNumber < 1000) {

        currentNumber++;

        showNumber();

    }

}


/* =========================================
            PREVIOUS NUMBER
========================================= */

function previousNumber() {

    if (currentNumber > 1) {

        currentNumber--;

        showNumber();

    }

}


/* =========================================
             ANIMATION RESET
========================================= */

function restartAnimation(
    element,
    animation
) {

    element.style.animation = "none";

    void element.offsetWidth;

    element.style.animation = animation;

}
