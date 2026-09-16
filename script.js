/* =====================================================
              KIDS LEARNING WORLD
                 COMPLETE SCRIPT
===================================================== */


/* =====================================================
                       PAGE SYSTEM
===================================================== */

const pages = [
    "homePage",
    "alphabetPage",
    "numberPage",
    "animalPage",
    "testMenuPage",
    "testPage",
    "resultPage"
];


function showPage(id) {

    pages.forEach(function(page) {

        const element =
            document.getElementById(page);

        if (element) {

            element.classList.add("hidden");

        }

    });


    const selected =
        document.getElementById(id);

    if (selected) {

        selected.classList.remove("hidden");

    }

}


/* =====================================================
                       ALPHABET
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


function openAlphabet() {

    stopAllSound();

    showPage("alphabetPage");

    alphabetIndex = 0;

    showAlphabet();

}


function showAlphabet() {

    const item =
        alphabetData[alphabetIndex];


    document.getElementById("letter")
        .textContent = item[0];


    document.getElementById("picture")
        .textContent = item[2];


    document.getElementById("word")
        .textContent = item[1];


    document.getElementById("sentence")
        .textContent =
            item[0] +
            " for " +
            item[1];


    document.getElementById("alphabetProgress")
        .textContent =
            item[0] +
            " / Z";


    const letter =
        document.getElementById("letter");


    letter.style.animation = "none";

    void letter.offsetWidth;

    letter.style.animation =
        "drop .7s";


    /*
       Automatically speak once.
    */

    setTimeout(function() {

        speakAlphabet();

    }, 600);

}


function speakAlphabet() {

    if (!("speechSynthesis" in window)) {
        return;
    }


    speechSynthesis.cancel();


    const item =
        alphabetData[alphabetIndex];


    const speech =
        new SpeechSynthesisUtterance(
            item[0] +
            " for " +
            item[1]
        );


    speech.rate = 0.7;

    speech.pitch = 1.15;

    speech.volume = 1;


    speechSynthesis.speak(speech);

}


function nextAlphabet() {

    if (
        alphabetIndex <
        alphabetData.length - 1
    ) {

        alphabetIndex++;

        showAlphabet();

    }

}


function previousAlphabet() {

    if (alphabetIndex > 0) {

        alphabetIndex--;

        showAlphabet();

    }

}


/* =====================================================
                         NUMBERS
===================================================== */

let currentNumber = 1;


function openNumbers() {

    stopAllSound();

    showPage("numberPage");

    currentNumber = 1;

    showNumber();

}


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
                number % 10
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
                number % 100
                ? " " +
                  numberToWords(number % 100)
                : ""
            )
        );

    }


    return "One Thousand";

}


function showNumber() {

    document.getElementById("bigNumber")
        .textContent =
        currentNumber;


    document.getElementById("numberName")
        .textContent =
        numberToWords(currentNumber);


    document.getElementById("numberProgress")
        .textContent =
        currentNumber +
        " / 1000";


    const balls =
        document.getElementById("balls");


    balls.textContent = "";


    const count =
        Math.min(currentNumber, 20);


    for (
        let i = 0;
        i < count;
        i++
    ) {

        balls.textContent += "⚽ ";

    }


    const numberElement =
        document.getElementById("bigNumber");


    numberElement.style.animation =
        "none";

    void numberElement.offsetWidth;

    numberElement.style.animation =
        "drop .7s";


    setTimeout(function() {

        speakNumber();

    }, 600);

}


function speakNumber() {

    if (!("speechSynthesis" in window)) {
        return;
    }


    speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(
            numberToWords(currentNumber)
        );


    speech.rate = .7;

    speech.pitch = 1.1;


    speechSynthesis.speak(speech);

}


function nextNumber() {

    if (currentNumber < 1000) {

        currentNumber++;

        showNumber();

    }

}


function previousNumber() {

    if (currentNumber > 1) {

        currentNumber--;

        showNumber();

    }

}


/* =====================================================
                     ANIMAL DATA
===================================================== */

/*
   soundType is used to create a simple
   animal-like sound using Web Audio.

   speech = animal name + sound word.
*/

const animals = [

    ["Lion", "🦁", "Roar Roar!", "lion"],
    ["Tiger", "🐯", "Roar Roar!", "lion"],
    ["Elephant", "🐘", "Trumpet!", "elephant"],
    ["Dog", "🐶", "Woof Woof!", "dog"],
    ["Cat", "🐱", "Meow Meow!", "cat"],
    ["Cow", "🐮", "Moo Moo!", "cow"],
    ["Horse", "🐴", "Neigh!", "horse"],
    ["Goat", "🐐", "Maa Maa!", "goat"],
    ["Sheep", "🐑", "Baa Baa!", "sheep"],
    ["Monkey", "🐵", "Ooh Ooh Aah Aah!", "monkey"],
    ["Rabbit", "🐰", "Squeak!", "rabbit"],
    ["Bear", "🐻", "Growl!", "lion"],
    ["Panda", "🐼", "Growl!", "lion"],
    ["Fox", "🦊", "Yip Yip!", "dog"],
    ["Wolf", "🐺", "Awooo!", "wolf"],
    ["Pig", "🐷", "Oink Oink!", "pig"],
    ["Chicken", "🐔", "Cluck Cluck!", "chicken"],
    ["Duck", "🦆", "Quack Quack!", "duck"],
    ["Frog", "🐸", "Ribbit Ribbit!", "frog"],
    ["Snake", "🐍", "Hisssss!", "snake"],
    ["Penguin", "🐧", "Penguin!", "duck"],
    ["Owl", "🦉", "Hoo Hoo!", "owl"],
    ["Parrot", "🦜", "Hello!", "parrot"],
    ["Fish", "🐟", "Blub Blub!", "fish"],
    ["Dolphin", "🐬", "Click Click!", "dolphin"],
    ["Whale", "🐳", "Whooo!", "whale"],
    ["Octopus", "🐙", "Blub Blub!", "fish"],
    ["Butterfly", "🦋", "Flutter!", "bird"],
    ["Bee", "🐝", "Buzz Buzz!", "bee"],
    ["Turtle", "🐢", "Turtle!", "fish"]

];


/* =====================================================
                     OPEN ANIMALS
===================================================== */

function openAnimals() {

    stopAllSound();

    showPage("animalPage");

    createAnimals();

}


/* =====================================================
                   CREATE ANIMAL CARDS
===================================================== */

function createAnimals() {

    const grid =
        document.getElementById("animalGrid");


    grid.innerHTML = "";


    animals.forEach(function(animal) {


        const button =
            document.createElement("button");


        button.className =
            "animalCard";


        button.innerHTML =

            '<div class="animalEmoji">' +
            animal[1] +
            '</div>' +

            '<div class="animalName">' +
            animal[0] +
            '</div>' +

            '<div class="animalSound">' +
            '🔊 ' +
            animal[2] +
            '</div>';


        button.addEventListener(
            "click",
            function() {

                playAnimal(animal);

            }
        );


        grid.appendChild(button);

    });

}


/* =====================================================
                   PLAY ANIMAL
===================================================== */

function playAnimal(animal) {

    stopAllSound();


    /*
       First say the animal name
       and sound word.
    */

    speakAnimal(animal);


    /*
       Then create a simple animal-like
       sound with Web Audio.
    */

    setTimeout(function() {

        makeAnimalSound(animal[3]);

    }, 700);

}


/* =====================================================
                    ANIMAL SPEECH
===================================================== */

function speakAnimal(animal) {

    if (!("speechSynthesis" in window)) {
        return;
    }


    const speech =
        new SpeechSynthesisUtterance(
            animal[0] +
            ". " +
            animal[2]
        );


    speech.rate = .75;

    speech.pitch = 1.15;

    speech.volume = 1;


    speechSynthesis.cancel();

    speechSynthesis.speak(speech);

}


/* =====================================================
                 WEB AUDIO ANIMAL SOUND
===================================================== */

let audioContext = null;


function makeAnimalSound(type) {

    try {

        if (!audioContext) {

            audioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();

        }


        if (
            audioContext.state ===
            "suspended"
        ) {

            audioContext.resume();

        }


        const now =
            audioContext.currentTime;


        if (type === "cat") {

            tone(
                600,
                350,
                0.35,
                "sine"
            );

            setTimeout(function() {

                tone(
                    700,
                    450,
                    0.3,
                    "sine"
                );

            }, 250);

        }


        else if (type === "dog") {

            tone(
                180,
                100,
                0.18,
                "square"
            );

            setTimeout(function() {

                tone(
                    150,
                    90,
                    0.18,
                    "square"
                );

            }, 220);

        }


        else if (type === "lion") {

            tone(
                100,
                55,
                0.9,
                "sawtooth"
            );

        }


        else if (type === "cow") {

            tone(
                180,
                120,
                0.7,
                "sawtooth"
            );

        }


        else if (type === "horse") {

            tone(
                450,
                900,
                0.35,
                "sawtooth"
            );

        }


        else if (type === "elephant") {

            tone(
                300,
                700,
                0.8,
                "sawtooth"
            );

        }


        else if (type === "sheep") {

            tone(
                500,
                350,
                0.5,
                "sawtooth"
            );

        }


        else if (type === "goat") {

            tone(
                350,
                250,
                0.4,
                "sawtooth"
            );

        }


        else if (type === "duck") {

            tone(
                450,
                700,
                0.25,
                "square"
            );

            setTimeout(function() {

                tone(
                    450,
                    650,
                    0.25,
                    "square"
                );

            }, 280);

        }


        else if (type === "frog") {

            tone(
                220,
                100,
                0.2,
                "square"
            );

            setTimeout(function() {

                tone(
                    180,
                    80,
                    0.2,
                    "square"
                );

            }, 180);

        }


        else if (type === "bee") {

            tone(
                220,
                240,
                1,
                "sawtooth"
            );

        }


        else if (type === "snake") {

            tone(
                1800,
                1200,
                0.7,
                "sawtooth"
            );

        }


        else if (type === "owl") {

            tone(
                500,
                300,
                0.4,
                "sine"
            );

            setTimeout(function() {

                tone(
                    500,
                    300,
                    0.4,
                    "sine"
                );

            }, 400);

        }


        else if (type === "wolf") {

            tone(
                300,
                700,
                1.2,
                "sine"
            );

        }


        else {

            tone(
                350,
                250,
                0.5,
                "sine"
            );

        }

    }

    catch (error) {

        console.log(
            "Animal sound error:",
            error
        );

    }

}


/* =====================================================
                   SOUND GENERATOR
===================================================== */

function tone(
    startFrequency,
    endFrequency,
    duration,
    waveform
) {

    if (!audioContext) {
        return;
    }


    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        waveform;


    oscillator.frequency
        .setValueAtTime(
            startFrequency,
            audioContext.currentTime
        );


    oscillator.frequency
        .linearRampToValueAtTime(
            endFrequency,
            audioContext.currentTime +
            duration
        );


    gain.gain
        .setValueAtTime(
            0.001,
            audioContext.currentTime
        );


    gain.gain
        .linearRampToValueAtTime(
            0.18,
            audioContext.currentTime +
            0.03
        );


    gain.gain
        .linearRampToValueAtTime(
            0.001,
            audioContext.currentTime +
            duration
        );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime +
        duration +
        0.05
    );

}


/* =====================================================
                     STOP SOUND
===================================================== */

function stopAllSound() {

    if (
        "speechSynthesis" in window
    ) {

        speechSynthesis.cancel();

    }

}


/* =====================================================
                       TEST
===================================================== */

let testType = "alphabet";

let questions = [];

let questionIndex = 0;

let score = 0;

let answered = false;

let selectedAnswer = null;

let changeCount = 0;

const MAX_CHANGES = 3;


/* =====================================================
                     TEST MENU
===================================================== */

function openTestMenu() {

    stopAllSound();

    showPage("testMenuPage");

}


/* =====================================================
                 ALPHABET TEST
===================================================== */

function startAlphabetTest() {

    testType = "alphabet";

    createAlphabetQuestions();

    startTest();

}


/* =====================================================
                  NUMBER TEST
===================================================== */

function startNumberTest() {

    testType = "number";

    createNumberQuestions();

    startTest();

}


/* =====================================================
              CREATE ALPHABET QUESTIONS
===================================================== */

function createAlphabetQuestions() {

    questions = [];


    const shuffled =
        [...alphabetData]
        .sort(
            () =>
                Math.random() -
                0.5
        )
        .slice(0, 20);


    shuffled.forEach(function(item) {

        const correct =
            item[0].toLowerCase();


        let options = [
            correct
        ];


        const letters =
            "abcdefghijklmnopqrstuvwxyz";


        while (
            options.length < 4
        ) {

            const random =
                letters[
                    Math.floor(
                        Math.random() *
                        letters.length
                    )
                ];


            if (
                !options.includes(
                    random
                )
            ) {

                options.push(
                    random
                );

            }

        }


        options.sort(
            () =>
                Math.random() -
                0.5
        );


        questions.push({

            question:
                "Which small letter matches " +
                item[0] +
                "?",

            visual:
                item[0],

            correct:
                correct,

            options:
                options

        });

    });

}


/* =====================================================
               CREATE NUMBER QUESTIONS
===================================================== */

function createNumberQuestions() {

    questions = [];


    const used =
        new Set();


    while (
        questions.length < 20
    ) {

        const number =
            Math.floor(
                Math.random() *
                1000
            ) + 1;


        if (
            used.has(number)
        ) {

            continue;

        }


        used.add(number);


        const correct =
            numberToWords(number);


        let options = [
            correct
        ];


        while (
            options.length < 4
        ) {

            const randomNumber =
                Math.floor(
                    Math.random() *
                    1000
                ) + 1;


            const randomWord =
                numberToWords(
                    randomNumber
                );


            if (
                !options.includes(
                    randomWord
                )
            ) {

                options.push(
                    randomWord
                );

            }

        }


        options.sort(
            () =>
                Math.random() -
