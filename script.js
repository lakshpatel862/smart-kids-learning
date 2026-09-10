/* =====================================================
   SMART KIDS LEARNING
   ===================================================== */


/* ================= PAGE SYSTEM ================= */

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.add("hidden");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.remove("hidden");
        window.scrollTo(0, 0);
    }
}


/* ================= SPEAK ================= */

function speak(text) {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

        const voice = new SpeechSynthesisUtterance(text);

        voice.lang = "en-US";
        voice.rate = 0.8;
        voice.pitch = 1.1;

        window.speechSynthesis.speak(voice);
    }
}


/* ================= ALPHABET ================= */

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
    ["T", "Tiger", "🐯"],
    ["U", "Umbrella", "☂️"],
    ["V", "Van", "🚐"],
    ["W", "Watch", "⌚"],
    ["X", "Xylophone", "🎵"],
    ["Y", "Yak", "🐂"],
    ["Z", "Zebra", "🦓"]

];


function createAlphabet() {

    const grid = document.getElementById("alphabetGrid");

    if (!grid) return;

    grid.innerHTML = "";

    alphabetData.forEach(function(item, index) {

        const letter = item[0];
        const word = item[1];
        const emoji = item[2];

        const button = document.createElement("button");

        button.className = "letter-card";

        button.innerHTML =
            '<span class="letter">' + letter + '</span>' +
            '<span class="word">' + emoji + " " + word + '</span>';

        button.onclick = function() {
            openAlphabetLesson(index);
        };

        grid.appendChild(button);

    });
}


function openAlphabetLesson(index) {

    const item = alphabetData[index];

    const letter = item[0];
    const word = item[1];
    const emoji = item[2];

    const lesson = document.getElementById("alphabetLesson");

    lesson.innerHTML =
        '<div class="lesson-letter">' + letter + '</div>' +
        '<div class="lesson-object">' + emoji + '</div>' +
        '<div class="lesson-text">' +
        letter + " for " + word +
        '</div>' +
        '<button class="speak-btn" onclick="speak(\'' +
        letter + ' for ' + word +
        '\')">🔊 Listen</button>';

    showPage("alphabetLessonPage");

    speak(letter + " for " + word);
}


/* ================= NUMBER WORDS ================= */

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
        "Nine",
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

    if (number < 20) {
        return ones[number];
    }

    if (number < 100) {

        return tens[Math.floor(number / 10)] +
            (number % 10 !== 0 ? " " + ones[number % 10] : "");

    }

    if (number < 1000) {

        return ones[Math.floor(number / 100)] +
            " Hundred" +
            (number % 100 !== 0 ?
                " " + numberToWords(number % 100) : "");

    }

    if (number === 1000) {
        return "One Thousand";
    }

    return "";
}


/* ================= NUMBERS ================= */

function createNumbers() {

    const grid = document.getElementById("numbersGrid");

    if (!grid) return;

    grid.innerHTML = "";

    for (let i = 1; i <= 1000; i++) {

        const button = document.createElement("button");

        button.className = "number-card-item";

        const rainbowClass =
            "rainbow" + ((i - 1) % 7 + 1);

        button.innerHTML =
            '<span class="numberValue ' +
            rainbowClass +
            '">' +
            i +
            '</span>' +
            '<span class="numberWord">' +
            numberToWords(i) +
            '</span>';

        button.onclick = function() {
            openNumber(i);
        };

        grid.appendChild(button);
    }
}


function openNumber(number) {

    const detail = document.getElementById("numberDetail");

    let objects = "";

    if (number <= 20) {

        for (let i = 0; i < number; i++) {
            objects += "⚽ ";
        }

    } else {

        objects = "⚽ × " + number;
    }

    detail.innerHTML =
        '<div class="big-number rainbow' +
        ((number - 1) % 7 + 1) +
        '">' +
        number +
        '</div>' +

        '<div class="number-object">' +
        objects +
        '</div>' +

        '<div class="number-word-big">' +
        numberToWords(number) +
        '</div>' +

        '<button class="speak-btn" onclick="speak(\'' +
        numberToWords(number) +
        '\')">' +
        '🔊 Listen' +
        '</button>';

    showPage("numberDetailPage");

    speak(numberToWords(number));
}


/* ================= TABLES 1–100 ================= */

function showTablesPage() {

    showPage("tablesPage");

    createTables();
}


function createTables() {

    const grid = document.getElementById("tablesGrid");

    if (!grid) return;

    grid.innerHTML = "";

    for (let i = 1; i <= 100; i++) {

        const button = document.createElement("button");

        button.className = "table-choice";

        button.innerHTML =
            "✖️ Table " + i;

        button.onclick = function() {
            openTable(i);
        };

        grid.appendChild(button);
    }
}


function openTable(number) {

    const box = document.getElementById("singleTable");

    let html =
        '<h1 class="table-title">✖️ Table of ' +
        number +
        '</h1>';

    for (let i = 1; i <= 10; i++) {

        html +=
            '<div class="table-row">' +
            number +
            " × " +
            i +
            " = " +
            (number * i) +
            '</div>';
    }

    box.innerHTML = html;

    showPage("singleTablePage");
}


/* ================= TEST SYSTEM ================= */

let currentTest = "";
let currentQuestion = 0;
let score = 0;
let questions = [];


/* ================= SHUFFLE ================= */

function shuffle(array) {

    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        const temp = newArray[i];

        newArray[i] = newArray[j];

        newArray[j] = temp;
    }

    return newArray;
}


/* ================= ALPHABET TEST ================= */

function startAlphabetTest() {

    currentTest = "alphabet";
    currentQuestion = 0;
    score = 0;

    /*
       Every letter appears only once.
       Therefore no question repeats.
    */

    questions = shuffle(alphabetData);

    showPage("alphabetTestPage");

    showAlphabetQuestion();
}


function showAlphabetQuestion() {

    if (currentQuestion >= questions.length) {

        finishTest();

        return;
    }

    const item = questions[currentQuestion];

    const correctLetter = item[0];
    const correctWord = item[1];

    document.getElementById("alphabetQuestionNo").innerText =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        questions.length;

    document.getElementById("alphabetQuestion").innerText =
        correctLetter + " is for ?";

    const correctAnswer = correctWord;

    const otherWords = alphabetData
        .filter(function(x) {
            return x[1] !== correctWord;
        })
        .map(function(x) {
            return x[1];
        });

    const wrongAnswers = shuffle(otherWords).slice(0, 3);

    const answers = shuffle(
        [correctAnswer, ...wrongAnswers]
    );

    const box = document.getElementById("alphabetAnswers");

    box.innerHTML = "";

    answers.forEach(function(answer) {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.innerText = answer;

        button.onclick = function() {

            checkAlphabetAnswer(
                answer,
                correctAnswer
            );

        };

        box.appendChild(button);
    });
}


function checkAlphabetAnswer(answer, correctAnswer) {

    if (answer === correctAnswer) {
        score++;
    }

    currentQuestion++;

    setTimeout(function() {
        showAlphabetQuestion();
    }, 300);
}


/* ================= NUMBER TEST ================= */

function startNumberTest() {

    currentTest = "number";
    currentQuestion = 0;
    score = 0;

    const allNumbers = [];

    for (let i = 1; i <= 1000; i++) {
        allNumbers.push(i);
    }

    /*
       20 different numbers.
       Same number cannot repeat.
    */

    questions = shuffle(allNumbers).slice(0, 20);

    showPage("numberTestPage");

    showNumberQuestion();
}


function showNumberQuestion() {

    if (currentQuestion >= questions.length) {

        finishTest();

        return;
    }

    const correctNumber = questions[currentQuestion];

    document.getElementById("numberQuestionNo").innerText =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        questions.length;

    document.getElementById("numberQuestion").innerText =
        "Which number is " +
        numberToWords(correctNumber) +
        "?";

    const wrongNumbers = [];

    while (wrongNumbers.length < 3) {

        const randomNumber =
            Math.floor(Math.random() * 1000) + 1;

        if (
            randomNumber !== correctNumber &&
            !wrongNumbers.includes(randomNumber)
        ) {
            wrongNumbers.push(randomNumber);
        }
    }

    const answers = shuffle([
        correctNumber,
        ...wrongNumbers
    ]);

    const box = document.getElementById("numberAnswers");

    box.innerHTML = "";

    answers.forEach(function(answer) {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.innerText = answer;

        button.onclick = function() {

            if (answer === correctNumber) {
                score++;
            }

            currentQuestion++;

            setTimeout(function() {
                showNumberQuestion();
            }, 300);

        };

        box.appendChild(button);

    });
}


/* ================= MULTIPLICATION TEST ================= */

function startMultiplicationTest() {

    currentTest = "multiplication";
    currentQuestion = 0;
    score = 0;

    const allQuestions = [];

    /*
       1–100 tables
       × 1–10

       Total = 1000 unique questions.

       Example:
       1 × 1
       1 × 2
       ...
       100 × 10

       No same question repeats.
    */

    for (let a = 1; a <= 100; a++) {

        for (let b = 1; b <= 10; b++) {

            allQuestions.push({
                a: a,
                b: b,
                answer: a * b
            });

        }
    }

    questions = shuffle(allQuestions).slice(0, 20);

    showPage("multiplicationTestPage");

    showMultiplicationQuestion();
}


function showMultiplicationQuestion() {

    if (currentQuestion >= questions.length) {

        finishTest();

        return;
    }

    const question = questions[currentQuestion];

    const correctAnswer = question.answer;

    document.getElementById("multiplicationQuestionNo").innerText =
        "Question " +
        (currentQuestion + 1) +
        " / " +
        questions.length;


    /*
       IMPORTANT:
       Blank is shown ONLY in test.
       Normal table has complete answer.
    */

    document.getElementById("multiplicationQuestion").innerHTML =
        question.a +
        " × " +
        question.b +
        " = <span class='blank'>0</span>";


    const wrongAnswers = [];

    while (wrongAnswers.length < 3) {

        let wrong =
            correctAnswer +
            Math.floor(Math.random() * 21) -
            10;

        if (wrong < 0) {
            wrong = Math.floor(Math.random() * 1000) + 1;
        }

        if (
            wrong !== correctAnswer &&
            !wrongAnswers.includes(wrong)
        ) {
            wrongAnswers.push(wrong);
        }
    }

    const answers = shuffle([
        correctAnswer,
        ...wrongAnswers
    ]);

    const box =
        document.getElementById("multiplicationAnswers");

    box.innerHTML = "";

    answers.forEach(function(answer) {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.innerText = answer;

        button.onclick = function() {

            if (answer === correctAnswer) {
                score++;
            }

            currentQuestion++;

            setTimeout(function() {
                showMultiplicationQuestion();
            }, 300);

        };

        box.appendChild(button);

    });
}


/* ================= RESULT ================= */

function finishTest() {

    const total = questions.length;

    const wrong = total - score;

    const percentage =
        Math.round((score / total) * 100);

    document.getElementById("resultScore").innerText =
        score + " / " + total;

    document.getElementById("resultCorrect").innerText =
        score;

    document.getElementById("resultWrong").innerText =
        wrong;

    document.getElementById("resultPercentage").innerText =
        percentage + "%";


    let message = "";

    if (percentage >= 90) {
        message = "🌟 Excellent! You are a Super Star!";
    }
    else if (percentage >= 70) {
        message = "👏 Very Good! Keep Learning!";
    }
    else if (percentage >= 50) {
        message = "😊 Good Job! Practice More!";
    }
    else {
        message = "💪 Don't Give Up! Try Again!";
    }

    document.getElementById("resultMessage").innerText =
        message;

    showPage("resultPage");

    speak("Your score is " + score + " out of " + total);
}


/* ================= RESTART ================= */

function restartCurrentTest() {

    if (currentTest === "alphabet") {
        startAlphabetTest();
    }

    else if (currentTest === "number") {
        startNumberTest();
    }

    else if (currentTest === "multiplication") {
        startMultiplicationTest();
    }
}


/* ================= START APP ================= */

document.addEventListener("DOMContentLoaded", function() {

    createAlphabet();

    createNumbers();

    showPage("homePage");

});
