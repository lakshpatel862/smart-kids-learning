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
                    TEST
===================================================== */

let testLetters = [];
let testIndex = 0;
let testScore = 0;
let questionAnswered = false;


/* =====================================================
                 SHOW PAGE
===================================================== */

function showOnly(pageId) {

    const pages = [
        "homePage",
        "alphabetPage",
        "numberPage",
        "alphabetTestPage",
        "resultPage"
    ];

    pages.forEach(function(id) {

        const page = document.getElementById(id);

        if (page) {
            page.classList.add("hidden");
        }

    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.remove("hidden");
    }
}


/* =====================================================
                    HOME
===================================================== */

function goHome() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    showOnly("homePage");
}


/* =====================================================
              OPEN ALPHABET
===================================================== */

function openAlphabetPage() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    alphabetIndex = 0;

    showOnly("alphabetPage");

    showAlphabet();
}


/* =====================================================
                SHOW ALPHABET
===================================================== */

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


    /* Automatically speak ONE time */

    setTimeout(function() {
        speakAlphabet();
    }, 500);
}


/* =====================================================
               SPEAK ALPHABET
===================================================== */

function speakAlphabet() {

    if (!("speechSynthesis" in window)) {
        return;
    }

    window.speechSynthesis.cancel();

    const item = alphabetData[alphabetIndex];

    const speech =
        new SpeechSynthesisUtterance(
            item[0] + " for " + item[1]
        );

    speech.rate = 0.75;
    speech.pitch = 1.1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}


/* =====================================================
                  NEXT ALPHABET
===================================================== */

function nextAlphabet() {

    if (alphabetIndex < alphabetData.length - 1) {

        alphabetIndex++;

        showAlphabet();
    }
}


/* =====================================================
                PREVIOUS ALPHABET
===================================================== */

function previousAlphabet() {

    if (alphabetIndex > 0) {

        alphabetIndex--;

        showAlphabet();
    }
}


/* =====================================================
                 OPEN NUMBERS
===================================================== */

function openNumberPage() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    currentNumber = 1;

    showOnly("numberPage");

    showNumber();
}


/* =====================================================
              NUMBER TO WORD
===================================================== */

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
                    ? " " + numberToWords(number % 100)
                    : ""
            )
        );
    }


    return "One Thousand";
}


/* =====================================================
                   SHOW NUMBER
===================================================== */

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


    /*
       Maximum 20 balls screen par.
       Number 1 se 1000 tak chalega.
    */

    const ballCount =
        Math.min(currentNumber, 20);


    for (let i = 0; i < ballCount; i++) {

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
    }, 500);
}


/* =====================================================
                  SPEAK NUMBER
===================================================== */

function speakNumber() {

    if (!("speechSynthesis" in window)) {
        return;
    }

    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(
            numberToWords(currentNumber)
        );

    speech.rate = 0.75;
    speech.pitch = 1.1;

    window.speechSynthesis.speak(speech);
}


/* =====================================================
                  NEXT NUMBER
===================================================== */

function nextNumber() {

    if (currentNumber < 1000) {

        currentNumber++;

        showNumber();
    }
}


/* =====================================================
                PREVIOUS NUMBER
===================================================== */

function previousNumber() {

    if (currentNumber > 1) {

        currentNumber--;

        showNumber();
    }
}


/* =====================================================
              OPEN ALPHABET TEST
===================================================== */

function openAlphabetTest() {

    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }


    /*
       A-Z ko ek baar shuffle karenge.
       Is test ke andar same question repeat nahi hoga.
    */

    testLetters =
        alphabetData
            .map(function(item) {
                return item[0];
            })
            .sort(function() {
                return Math.random() - 0.5;
            });


    testIndex = 0;

    testScore = 0;

    questionAnswered = false;


    showOnly("alphabetTestPage");

    showTestQuestion();
}


/* =====================================================
               SHOW TEST QUESTION
===================================================== */

function showTestQuestion() {

    questionAnswered = false;

    document.getElementById("nextTestButton").disabled = true;


    const currentLetter =
        testLetters[testIndex];


    document.getElementById("capitalLetter").innerText =
        currentLetter;


    document.getElementById("testQuestionNumber").innerText =
        testIndex + 1;


    document.getElementById("testScore").innerText =
        testScore;


    document.getElementById("testMessage").innerText =
        "👆 Connect " + currentLetter +
        " with the correct small letter";


    const options =
        createOptions(currentLetter);


    const box =
        document.getElementById("smallOptions");

    box.innerHTML = "";


    options.forEach(function(letter) {

        const button =
            document.createElement("button");

        button.className = "smallOption";

        button.innerText = letter.toLowerCase();

        button.onclick = function() {

            checkTestAnswer(
                letter,
                button
            );

        };

        box.appendChild(button);
    });
}


/* =====================================================
                CREATE OPTIONS
===================================================== */

function createOptions(correctLetter) {

    let letters = [];

    letters.push(correctLetter);


    /*
       Wrong letters add karenge.
    */

    while (letters.length < 6) {

        const randomIndex =
            Math.floor(
                Math.random() *
                alphabetData.length
            );

        const randomLetter =
            alphabetData[randomIndex][0];


        if (!letters.includes(randomLetter)) {

            letters.push(randomLetter);
        }
    }


    /*
       Options ko shuffle.
    */

    return letters.sort(function() {
        return Math.random() - 0.5;
    });
}


/* =====================================================
                CHECK ANSWER
===================================================== */

function checkTestAnswer(
    selectedLetter,
    clickedButton
) {

    if (questionAnswered) {
        return;
    }


    questionAnswered = true;


    const correctLetter =
        testLetters[testIndex];


    const buttons =
        document.querySelectorAll(".smallOption");


    buttons.forEach(function(button) {

        button.disabled = true;

    });


    if (selectedLetter === correctLetter) {

        testScore++;

        clickedButton.classList.add("correct");

        document.getElementById("testMessage").innerText =
            "🎉 Correct! Great Job! 🤖";

    } else {

        clickedButton.classList.add("wrong");


        buttons.forEach(function(button) {

            if (
                button.innerText ===
                correctLetter.toLowerCase()
            ) {

                button.classList.add("correct");
            }

        });


        document.getElementById("testMessage").innerText =
            "😊 Good Try! Correct answer is " +
            correctLetter.toLowerCase();
    }


    document.getElementById("testScore").innerText =
        testScore;


    document.getElementById("nextTestButton").disabled =
        false;
}


/* =====================================================
               NEXT TEST QUESTION
===================================================== */

function nextTestQuestion() {

    if (!questionAnswered) {
        return;
    }


    testIndex++;


    /*
       26 questions complete.
    */

    if (testIndex >= testLetters.length) {

        finishAlphabetTest();

        return;
    }


    showTestQuestion();
}


/* =====================================================
                FINISH TEST
===================================================== */

function finishAlphabetTest() {

    const total =
        testLetters.length;

    const correct =
        testScore;

    const wrong =
        total - correct;

    const percentage =
        Math.round(
            (correct / total) * 100
        );


    document.getElementById("resultTotal").innerText =
        total;

    document.getElementById("resultCorrect").innerText =
        correct;

    document.getElementById("resultWrong").innerText =
        wrong;

    document.getElementById("resultPercentage").innerText =
        percentage + "%";


    let message = "";
    let dance = "";


    if (percentage === 100) {

        message =
            "🏆 PERFECT! All Questions Correct!";

        dance =
            "🤖 🐰 🐼 🐥 🎉 💃 🕺 🎉";

    }

    else if (percentage >= 90) {

        message =
            "🌟 Excellent! Super Star!";

        dance =
            "🤖 🤖 🤖 💃 🕺 🎉";

    }

    else if (percentage >= 80) {

        message =
            "🥳 Very Good! Keep Learning!";

        dance =
            "🐰 🐰 💃 🕺 🎉";

    }

    else if (percentage >= 70) {

        message =
            "👏 Great Job! Keep Practicing!";

        dance =
            "🐼 🐼 💃 🕺 🎉";

    }

    else {

        message =
            "😊 Good Try! Practice Again!";

        dance =
            "🐥 📚 💪";
    }


    document.getElementById("resultMessage").innerText =
        message;


    document.getElementById("danceArea").innerText =
        dance;


    showOnly("resultPage");
}


/* =====================================================
                 ANIMATION
===================================================== */

function restartAnimation(element) {

    if (!element) {
        return;
    }

    element.style.animation = "none";

    void element.offsetWidth;

    element.style.animation =
        "cartoonDance .8s ease-out";
}


/* =====================================================
               START APP
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showOnly("homePage");

    }
);
