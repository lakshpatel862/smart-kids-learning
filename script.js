/* =================================================
              ALPHABET DATA
================================================= */

const alphabetData = [
    ["A","Apple","🍎"],
    ["B","Ball","⚽"],
    ["C","Cat","🐱"],
    ["D","Dog","🐶"],
    ["E","Elephant","🐘"],
    ["F","Fish","🐟"],
    ["G","Grapes","🍇"],
    ["H","Horse","🐴"],
    ["I","Ice Cream","🍦"],
    ["J","Juice","🧃"],
    ["K","Kite","🪁"],
    ["L","Lion","🦁"],
    ["M","Mango","🥭"],
    ["N","Nest","🪺"],
    ["O","Orange","🍊"],
    ["P","Parrot","🦜"],
    ["Q","Queen","👑"],
    ["R","Rabbit","🐰"],
    ["S","Sun","☀️"],
    ["T","Tree","🌳"],
    ["U","Umbrella","☂️"],
    ["V","Van","🚐"],
    ["W","Watermelon","🍉"],
    ["X","Xylophone","🎵"],
    ["Y","Yo-Yo","🪀"],
    ["Z","Zebra","🦓"]
];

let alphabetIndex = 0;
let currentNumber = 1;


/* =================================================
                    ANIMALS
================================================= */

const animals = [
    ["🐶","Dog","Woof Woof"],
    ["🐱","Cat","Meow Meow"],
    ["🐮","Cow","Moo Moo"],
    ["🐷","Pig","Oink Oink"],
    ["🐸","Frog","Croak Croak"],
    ["🐵","Monkey","Ooh Ooh Aah Aah"],
    ["🦁","Lion","Roar Roar"],
    ["🐯","Tiger","Roar"],
    ["🐘","Elephant","Trumpet"],
    ["🐴","Horse","Neigh"],
    ["🐑","Sheep","Baa Baa"],
    ["🐐","Goat","Baa Baa"],
    ["🐔","Chicken","Cluck Cluck"],
    ["🦆","Duck","Quack Quack"],
    ["🦜","Parrot","Hello"],
    ["🐦","Bird","Tweet Tweet"],
    ["🐟","Fish","Blub Blub"],
    ["🐬","Dolphin","Click Click"],
    ["🐍","Snake","Hiss Hiss"],
    ["🐢","Turtle","Slow Turtle"],
    ["🐰","Rabbit","Sniff Sniff"],
    ["🦊","Fox","Ring Ding"],
    ["🐻","Bear","Growl"],
    ["🐼","Panda","Growl"],
    ["🦒","Giraffe","Giraffe"],
    ["🦓","Zebra","Neigh"],
    ["🦏","Rhino","Snort"],
    ["🦛","Hippo","Grunt"],
    ["🐊","Crocodile","Snap"],
    ["🐪","Camel","Grunt"]
];


/* =================================================
                    PAGE CONTROL
================================================= */

const pages = [
    "homePage",
    "alphabetPage",
    "numberPage",
    "animalPage",
    "testMenuPage",
    "testPage",
    "resultPage"
];

function showPage(pageId) {

    pages.forEach(function(id) {

        const page = document.getElementById(id);

        if (page) {
            page.classList.add("hidden");
        }

    });

    const selected = document.getElementById(pageId);

    if (selected) {
        selected.classList.remove("hidden");
    }
}


function goHome() {

    if ("speechSynthesis" in window) {
        speechSynthesis.cancel();
    }

    showPage("homePage");
}


/* =================================================
                    ALPHABET
================================================= */

function openAlphabetPage() {

    alphabetIndex = 0;

    showPage("alphabetPage");

    showAlphabet();

}


function showAlphabet() {

    const item = alphabetData[alphabetIndex];

    document.getElementById("letter").innerText = item[0];

    document.getElementById("picture").innerText = item[2];

    document.getElementById("word").innerText = item[1];

    document.getElementById("sentence").innerText =
        item[0] + " for " + item[1];

    document.getElementById("alphabetProgress").innerText =
        item[0] + " / Z";

    restartAnimation(
        document.getElementById("letter")
    );

    /* Automatically speak once */

    setTimeout(function() {
        speakAlphabet();
    },500);

}


function speakAlphabet() {

    if (!("speechSynthesis" in window)) {
        return;
    }

    speechSynthesis.cancel();

    const item = alphabetData[alphabetIndex];

    const speech =
        new SpeechSynthesisUtterance(
            item[0] + " for " + item[1]
        );

    speech.rate = 0.75;
    speech.pitch = 1.1;
    speech.volume = 1;

    speechSynthesis.speak(speech);
}


function nextAlphabet() {

    if (alphabetIndex < alphabetData.length - 1) {

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


/* =================================================
                    NUMBERS
================================================= */

function openNumberPage() {

    currentNumber = 1;

    showPage("numberPage");

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

        return tens[Math.floor(number / 10)] +
            (number % 10
                ? " " + ones[number % 10]
                : "");

    }

    if (number < 1000) {

        return ones[Math.floor(number / 100)] +
            " Hundred" +
            (number % 100
                ? " " + numberToWords(number % 100)
                : "");

    }

    return "One Thousand";
}


function showNumber() {

    document.getElementById("bigNumber").innerText =
        currentNumber;

    document.getElementById("numberName").innerText =
        numberToWords(currentNumber);

    document.getElementById("numberProgress").innerText =
        currentNumber + " / 1000";


    const ballBox =
        document.getElementById("balls");

    ballBox.innerHTML = "";

    const count =
        Math.min(currentNumber,20);

    for (let i = 0; i < count; i++) {

        const ball =
            document.createElement("span");

        ball.innerText = "⚽ ";

        ballBox.appendChild(ball);

    }

    restartAnimation(
        document.getElementById("bigNumber")
    );

    setTimeout(function() {
        speakNumber();
    },500);
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

    speech.rate = 0.75;
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


/* =================================================
                    ANIMALS
================================================= */

function openAnimalPage() {

    showPage("animalPage");

    createAnimals();

}


function createAnimals() {

    const grid =
        document.getElementById("animalGrid");

    grid.innerHTML = "";

    animals.forEach(function(animal) {

        const button =
            document.createElement("button");

        button.className = "animalCard";

        button.innerHTML =
            '<div class="animalEmoji">' +
            animal[0] +
            '</div>' +
            '<div class="animalName">' +
            animal[1] +
            '</div>';

        button.onclick = function() {

            speakAnimal(
                animal[1],
                animal[2]
            );

        };

        grid.appendChild(button);

    });

}


function speakAnimal(name,sound) {

    if (!("speechSynthesis" in window)) {
        return;
    }

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(
            name + ". " + sound
        );

    speech.rate = 0.75;
    speech.pitch = 1.15;

    speechSynthesis.speak(speech);
}


/* =================================================
                    TEST
================================================= */

let testQuestions = [];
let testIndex = 0;
let testScore = 0;
let attemptsLeft = 3;
let testType = "full";
let lastTestType = "full";


function openTestMenu() {

    showPage("testMenuPage");

}


/* ================= ALPHABET QUESTIONS ================= */

function makeAlphabetQuestions() {

    const questions = [];

    const shuffled =
        [...alphabetData]
        .sort(() => Math.random() - 0.5)
        .slice(0,10);

    shuffled.forEach(function(item) {

        const wrong =
            alphabetData
            .filter(x => x[0] !== item[0])
            .sort(() => Math.random() - 0.5)
            .slice(0,3);

        const options = [
            item[0],
            wrong[0][0],
            wrong[1][0],
            wrong[2][0]
        ].sort(() => Math.random() - 0.5);

        questions.push({

            type:"alphabet",

            emoji:item[2],

            question:
                "Which letter is for " + item[1] + "?",

            answer:item[0],

            options:options

        });

    });

    return questions;
}


/* ================= NUMBER QUESTIONS ================= */

function makeNumberQuestions() {

    const questions = [];

    const used = [];

    while (used.length < 10) {

        const number =
            Math.floor(Math.random() * 100) + 1;

        if (!used.includes(number)) {

            used.push(number);

            const correct =
                numberToWords(number);

            const options = [correct];

            while (options.length < 4) {

                const randomNumber =
                    Math.floor(Math.random() * 100) + 1;

                const word =
                    numberToWords(randomNumber);

                if (!options.includes(word)) {
                    options.push(word);
                }

            }

            questions.push({

                type:"number",

                emoji:"🔢",

                question:
                    "What is " +
                    number +
                    " in words?",

                answer:correct,

                options:
                    options.sort(
                        () => Math.random() - 0.5
                    )

            });

        }

    }

    return questions;
}


/* ================= START TESTS ================= */

function startAlphabetTest() {

    testType = "alphabet";

    lastTestType = "alphabet";

    testQuestions =
        makeAlphabetQuestions();

    beginTest();

}


function startNumberTest() {

    testType = "number";

    lastTestType = "number";

    testQuestions =
        makeNumberQuestions();

    beginTest();

}


function startFullTest() {

    testType = "full";

    lastTestType = "full";

    testQuestions =
        [
            ...makeAlphabetQuestions()
                .slice(0,10),

            ...makeNumberQuestions()
                .slice(0,10)
        ];

    beginTest();

}


function beginTest() {

    testIndex = 0;

    testScore = 0;

    showPage("testPage");

    showTestQuestion();

}


/* =================================================
             SHOW TEST QUESTION
================================================= */

function showTestQuestion() {

    attemptsLeft = 3;

    const q =
        testQuestions[testIndex];

    document.getElementById("testScore")
        .innerText = testScore;

    document.getElementById("questionNumber")
        .innerText =
            "Question " +
            (testIndex + 1) +
            " / " +
            testQuestions.length;

    document.getElementById("questionEmoji")
        .innerText = q.emoji;

    document.getElementById("questionText")
        .innerText = q.question;

    document.getElementById("attemptText")
        .innerText =
            "Attempts left: 3";

    document.getElementById("answerMessage")
        .innerText = "";

    const nextButton =
        document.getElementById("nextQuestionButton");

    nextButton.classList.add("hidden");

    const box =
        document.getElementById("answerButtons");

    box.innerHTML = "";

    q.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.className =
            "answerButton";

        button.innerText = option;

        button.onclick = function() {

            checkAnswer(
                button,
                option,
                q.answer
            );

        };

        box.appendChild(button);

    });

}


/* =================================================
                CHECK ANSWER
================================================= */

function checkAnswer(button,selected,correct) {

    const message =
        document.getElementById("answerMessage");

    if (selected === correct) {

        button.classList.add("correct");

        testScore++;

        document.getElementById("testScore")
            .innerText = testScore;

        message.innerText =
            "✅ Correct! Great Job! 🌟";

        message.style.color = "#00a85a";

        disableAnswerButtons();

        document.getElementById("nextQuestionButton")
            .classList.remove("hidden");

        return;
    }


    /* WRONG ANSWER */

    button.classList.add("wrong");

    attemptsLeft--;

    document.getElementById("attemptText")
        .innerText =
            "Attempts left: " +
            attemptsLeft;

    message.innerText =
        "❌ Wrong! Try again! 💪";

    message.style.color = "#e53935";


    if (attemptsLeft <= 0) {

        message.innerText =
            "❌ Wrong! Correct answer: " +
            correct;

        disableAnswerButtons();

        document.getElementById("nextQuestionButton")
            .classList.remove("hidden");

    }

}


function disableAnswerButtons() {

    const buttons =
        document.querySelectorAll(
            ".answerButton"
        );

    buttons.forEach(function(button) {
        button.disabled = true;
    });

}


/* =================================================
                 NEXT QUESTION
================================================= */

function nextTestQuestion() {

    testIndex++;

    if (testIndex >= testQuestions.length) {

        finishTest();

        return;

    }

    showTestQuestion();

}


/* =================================================
                  RESULT
================================================= */

function finishTest() {

    showPage("resultPage");

    const total =
        testQuestions.length;

    const percentage =
        Math.round(
            (testScore / total) * 100
        );

    document.getElementById("finalMarks")
        .innerText =
            testScore + " / " + total;

    document.getElementById("correctResult")
        .innerText =
            "✅ Correct: " + testScore;

    document.getElementById("wrongResult")
        .innerText =
            "❌ Wrong: " +
            (total - testScore);

    document.getElementById("percentageResult")
        .innerText =
            "📊 Percentage: " +
            percentage + "%";


    const message =
        document.getElementById("resultMessage");

    const robot =
        document.getElementById("dancingRobot");

    robot.classList.remove("dance");


    if (percentage === 100) {

        message.innerText =
            "🏆 PERFECT! All answers are correct! 🤖🎉";

        robot.classList.add("dance");

    }

    else if (percentage >= 90) {

        message.innerText =
            "🌟 Excellent! You are a Super Star!";

    }

    else if (percentage >= 80) {

        message.innerText =
            "🎉 Very Good! Keep Learning!";

    }

    else if (percentage >= 70) {

        message.innerText =
            "😊 Good Job! Practice More!";

    }

    else {

        message.innerText =
            "💪 Don't Give Up! Try Again!";

    }

}


/* =================================================
                  RETRY TEST
================================================= */

function retryTest() {

    if (lastTestType === "alphabet") {

        startAlphabetTest();

    }

    else if (lastTestType === "number") {

        startNumberTest();

    }

    else {

        startFullTest();

    }

}


/* =================================================
              ANIMATION RESET
================================================= */

function restartAnimation(element) {

    if (!element) return;

    element.style.animation = "none";

    void element.offsetWidth;

    element.style.animation =
        "drop .7s";
}


/* =================================================
              START APPLICATION
================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showPage("homePage");

    }
);
