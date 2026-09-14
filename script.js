/* =====================================================
                 ALPHABET DATA
===================================================== */

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


/* =====================================================
                       TEST DATA
===================================================== */

let alphabetQuestions = [];
let numberQuestions = [];

let currentTest = "";
let currentQuestion = 0;
let testScore = 0;
let selectedAnswer = null;


/* =====================================================
                       HOME
===================================================== */

function hideAllPages() {

    document.querySelectorAll(".screen")
        .forEach(page => {
            page.classList.add("hidden");
        });

}


function goHome() {

    window.speechSynthesis.cancel();

    hideAllPages();

    document.getElementById("homePage")
        .classList.remove("hidden");

}


/* =====================================================
                  ALPHABET LEARNING
===================================================== */

function openAlphabetPage() {

    window.speechSynthesis.cancel();

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


    /*
       Automatically speak ONCE.
    */

    setTimeout(() => {

        speakAlphabet();

    },700);

}


function speakAlphabet() {

    window.speechSynthesis.cancel();

    const item = alphabetData[alphabetIndex];

    const speech =
        new SpeechSynthesisUtterance(
            item[0] + " for " + item[1]
        );

    speech.rate = .75;
    speech.pitch = 1.1;

    window.speechSynthesis.speak(speech);

}


function nextAlphabet() {

    if(alphabetIndex < alphabetData.length - 1) {

        alphabetIndex++;

        showAlphabet();

    }

}


function previousAlphabet() {

    if(alphabetIndex > 0) {

        alphabetIndex--;

        showAlphabet();

    }

}


/* =====================================================
                     NUMBERS
===================================================== */

function openNumberPage() {

    window.speechSynthesis.cancel();

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


    if(number < 10)
        return ones[number];


    if(number < 20)
        return teens[number - 10];


    if(number < 100) {

        return tens[Math.floor(number / 10)] +
        (
            number % 10 !== 0
            ? " " + ones[number % 10]
            : ""
        );

    }


    if(number < 1000) {

        return ones[Math.floor(number / 100)] +
        " Hundred" +
        (
            number % 100 !== 0
            ? " " + numberToWords(number % 100)
            : ""
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
        Math.min(currentNumber,20);


    for(let i = 0; i < ballCount; i++) {

        const ball =
            document.createElement("span");

        ball.innerText = "⚽ ";

        ballBox.appendChild(ball);

    }


    restartAnimation(
        document.getElementById("bigNumber"),
        "drop .8s ease-out"
    );


    setTimeout(() => {

        speakNumber();

    },700);

}


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


function nextNumber() {

    if(currentNumber < 1000) {

        currentNumber++;

        showNumber();

    }

}


function previousNumber() {

    if(currentNumber > 1) {

        currentNumber--;

        showNumber();

    }

}


/* =====================================================
                ALPHABET TEST
===================================================== */

function openAlphabetTest() {

    window.speechSynthesis.cancel();

    hideAllPages();

    document.getElementById("alphabetTestPage")
        .classList.remove("hidden");

    currentTest = "alphabet";

    createAlphabetQuestions();

    currentQuestion = 0;
    testScore = 0;

    showAlphabetQuestion();

}


/*
   20 questions.
   No repeated alphabet letters.
*/

function createAlphabetQuestions() {

    const shuffled =
        [...alphabetData]
        .sort(() => Math.random() - .5);

    alphabetQuestions =
        shuffled.slice(0,20);

}


function showAlphabetQuestion() {

    selectedAnswer = null;

    const q =
        alphabetQuestions[currentQuestion];

    document.getElementById("alphabetQuestion")
        .innerHTML =
        "🔤 Match: <b>" + q[0] + "</b>";

    const options =
        document.getElementById("alphabetOptions");

    options.innerHTML = "";


    const correct =
        q[0].toLowerCase();


    let optionLetters = [
        correct
    ];


    while(optionLetters.length < 4) {

        const random =
            String.fromCharCode(
                97 + Math.floor(Math.random() * 26)
            );

        if(!optionLetters.includes(random)) {

            optionLetters.push(random);

        }

    }


    optionLetters.sort(
        () => Math.random() - .5
    );


    optionLetters.forEach(letter => {

        const button =
            document.createElement("button");

        button.className =
            "optionButton";

        button.innerText = letter;

        button.onclick = function() {

            chooseAlphabetAnswer(
                letter,
                correct,
                button
            );

        };

        options.appendChild(button);

    });


    document.getElementById("alphabetQuestionNumber")
        .innerText =
        "Question " +
        (currentQuestion + 1) +
        " / 20";

}


function chooseAlphabetAnswer(
    answer,
    correct,
    button
) {

    if(selectedAnswer !== null)
        return;

    selectedAnswer = answer;

    if(answer === correct) {

        testScore++;

        button.classList.add("selected");

    } else {

        button.style.background = "#ff7675";
        button.style.color = "white";

    }

}


function nextAlphabetQuestion() {

    if(selectedAnswer === null) {

        alert("Please choose an answer 😊");

        return;

    }


    currentQuestion++;


    if(currentQuestion >= alphabetQuestions.length) {

        finishTest();

    } else {

        showAlphabetQuestion();

    }

}


/* =====================================================
                  NUMBER TEST
===================================================== */

function openNumberTest() {

    window.speechSynthesis.cancel();

    hideAllPages();

    document.getElementById("numberTestPage")
        .classList.remove("hidden");

    currentTest = "number";

    createNumberQuestions();

    currentQuestion = 0;
    testScore = 0;

    showNumberQuestion();

}


/*
   20 UNIQUE numbers from 1–1000.
*/

function createNumberQuestions() {

    const used = new Set();

    numberQuestions = [];


    while(numberQuestions.length < 20) {

        const n =
            Math.floor(
                Math.random() * 1000
            ) + 1;


        if(!used.has(n)) {

            used.add(n);

            numberQuestions.push(n);

        }

    }

}


function showNumberQuestion() {

    selectedAnswer = null;

    const number =
        numberQuestions[currentQuestion];


    document.getElementById("numberQuestion")
        .innerHTML =
        "🔢 What is <b>" +
        number +
        "</b>?";


    const options =
        document.getElementById("numberOptions");

    options.innerHTML = "";


    const correct =
        numberToWords(number);


    let choices = [correct];


    while(choices.length < 4) {

        const randomNumber =
            Math.floor(
                Math.random() * 1000
            ) + 1;


        const randomWord =
            numberToWords(randomNumber);


        if(!choices.includes(randomWord)) {

            choices.push(randomWord);

        }

    }


    choices.sort(
        () => Math.random() - .5
    );


    choices.forEach(word => {

        const button =
            document.createElement("button");

        button.className =
            "optionButton";

        button.innerText = word;

        button.onclick = function() {

            chooseNumberAnswer(
                word,
                correct,
                button
            );

        };

        options.appendChild(button);

    });


    document.getElementById("numberQuestionNumber")
        .innerText =
        "Question " +
        (currentQuestion + 1) +
        " / 20";

}


function chooseNumberAnswer(
    answer,
    correct,
    button
) {

    if(selectedAnswer !== null)
        return;

    selectedAnswer = answer;

    if(answer === correct) {

        testScore++;

        button.classList.add("selected");

    } else {

        button.style.background = "#ff7675";
        button.style.color = "white";

    }

}


function nextNumberQuestion() {

    if(selectedAnswer === null) {

        alert("Please choose an answer 😊");

        return;

    }


    currentQuestion++;


    if(currentQuestion >= numberQuestions.length) {

        finishTest();

    } else {

        showNumberQuestion();

    }

}


/* =====================================================
                    FINISH TEST
===================================================== */

function finishTest() {

    hideAllPages();

    document.getElementById("resultPage")
        .classList.remove("hidden");


    const total = 20;

    const percentage =
        Math.round(
            (testScore / total) * 100
        );

    const wrong =
        total - testScore;


    document.getElementById("resultScore")
        .innerText =
        testScore + " / 20 Marks";


    document.getElementById("resultCorrect")
        .innerText =
        "✅ Correct: " + testScore;


    document.getElementById("resultWrong")
        .innerText =
        "❌ Wrong: " + wrong;


    document.getElementById("resultPercentage")
        .innerText =
        "📊 Percentage: " +
        percentage + "%";


    let message = "";


    if(percentage === 100) {

        message =
            "👑 PERFECT! All answers are correct!";

    }

    else if(percentage >= 90) {

        message =
            "🚀 Amazing! You are a Super Learner!";

    }

    else if(percentage >= 80) {

        message =
            "🌟 Excellent! Keep Learning!";

    }

    else if(percentage >= 70) {

        message =
            "👏 Very Good! You can do it!";

    }

    else {

        message =
            "💪 Keep Practicing! You will improve!";

    }


    document.getElementById("resultMessage")
        .innerText = message;


    showResultRobots(percentage);

}


/* =====================================================
                    RESULT ROBOTS
===================================================== */

function showResultRobots(percentage) {

    const box =
        document.getElementById("resultRobots");

    box.innerHTML = "";


    /*
       70% = Robot 1
       80% = Robot 2
       90% = Robot 3
       100% = All 3
    */


    let robots = [];


    if(percentage === 100) {

        robots = [
            "robot70.jpg",
            "robot80.jpg",
            "robot90.jpg"
        ];

    }

    else if(percentage >= 90) {

        robots = [
            "robot90.jpg"
        ];

    }

    else if(percentage >= 80) {

        robots = [
            "robot80.jpg"
        ];

    }

    else if(percentage >= 70) {

        robots = [
            "robot70.jpg"
        ];

    }


    robots.forEach(file => {

        const img =
            document.createElement("img");

        img.src = file;

        img.className = "resultRobot";

        img.alt = "Dancing Robot";

        box.appendChild(img);

    });

}


/* =====================================================
                   RESTART TEST
===================================================== */

function restartCurrentTest() {

    if(currentTest === "alphabet") {

        openAlphabetTest();

    }

    else if(currentTest === "number") {

        openNumberTest();

    }

}


/* =====================================================
                 ANIMATION RESET
===================================================== */

function restartAnimation(
    element,
    animation
) {

    element.style.animation = "none";

    void element.offsetWidth;

    element.style.animation = animation;

}


/* =====================================================
                  START APP
===================================================== */

window.addEventListener(
    "DOMContentLoaded",
    function() {

        goHome();

    }
);
