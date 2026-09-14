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
let currentNumber = 1;
let currentTable = 1;


/* =====================================================
                    TEST VARIABLES
===================================================== */

let currentTest = "";

let testQuestions = [];
let testQuestionIndex = 0;
let testScore = 0;

const TOTAL_TEST_QUESTIONS = 10;


/* =====================================================
                    PAGE CONTROL
===================================================== */

const allPages = [

    "homePage",
    "alphabetPage",
    "numberPage",
    "alphabetTestPage",
    "numberTestPage",
    "tablePage",
    "tableTestPage",
    "resultPage"

];


function showPage(pageId) {

    allPages.forEach(function(id) {

        const page = document.getElementById(id);

        if (page) {
            page.classList.add("hidden");
        }

    });


    const selectedPage =
        document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.remove("hidden");
    }

}


function goHome() {

    speechSynthesis.cancel();

    showPage("homePage");

}


/* =====================================================
                 ALPHABET LEARNING
===================================================== */

function openAlphabetPage() {

    speechSynthesis.cancel();

    alphabetIndex = 0;

    showPage("alphabetPage");

    showAlphabet();

}


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
        item[0] + " for " + item[1];


    document.getElementById("alphabetProgress")
        .innerText =
        item[0] + " / Z";


    /*
       Automatically speak ONCE
       after opening/changing letter.
    */

    setTimeout(function() {

        speakAlphabet();

    }, 600);

}


function speakAlphabet() {

    speechSynthesis.cancel();

    const item =
        alphabetData[alphabetIndex];


    const speech =
        new SpeechSynthesisUtterance(
            item[0] + " for " + item[1]
        );


    speech.rate = 0.75;
    speech.pitch = 1.1;

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

function openNumberPage() {

    speechSynthesis.cancel();

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
                ? " " + numberToWords(number % 100)
                : ""
            )
        );

    }


    return "One Thousand";

}


function showNumber() {

    document.getElementById("bigNumber")
        .innerText =
        currentNumber;


    document.getElementById("numberName")
        .innerText =
        numberToWords(currentNumber);


    document.getElementById("numberProgress")
        .innerText =
        currentNumber + " / 1000";


    const ballBox =
        document.getElementById("balls");


    ballBox.innerHTML = "";


    /*
       Up to 20 individual balls.
       After 20, show multiplication style.
    */

    if (currentNumber <= 20) {

        for (
            let i = 0;
            i < currentNumber;
            i++
        ) {

            const ball =
                document.createElement("span");

            ball.innerText = "⚽ ";

            ballBox.appendChild(ball);

        }

    } else {

        ballBox.innerText =
            "⚽ × " + currentNumber;

    }


    setTimeout(function() {

        speakNumber();

    }, 600);

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


/* =====================================================
                RANDOM QUESTION HELPER
===================================================== */

function shuffle(array) {

    const copy =
        [...array];


    for (
        let i = copy.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            copy[i],
            copy[j]
        ] =
        [
            copy[j],
            copy[i]
        ];

    }


    return copy;

}


/* =====================================================
                 ALPHABET TEST
===================================================== */

function openAlphabetTest() {

    speechSynthesis.cancel();

    currentTest = "alphabet";

    testScore = 0;
    testQuestionIndex = 0;


    /*
       Shuffle A-Z.
       Each letter is used only once
       in this test.
    */

    testQuestions =
        shuffle(alphabetData)
        .slice(0, TOTAL_TEST_QUESTIONS);


    showPage("alphabetTestPage");

    document.getElementById("alphabetTestScore")
        .innerText = "0";


    loadAlphabetQuestion();

}


function loadAlphabetQuestion() {

    if (
        testQuestionIndex >=
        testQuestions.length
    ) {

        finishAlphabetTest();

        return;

    }


    const correct =
        testQuestions[testQuestionIndex];


    document.getElementById(
        "capitalLetter"
    ).innerText =
        correct[0];


    document.getElementById(
        "alphabetQuestionNumber"
    ).innerText =
        testQuestionIndex + 1;


    /*
       Create 3 choices.
       Correct answer + 2 different letters.
    */

    const otherLetters =
        shuffle(
            alphabetData.filter(
                item =>
                    item[0] !== correct[0]
            )
        ).slice(0, 2);


    const options =
        shuffle(
            [
                correct[0].toLowerCase(),
                otherLetters[0][0].toLowerCase(),
                otherLetters[1][0].toLowerCase()
            ]
        );


    const box =
        document.getElementById(
            "smallOptions"
        );


    box.innerHTML = "";


    options.forEach(function(letter) {

        const button =
            document.createElement("button");


        button.className =
            "optionButton";


        button.innerText =
            letter;


        button.onclick =
            function() {

                checkAlphabetAnswer(
                    letter,
                    correct[0].toLowerCase()
                );

            };


        box.appendChild(button);

    });


    document.getElementById(
        "alphabetTestMessage"
    ).innerText =
        "Choose the correct small letter.";

}


function checkAlphabetAnswer(
    selected,
    correct
) {

    const buttons =
        document.querySelectorAll(
            "#smallOptions .optionButton"
        );


    buttons.forEach(
        button =>
            button.disabled = true
    );


    if (selected === correct) {

        testScore++;


        document.getElementById(
            "alphabetTestMessage"
        ).innerText =
            "🎉 Correct! Great job!";


        showCorrectAnimation();

    } else {

        document.getElementById(
            "alphabetTestMessage"
        ).innerText =
            "😊 Try next one!";

    }


    document.getElementById(
        "alphabetTestScore"
    ).innerText =
        testScore;


    testQuestionIndex++;


    setTimeout(
        loadAlphabetQuestion,
        900
    );

}


function finishAlphabetTest() {

    showResult();

}


/* =====================================================
                   NUMBER TEST
===================================================== */

function openNumberTest() {

    speechSynthesis.cancel();

    currentTest = "number";

    testScore = 0;
    testQuestionIndex = 0;


    /*
       Generate 10 unique numbers.
    */

    const numbers = [];

    while (
        numbers.length <
        TOTAL_TEST_QUESTIONS
    ) {

        const n =
            Math.floor(
                Math.random() * 100
            ) + 1;


        if (!numbers.includes(n)) {

            numbers.push(n);

        }

    }


    testQuestions =
        numbers;


    showPage("numberTestPage");


    document.getElementById(
        "numberTestScore"
    ).innerText = "0";


    loadNumberQuestion();

}


function loadNumberQuestion() {

    if (
        testQuestionIndex >=
        testQuestions.length
    ) {

        finishNumberTest();

        return;

    }


    const number =
        testQuestions[testQuestionIndex];


    document.getElementById(
        "numberQuestionNumber"
    ).innerText =
        testQuestionIndex + 1;


    document.getElementById(
        "numberQuestionText"
    ).innerText =
        numberToWords(number);


    const options =
        new Set([number]);


    while (options.size < 4) {

        options.add(
            Math.floor(
                Math.random() * 100
            ) + 1
        );

    }


    const box =
        document.getElementById(
            "numberOptions"
        );


    box.innerHTML = "";


    shuffle(
        Array.from(options)
    ).forEach(function(option) {

        const button =
            document.createElement("button");


        button.className =
            "numberOption";


        button.innerText =
            option;


        button.onclick =
            function() {

                checkNumberAnswer(
                    option,
                    number
                );

            };


        box.appendChild(button);

    });


    document.getElementById(
        "numberTestMessage"
    ).innerText =
        "Choose the correct answer.";

}


function checkNumberAnswer(
    selected,
    correct
) {

    const buttons =
        document.querySelectorAll(
            "#numberOptions .numberOption"
        );


    buttons.forEach(
        button =>
            button.disabled = true
    );


    if (selected === correct) {

        testScore++;


        document.getElementById(
            "numberTestMessage"
        ).innerText =
            "🎉 Correct!";


        showCorrectAnimation();

    } else {

        document.getElementById(
            "numberTestMessage"
        ).innerText =
            "😊 Keep trying!";

    }


    document.getElementById(
        "numberTestScore"
    ).innerText =
        testScore;


    testQuestionIndex++;


    setTimeout(
        loadNumberQuestion,
        900
    );

}


function finishNumberTest() {

    showResult();

}


/* =====================================================
              MULTIPLICATION TABLES
===================================================== */

function openTablePage() {

    currentTable = 1;

    showPage("tablePage");

    showTable();

}


function showTable() {

    document.getElementById(
        "tableNumber"
    ).innerText =
        "Table " + currentTable;


    const box =
        document.getElementById(
            "tableContent"
        );


    box.innerHTML = "";


    for (
        let i = 1;
        i <= 10;
        i++
    ) {

        const row =
            document.createElement("div");


        row.className =
            "tableRow";


        row.innerText =
            currentTable +
            " × " +
            i +
            " = " +
            (currentTable * i);


        box.appendChild(row);

    }

}


function nextTable() {

    if (currentTable < 100) {

        currentTable++;

        showTable();

    }

}


function previousTable() {

    if (currentTable > 1) {

        currentTable--;

        showTable();

    }

}


/* =====================================================
              MULTIPLICATION TEST
===================================================== */

function openTableTest() {

    speechSynthesis.cancel();

    currentTest = "multiplication";

    testScore = 0;
    testQuestionIndex = 0;


    /*
       Create 10 unique multiplication questions.
    */

    const questions = [];


    while (
        questions.length <
        TOTAL_TEST_QUESTIONS
    ) {

        const a =
            Math.floor(
                Math.random() * 100
            ) + 1;


        const b =
            Math.floor(
                Math.random() * 10
            ) + 1;


        const key =
            a + "x" + b;


        if (
            !questions.some(
                q => q.key === key
            )
        ) {

            questions.push({

                a: a,
                b: b,
                answer: a * b,
                key: key

            });

        }

    }


    testQuestions =
        questions;


    showPage("tableTestPage");


    document.getElementById(
        "tableTestScore"
    ).innerText = "0";


    loadTableQuestion();

}


function loadTableQuestion() {

    if (
        testQuestionIndex >=
        testQuestions.length
    ) {

        finishTableTest();

        return;

    }


    const question =
        testQuestions[testQuestionIndex];


    document.getElementById(
        "tableQuestionNumber"
    ).innerText =
        testQuestionIndex + 1;


    document.getElementById(
        "tableQuestion"
    ).innerText =
        question.a +
        " × " +
        question.b +
        " =  ?";


    const answers =
        new Set([
            question.answer
        ]);


    while (answers.size < 4) {

        const randomAnswer =
            Math.max(
                1,
                question.answer +
                Math.floor(
                    Math.random() * 30
                ) - 15
            );


        answers.add(randomAnswer);

    }


    const box =
        document.getElementById(
            "tableOptions"
        );


    box.innerHTML = "";


    shuffle(
        Array.from(answers)
    ).forEach(function(answer) {

        const button =
            document.createElement("button");


        button.className =
            "tableOption";


        button.innerText =
            answer;


        button.onclick =
            function() {

                checkTableAnswer(
                    answer,
                    question.answer
                );

            };


        box.appendChild(button);

    });


    document.getElementById(
        "tableTestMessage"
    ).innerText =
        "Choose the correct answer.";

}


function checkTableAnswer(
    selected,
    correct
) {

    const buttons =
        document.querySelectorAll(
            "#tableOptions .tableOption"
        );


    buttons.forEach(
        button =>
            button.disabled = true
    );


    if (selected === correct) {

        testScore++;


        document.getElementById(
            "tableTestMessage"
        ).innerText =
            "🎉 Correct!";


        showCorrectAnimation();

    } else {

        document.getElementById(
            "tableTestMessage"
        ).innerText =
            "😊 Try the next one!";

    }


    document.getElementById(
        "tableTestScore"
    ).innerText =
        testScore;


    testQuestionIndex++;


    setTimeout(
        loadTableQuestion,
        900
    );

}


function finishTableTest() {

    showResult();

}


/* =====================================================
                    RESULT
===================================================== */

function showResult() {

    const total =
        testQuestions.length;


    const wrong =
        total - testScore;


    const percentage =
        Math.round(
            (testScore / total) * 100
        );


    document.getElementById(
        "resultScore"
    ).innerText =
        testScore +
        " / " +
        total;


    document.getElementById(
        "resultCorrect"
    ).innerText =
        testScore;


    document.getElementById(
        "resultWrong"
    ).innerText =
        wrong;


    document.getElementById(
        "resultPercentage"
    ).innerText =
        percentage + "%";


    let message = "";
    let reward = "";


    if (percentage === 100) {

        message =
            "🏆 AMAZING! PERFECT SCORE!";


        reward =
            "🤖 Doraemon + 🧒 Chhota Bheem + 👦 Motu Patlu — EVERYONE IS DANCING! 🎉";


        startAllDance();

    }

    else if (percentage >= 90) {

        message =
            "🌟 Excellent! Super Star!";


        reward =
            "🤖 Doraemon is dancing! 🎉";


        startDoraDance();

    }

    else if (percentage >= 80) {

        message =
            "🥳 Very Good!";


        reward =
            "👦 Motu Patlu are dancing! 🎉";


        startMotuDance();

    }

    else if (percentage >= 70) {

        message =
            "👏 Good Job!";


        reward =
            "🧒 Chhota Bheem is dancing! 🎉";


        startBheemDance();

    }

    else {

        message =
            "💪 Keep Practicing!";


        reward =
            "🌈 Try again and become a Super Star!";

    }


    document.getElementById(
        "resultMessage"
    ).innerText =
        message;


    document.getElementById(
        "rewardMessage"
    ).innerText =
        reward;


    showPage("resultPage");


    /*
       Birds appe
