/* =====================================================
   SMART KIDS LEARNING
   COMPLETE JAVASCRIPT
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
    ["P", "Penguin", "🐧"],
    ["Q", "Queen", "👑"],
    ["R", "Rainbow", "🌈"],
    ["S", "Sun", "☀️"],
    ["T", "Tree", "🌳"],
    ["U", "Umbrella", "☂️"],
    ["V", "Van", "🚐"],
    ["W", "Watermelon", "🍉"],
    ["X", "Xylophone", "🎵"],
    ["Y", "Yak", "🐂"],
    ["Z", "Zebra", "🦓"]

];


let currentAlphabet = 0;


/* =====================================================
   PAGE SYSTEM
===================================================== */

function showPage(pageId) {

    const pages = document.querySelectorAll(
        "#homePage, .page"
    );

    pages.forEach(function(page) {
        page.classList.add("hidden");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.remove("hidden");
    }

    // Stop any speaking when changing page
    window.speechSynthesis.cancel();
}


/* =====================================================
   ALPHABET GRID
===================================================== */

function createAlphabet() {

    const grid = document.getElementById("alphabetGrid");

    grid.innerHTML = "";

    alphabetData.forEach(function(item, index) {

        const box = document.createElement("div");

        box.className = "letterBox";

        box.innerText = item[0];

        box.onclick = function() {
            openAlphabet(index);
        };

        grid.appendChild(box);

    });
}


/* =====================================================
   OPEN ALPHABET
===================================================== */

function openAlphabet(index) {

    currentAlphabet = index;

    showPage("lessonPage");

    updateAlphabet();

    // Automatically speak ONLY ONCE
    setTimeout(function() {
        speakCurrent();
    }, 500);
}


/* =====================================================
   UPDATE ALPHABET
===================================================== */

function updateAlphabet() {

    const item = alphabetData[currentAlphabet];

    document.getElementById("lessonLetter").innerText =
        item[0];

    document.getElementById("lessonEmoji").innerText =
        item[2];

    document.getElementById("lessonText").innerText =
        item[0] + " for " + item[1];

}


/* =====================================================
   SPEAK ALPHABET
===================================================== */

function speakCurrent() {

    window.speechSynthesis.cancel();

    const item = alphabetData[currentAlphabet];

    const text =
        item[0] + " for " + item[1];

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.rate = 0.75;
    speech.pitch = 1.15;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}


/* =====================================================
   NEXT ALPHABET
===================================================== */

function nextLetter() {

    if (currentAlphabet < alphabetData.length - 1) {

        currentAlphabet++;

        updateAlphabet();

        setTimeout(function() {
            speakCurrent();
        }, 300);

    }

}


/* =====================================================
   PREVIOUS ALPHABET
===================================================== */

function previousLetter() {

    if (currentAlphabet > 0) {

        currentAlphabet--;

        updateAlphabet();

        setTimeout(function() {
            speakCurrent();
        }, 300);

    }

}


/* =====================================================
   NUMBER DATA
===================================================== */

let currentNumber = 1;


/* Number to words */

function numberToWords(num) {

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


    if (num < 10) {
        return ones[num];
    }

    if (num < 20) {
        return teens[num - 10];
    }

    if (num < 100) {

        return tens[Math.floor(num / 10)] +
            (num % 10 !== 0
                ? " " + ones[num % 10]
                : "");

    }


    if (num < 1000) {

        return ones[Math.floor(num / 100)] +
            " Hundred" +
            (num % 100 !== 0
                ? " " + numberToWords(num % 100)
                : "");

    }


    if (num === 1000) {
        return "One Thousand";
    }

    return "";
}


/* =====================================================
   CREATE NUMBERS
===================================================== */

function createNumbers() {

    const grid =
        document.getElementById("numbersGrid");

    grid.innerHTML = "";

    for (let i = 1; i <= 1000; i++) {

        const box =
            document.createElement("div");

        box.className = "numberBox";

        box.innerHTML =
            '<span class="rainbowNumber">' +
            i +
            '</span>';


        // Balls according to number
        const ballCount = ((i - 1) % 10) + 1;

        let balls = "";

        for (let j = 0; j < ballCount; j++) {
            balls += "⚽";
        }

        box.innerHTML +=
            '<small>' + balls + '</small>';


        box.onclick = function() {

            openNumber(i);

        };


        grid.appendChild(box);

    }

}


/* =====================================================
   OPEN NUMBER
===================================================== */

function openNumber(num) {

    currentNumber = num;

    showPage("numberLessonPage");

    updateNumber();

    setTimeout(function() {
        speakNumber();
    }, 500);

}


/* =====================================================
   UPDATE NUMBER
===================================================== */

function updateNumber() {

    document.getElementById("bigNumber").innerText =
        currentNumber;


    document.getElementById("numberWords").innerText =
        numberToWords(currentNumber);


    let ballCount =
        Math.min(currentNumber, 30);

    let balls = "";

    for (let i = 0; i < ballCount; i++) {
        balls += "⚽";
    }

    document.getElementById("ballDisplay").innerText =
        balls;

}


/* =====================================================
   SPEAK NUMBER
===================================================== */

function speakNumber() {

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(
            numberToWords(currentNumber)
        );

    speech.rate = 0.75;
    speech.pitch = 1.1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}


/* =====================================================
   NEXT NUMBER
===================================================== */

function nextNumber() {

    if (currentNumber < 1000) {

        currentNumber++;

        updateNumber();

        setTimeout(function() {
            speakNumber();
        }, 300);

    }

}


/* =====================================================
   PREVIOUS NUMBER
===================================================== */

function previousNumber() {

    if (currentNumber > 1) {

        currentNumber--;

        updateNumber();

        setTimeout(function() {
            speakNumber();
        }, 300);

    }

}


/* =====================================================
   MULTIPLICATION TABLE
===================================================== */

let currentTable = 1;


/* =====================================================
   CREATE TABLES
===================================================== */

function createTables() {

    const grid =
        document.getElementById("tablesGrid");

    grid.innerHTML = "";

    for (let i = 1; i <= 100; i++) {

        const box =
            document.createElement("div");

        box.className = "tableBox";

        box.innerText =
            "× " + i;

        box.onclick = function() {

            openTable(i);

        };

        grid.appendChild(box);

    }

}


/* =====================================================
   OPEN TABLE
===================================================== */

function openTable(num) {

    currentTable = num;

    showPage("tableLessonPage");

    updateTable();

}


/* =====================================================
   UPDATE TABLE
===================================================== */

function updateTable() {

    document.getElementById("tableTitle").innerText =
        "Table of " + currentTable;


    const content =
        document.getElementById("tableContent");

    content.innerHTML = "";


    for (let i = 1; i <= 10; i++) {

        const line =
            document.createElement("div");

        line.className = "tableLine";

        line.innerText =
            currentTable +
            " × " +
            i +
            " = " +
            (currentTable * i);

        content.appendChild(line);

    }

}


/* =====================================================
   SPEAK TABLE
===================================================== */

function speakTable() {

    window.speechSynthesis.cancel();

    let text = "";

    for (let i = 1; i <= 10; i++) {

        text +=
            currentTable +
            " times " +
            i +
            " equals " +
            (currentTable * i) +
            ". ";

    }

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.rate = 0.8;

    window.speechSynthesis.speak(speech);

}


/* =====================================================
   TEST SYSTEM
===================================================== */

let currentTest = "";

let questions = [];

let questionIndex = 0;

let score = 0;


/* =====================================================
   RANDOM SHUFFLE
===================================================== */

function shuffle(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];

    }

    return array;
}


/* =====================================================
   ALPHABET TEST
===================================================== */

function startAlphabetTest() {

    currentTest = "alphabet";

    questions = [];

    alphabetData.forEach(function(item) {

        questions.push({

            question:
                item[0] + " for " + item[1],

            answer:
                item[0]

        });

    });


    shuffle(questions);

    questionIndex = 0;

    score = 0;

    showPage("testPage");

    showQuestion();

}


/* =====================================================
   NUMBER TEST
===================================================== */

function startNumberTest() {

    currentTest = "number";

    questions = [];


    // 1000 unique number questions
    for (let i = 1; i <= 1000; i++) {

        questions.push({

            question:
                "Write the number: " +
                numberToWords(i),

            answer:
                String(i)

        });

    }


    shuffle(questions);

    // 20 questions in one test
    questions = questions.slice(0, 20);

    questionIndex = 0;

    score = 0;

    showPage("testPage");

    showQuestion();

}


/* =====================================================
   MULTIPLICATION TEST
===================================================== */

function startMultiplicationTest() {

    currentTest = "multiplication";

    questions = [];


    // Create many different questions
    for (let a = 1; a <= 100; a++) {

        for (let b = 1; b <= 10; b++) {

            questions.push({

                question:
                    a + " × " + b,

                answer:
                    String(a * b)

            });

        }

    }


    shuffle(questions);

    // 20 unique questions
    questions = questions.slice(0, 20);

    questionIndex = 0;

    score = 0;

    showPage("testPage");

    showQuestion();

}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    if (questionIndex >= questions.length) {

        finishTest();

        return;

    }


    const current =
        questions[questionIndex];


    document.getElementById("questionNumber")
        .innerText =
        "Question " +
        (questionIndex + 1) +
        " / " +
        questions.length;


    let title = "";


    if (currentTest === "alphabet") {

        title = "🔤 Alphabet Test";

    }

    else if (currentTest === "number") {

        title = "🔢 Number Test";

    }

    else {

        title = "✖️ Multiplication Test";

    }


    document.getElementById("testTitle")
        .innerText = title;


    document.getElementById("testQuestion")
        .innerText =
        current.question;


    const input =
        document.getElementById("testAnswer");

    input.value = "";

    input.focus();


    document.getElementById("answerMessage")
        .innerText = "";

}


/* =====================================================
   SUBMIT ANSWER
===================================================== */

function submitAnswer() {

    const input =
        document.getElementById("testAnswer");


    const userAnswer =
        input.value.trim().toUpperCase();


    if (userAnswer === "") {

        document.getElementById(
            "answerMessage"
        ).innerText =
            "✏️ Please write your answer.";

        return;

    }


    const correctAnswer =
        questions[questionIndex]
            .answer
            .toUpperCase();


    if (userAnswer === correctAnswer) {

        score++;

        document.getElementById(
            "answerMessage"
        ).innerText =
            "🎉 Correct! Very Good!";

    }

    else {

        document.getElementById(
            "answerMessage"
        ).innerText =
            "❌ Wrong! Correct answer: " +
            questions[questionIndex].answer;

    }


    questionIndex++;


    // Give time to see result
    setTimeout(function() {

        showQuestion();

    }, 900);

}


/* =====================================================
   ENTER KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            const testPage =
                document.getElementById("testPage");


            if (
                !testPage.classList.contains("hidden")
            ) {

                submitAnswer();

            }

        }

    }
);


/* =====================================================
   FINISH TEST
===================================================== */

function finishTest() {

    const total =
        questions.length;

    const wrong =
        total - score;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    document.getElementById(
        "resultScore"
    ).innerText =
        score + " / " + total;


    document.getElementById(
        "resultCorrect"
    ).innerText =
        score;


    document.getElementById(
        "resultWrong"
    ).innerText =
        wrong;


    document.getElementById(
        "resultPercentage"
    ).innerText =
        percentage + "%";


    let message = "";


    if (percentage >= 90) {

        message =
            "🌟 Excellent! You are a Super Star!";

    }

    else if (percentage >= 70) {

        message =
            "🎉 Very Good! Keep Learning!";

    }

    else if (percentage >= 50) {

        message =
            "😊 Good Job! Practice More!";

    }

    else {

        message =
            "💪 Keep Trying! You Can Do It!";

    }


    document.getElementById(
        "resultMessage"
    ).innerText =
        message;


    showPage("resultPage");

}


/* =====================================================
   RESTART TEST
===================================================== */

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


/* =====================================================
   START APP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        createAlphabet();

        createNumbers();

        createTables();

        showPage("homePage");

    }
);
