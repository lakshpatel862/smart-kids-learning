/* =================================================
              ALPHABET DATA
================================================= */

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
let currentNumber = 1;


/* =================================================
                    PAGE CONTROL
================================================= */

function hideAllPages() {

    const pages = [

        "homePage",
        "alphabetPage",
        "numberPage",
        "testMenuPage",
        "testPage",
        "resultPage"

    ];

    pages.forEach(function(id) {

        document.getElementById(id)
            .classList.add("hidden");

    });

}


function goHome() {

    speechSynthesis.cancel();

    hideAllPages();

    document.getElementById("homePage")
        .classList.remove("hidden");

}


/* =================================================
                  ALPHABET
================================================= */

function openAlphabetPage() {

    speechSynthesis.cancel();

    hideAllPages();

    document.getElementById("alphabetPage")
        .classList.remove("hidden");

    alphabetIndex = 0;

    showAlphabet();

}


function showAlphabet() {

    const item = alphabetData[alphabetIndex];

    document.getElementById("letter")
        .innerText = item[0];

    document.getElementById("picture")
        .innerText = item[2];

    document.getElementById("word")
        .innerText = item[1];

    document.getElementById("sentence")
        .innerText =
            item[0] + " for " + item[1];

    document.getElementById("alphabetProgress")
        .innerText =
            item[0] + " / Z";

    restartAnimation(
        document.getElementById("letter"),
        "drop .8s ease-out"
    );


    /* Automatically speak ONCE */

    setTimeout(function() {

        speakAlphabet();

    }, 700);

}


function speakAlphabet() {

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

    speechSynthesis.cancel();

    hideAllPages();

    document.getElementById("numberPage")
        .classList.remove("hidden");

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

    return "One Thousand";

}


function showNumber() {

    document.getElementById("bigNumber")
        .innerText = currentNumber;

    document.getElementById("numberName")
        .innerText =
            numberToWords(currentNumber);

    document.getElementById("numberProgress")
        .innerText =
            currentNumber + " / 1000";


    const ballBox =
        document.getElementById("balls");

    ballBox.innerHTML = "";

    const ballCount =
        Math.min(currentNumber, 20);

    for (
        let i = 0;
        i < ballCount;
        i++
    ) {

        const ball =
            document.createElement("span");

        ball.innerText = "⚽ ";

        ballBox.appendChild(ball);

    }


    restartAnimation(
        document.getElementById("bigNumber"),
        "drop .8s ease-out"
    );


    setTimeout(function() {

        speakNumber();

    }, 700);

}


function speakNumber() {

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(
            numberToWords(currentNumber)
        );

    speech.rate = 0.75;
    speech.pitch = 1.1;
    speech.volume = 1;

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
                    TEST MENU
================================================= */

function openTestMenu() {

    speechSynthesis.cancel();

    hideAllPages();

    document.getElementById("testMenuPage")
        .classList.remove("hidden");

}


/* =================================================
                  TEST VARIABLES
================================================= */

let testQuestions = [];
let testIndex = 0;
let testScore = 0;
let testType = "";


/* =================================================
                 RANDOM HELPER
================================================= */

function shuffle(array) {

    return array.sort(
        () => Math.random() - 0.5
    );

}


/* =================================================
                ALPHABET TEST
================================================= */

function createAlphabetQuestions(count) {

    let selected =
        shuffle([...alphabetData])
        .slice(0, count);

    return selected.map(function(item) {

        let correct = item[0].toLowerCase();

        let wrongLetters =
            alphabetData
                .filter(x =>
                    x[0].toLowerCase() !== correct
                )
                .map(x => x[0].toLowerCase());

        let options =
            shuffle([
                correct,
                ...shuffle(wrongLetters).slice(0,3)
            ]);

        return {

            type: "alphabet",

            question:
                "Find the small letter for " +
                item[0],

            emoji: item[2],

            options: options,

            answer: correct

        };

    });

}


/* =================================================
                  NUMBER TEST
================================================= */

function createNumberQuestions(count) {

    let numbers = [];

    while (numbers.length < count) {

        let n =
            Math.floor(Math.random() * 1000) + 1;

        if (!numbers.includes(n)) {

            numbers.push(n);

        }

    }


    return numbers.map(function(number) {

        let type =
            Math.floor(Math.random() * 2);


        /* What number comes after? */

        if (type === 0 && number < 1000) {

            let answer = number + 1;

            let options = shuffle([

                answer,
                number,
                answer + 1,
                Math.max(1, number - 1)

            ]);


            return {

                type: "number",

                question:
                    "What number comes after " +
                    number + "?",

                emoji: "🔢",

                options: options,

                answer: answer

            };

        }


        /* Number name */

        let answer =
            numberToWords(number);

        let wrongNumbers = [];

        while (wrongNumbers.length < 3) {

            let n =
                Math.floor(Math.random() * 1000) + 1;

            if (
                n !== number &&
                !wrongNumbers.includes(n)
            ) {

                wrongNumbers.push(n);

            }

        }


        let options = shuffle([

            answer,

            ...wrongNumbers.map(n =>
                numberToWords(n)
            )

        ]);


        return {

            type: "number",

            question:
                "Which is the name of " +
                number + "?",

            emoji: "🔢",

            options: options,

            answer: answer

        };

    });

}


/* =================================================
                 START ALPHABET TEST
================================================= */

function startAlphabetTest() {

    testType = "alphabet";

    testQuestions =
        createAlphabetQuestions(20);

    startTest();

}


/* =================================================
                  START NUMBER TEST
================================================= */

function startNumberTest() {

    testType = "number";

    testQuestions =
        createNumberQuestions(20);

    startTest();

}


/* =================================================
                   FULL TEST
================================================= */

function startMixedTest() {

    testType = "mixed";

    let alphabetQuestions =
        createAlphabetQuestions(10);

    let numberQuestions =
        createNumberQuestions(10);

    testQuestions =
        shuffle([
            ...alphabetQuestions,
            ...numberQuestions
        ]);

    startTest();

}


/* =================================================
                    START TEST
================================================= */

function startTest() {

    speechSynthesis.cancel();

    hideAllPages();

    document.getElementById("testPage")
        .classList.remove("hidden");

    testIndex = 0;

    testScore = 0;

    showTestQuestion();

}


/* =================================================
                SHOW QUESTION
================================================= */

function showTestQuestion() {

    const q =
        testQuestions[testIndex];

    document.getElementById("testProgress")
        .innerText =
            "Question " +
            (testIndex + 1) +
            " / " +
            testQuestions.length;

    document.getElementById("testScore")
        .innerText =
            "Score: " + testScore;


    document.getElementById("questionEmoji")
        .innerText = q.emoji;

    document.getElementById("questionText")
        .innerText = q.question;


    const area =
        document.getElementById("questionArea");

    area.innerHTML = "";


    const options =
        document.createElement("div");

    options.className = "options";


    q.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.className =
            "optionButton";

        button.innerText = option;

        button.onclick = function() {

            checkAnswer(button, option, q);

        };

        options.appendChild(button);

    });


    area.appendChild(options);


    document.getElementById("nextQuestionButton")
        .classList.add("hidden");

}


/* =================================================
                 CHECK ANSWER
================================================= */

function checkAnswer(button, option, question) {

    const allButtons =
        document.querySelectorAll(
            ".optionButton"
        );

    allButtons.forEach(function(btn) {

        btn.disabled = true;

    });


    if (
        String(option).toLowerCase() ===
        String(question.answer).toLowerCase()
    ) {

        button.classList.add("correct");

        testScore++;

        document.getElementById("testScore")
            .innerText =
                "Score: " + testScore;

        speakText("Correct! Very good!");

    } else {

        button.classList.add("wrong");

        allButtons.forEach(function(btn) {

            if (
                String(btn.innerText).toLowerCase() ===
                String(question.answer).toLowerCase()
            ) {

                btn.classList.add("correct");

            }

        });

        speakText("Try again next time!");

    }


    document.getElementById("nextQuestionButton")
        .classList.remove("hidden");

}


/* =================================================
                 NEXT QUESTION
================================================= */

function nextTestQuestion() {

    testIndex++;

    if (
        testIndex >= testQuestions.length
    ) {

        finishTest();

    } else {

        showTestQuestion();

    }

}


/* =================================================
                    FINISH TEST
================================================= */

function finishTest() {

    speechSynthesis.cancel();

    hideAllPages();

    document.getElementById("resultPage")
        .classList.remove("hidden");


    const total =
        testQuestions.length;

    const wrong =
        total - testScore;

    const percentage =
        Math.round(
            (testScore / total) * 100
        );


    document.getElementById("resultScore")
        .innerText =
            testScore +
            " / " +
            total +
            " Marks";


    document.getElementById("resultCorrect")
        .innerText =
            testScore;


    document.getElementById("resultWrong")
        .innerText =
            wrong;


    document.getElementById("resultPercentage")
        .innerText =
            percentage + "%";


    let message = "";


    if (percentage === 100) {

        message =
            "🤖🏆 PERFECT! All answers are correct! Robot Super Dance! 🎉";

    }

    else if (percentage >= 90) {

        message =
            "🌟 Excellent! Amazing work! Robot is celebrating! 🤖🎉";

    }

    else if (percentage >= 80) {

        message =
            "👏 Very Good! Keep Learning! 🤖✨";

    }

    else if (percentage >= 70) {

        message =
            "😊 Good Job! You are learning very well! 🤖";

    }

    else {

        message =
            "💪 Keep Practicing! You can do it! 🤖❤️";

    }


    document.getElementById("resultMessage")
        .innerText = message;


    /* Robot always dances after test.
       100% = special bigger dance */

    const robots =
        document.querySelectorAll(
            ".danceRobot"
        );


    robots.forEach(function(robot) {

        robot.style.animationDuration =
            percentage === 100
                ? "0.35s"
                : "0.65s";

    });


    speakText(
        "Test complete. You scored " +
        testScore +
        " out of " +
        total
    );

}


/* =================================================
                 TRY AGAIN
================================================= */

function restartTest() {

    if (testType === "alphabet") {

        startAlphabetTest();

    }

    else if (testType === "number") {

        startNumberTest();

    }

    else {

        startMixedTest();

    }

}


/* =================================================
                    SPEECH
================================================= */

function speakText(text) {

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.rate = 0.8;
    speech.pitch = 1.1;
    speech.volume = 1;

    speechSynthesis.speak(speech);

}


/* =================================================
              ANIMATION RESET
================================================= */

function restartAnimation(
    element,
    animation
) {

    element.style.animation = "none";

    void element.offsetWidth;

    element.style.animation = animation;

}


/* =================================================
                   START APP
================================================= */

window.addEventListener(
    "DOMContentLoaded",
    function() {

        hideAllPages();

        document.getElementById("homePage")
            .classList.remove("hidden");

    }
);
