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
    ["Y", "Yacht", "⛵"],
    ["Z", "Zebra", "🦓"]

];


let currentIndex = 0;


/* =====================================================
   ALPHABET BOXES
===================================================== */

const grid =
    document.getElementById("alphabetGrid");


alphabetData.forEach(
    function(item, index) {

        const box =
            document.createElement("div");


        box.className =
            "letterBox";


        box.innerText =
            item[0];


        box.onclick =
            function() {

                openLesson(index);

            };


        grid.appendChild(box);

    }
);


/* =====================================================
   LESSON
===================================================== */

function openLesson(index) {

    currentIndex = index;


    hideAllPages();


    document.getElementById("lessonPage")
        .classList.remove("hidden");


    updateLesson();


    speakCurrent();

}


function updateLesson() {

    const data =
        alphabetData[currentIndex];


    document.getElementById("letter")
        .innerText = data[0];


    document.getElementById("word")
        .innerText = data[1];


    document.getElementById("bigLetter")
        .innerText = data[0];


    document.getElementById("smallLetter")
        .innerText =
        data[0].toLowerCase();


    document.getElementById("picture")
        .innerText = data[2];


    document.getElementById("wordText")
        .innerText = data[1];


    document.getElementById("progress")
        .innerText =
        (currentIndex + 1) +
        " / 26";

}


function speakCurrent() {

    const data =
        alphabetData[currentIndex];


    speak(
        data[0] +
        " for " +
        data[1]
    );

}


function nextLetter() {

    if (
        currentIndex <
        alphabetData.length - 1
    ) {

        currentIndex++;

        updateLesson();

        speakCurrent();

    }

}


function previousLetter() {

    if (currentIndex > 0) {

        currentIndex--;

        updateLesson();

        speakCurrent();

    }

}


/* =====================================================
   COMMON SPEECH
===================================================== */

function speak(text) {

    if (
        "speechSynthesis"
        in window
    ) {

        window.speechSynthesis.cancel();


        const speech =
            new SpeechSynthesisUtterance(text);


        speech.lang =
            "en-US";


        speech.rate =
            0.8;


        window.speechSynthesis.speak(
            speech
        );

    }

}


/* =====================================================
   PAGE CONTROL
===================================================== */

function hideAllPages() {

    document.getElementById("homePage")
        .classList.add("hidden");


    document.getElementById("lessonPage")
        .classList.add("hidden");


    document.getElementById("numbersPage")
        .classList.add("hidden");


    document.getElementById("numberDetailPage")
        .classList.add("hidden");


    document.getElementById("rainbowPage")
        .classList.add("hidden");


    document.getElementById("testMenu")
        .classList.add("hidden");


    document.getElementById("testPage")
        .classList.add("hidden");


    document.getElementById("resultPage")
        .classList.add("hidden");

}


function goHome() {

    hideAllPages();


    document.getElementById("homePage")
        .classList.remove("hidden");


    if (
        "speechSynthesis"
        in window
    ) {

        window.speechSynthesis.cancel();

    }

}


/* =====================================================
   NUMBERS 1 - 1000
===================================================== */

let selectedNumber = 1;


/* Number names */

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


function numberToWords(num) {

    if (num < 20) {

        return ones[num];

    }


    if (num < 100) {

        return (
            tens[Math.floor(num / 10)] +
            (num % 10 !== 0
                ? " " + ones[num % 10]
                : "")
        );

    }


    if (num < 1000) {

        return (
            ones[Math.floor(num / 100)] +
            " Hundred" +
            (num % 100 !== 0
                ? " " +
                  numberToWords(num % 100)
                : "")
        );

    }


    return "One Thousand";

}


/* Create 1 - 1000 */

function createNumbers() {

    const list =
        document.getElementById(
            "numberList"
        );


    list.innerHTML = "";


    for (
        let number = 1;
        number <= 1000;
        number++
    ) {

        const row =
            document.createElement("div");


        row.className =
            "numberRow";


        const value =
            document.createElement("div");


        value.className =
            "numberValue";


        value.innerText =
            number;


        const objects =
            document.createElement("div");


        objects.className =
            "numberObjects";


        if (number <= 20) {

            objects.innerText =
                "⚽ ".repeat(number);

        }
        else {

            objects.innerText =
                "⚽ × " + number;

        }


        const hear =
            document.createElement("div");


        hear.className =
            "numberHear";


        hear.innerText =
            "🔊";


        row.appendChild(value);

        row.appendChild(objects);

        row.appendChild(hear);


        row.onclick =
            function() {

                openNumber(number);

            };


        list.appendChild(row);

    }

}


createNumbers();


/* Open numbers page */

function openNumbers() {

    hideAllPages();


    document.getElementById("numbersPage")
        .classList.remove("hidden");

}


/* Open one number */

function openNumber(number) {

    selectedNumber = number;


    hideAllPages();


    document.getElementById(
        "numberDetailPage"
    ).classList.remove("hidden");


    document.getElementById(
        "bigNumber"
    ).innerText =
        number;


    document.getElementById(
        "numberWord"
    ).innerText =
        numberToWords(number);


    if (number <= 20) {

        document.getElementById(
            "numberObjects"
        ).innerText =
            "⚽ ".repeat(number);

    }
    else {

        document.getElementById(
            "numberObjects"
        ).innerText =
            "⚽ × " + number;

    }


    speakNumber();

}


/* Speak number */

function speakNumber() {

    speak(
        numberToWords(selectedNumber)
    );

}


/* =====================================================
   RAINBOW LETTERS
===================================================== */

const rainbowColors = [

    "#ff0000",
    "#ff7f00",
    "#ffd000",
    "#00a000",
    "#0088ff",
    "#4b0082",
    "#9400d3"

];


function createRainbowLetters() {

    const rainbowGrid =
        document.getElementById(
            "rainbowGrid"
        );


    alphabetData.forEach(
        function(item, index) {

            const letter =
                document.createElement("div");


            letter.className =
                "rainbowLetter";


            letter.innerText =
                item[0];


            letter.style.color =
                rainbowColors[
                    index %
                    rainbowColors.length
                ];


            letter.onclick =
                function() {

                    speak(
                        item[0] +
                        " for " +
                        item[1]
                    );

                };


            rainbowGrid.appendChild(
                letter
            );

        }
    );

}


createRainbowLetters();


function openRainbow() {

    hideAllPages();


    document.getElementById(
        "rainbowPage"
    ).classList.remove("hidden");

}


/* =====================================================
   TEST SYSTEM
===================================================== */

let testType = "";

let testQuestions = [];

let testPosition = 0;

let testScore = 0;


/* Test menu */

function openTestMenu() {

    hideAllPages();


    document.getElementById("testMenu")
        .classList.remove("hidden");

}


/* Start test */

function startTest(type) {

    testType = type;


    testPosition = 0;


    testScore = 0;


    /*
       Make copy of alphabet.

       Every letter appears only once.
    */

    testQuestions =
        [...alphabetData];


    /*
       Random order
    */

    testQuestions.sort(
        function() {

            return Math.random() - 0.5;

        }
    );


    hideAllPages();


    document.getElementById("testPage")
        .classList.remove("hidden");


    if (type === "capital") {

        document.getElementById(
            "testTitle"
        ).innerText =
            "🔠 Capital Letter Test";

    }
    else {

        document.getElementById(
            "testTitle"
        ).innerText =
            "🔡 Small Letter Test";

    }


    showQuestion();

}


/* Show question */

function showQuestion() {

    const current =
        testQuestions[testPosition];


    document.getElementById(
        "questionNumber"
    ).innerText =
        "Question " +
        (testPosition + 1) +
        " / " +
        testQuestions.length;


    if (testType === "capital") {

        document.getElementById(
            "testQuestion"
        ).innerText =
            current[0];

    }
    else {

        document.getElementById(
            "testQuestion"
        ).innerText =
            current[0].toLowerCase();

    }


    document.getElementById(
        "testMessage"
    ).innerText = "";


    createAnswers(current);

}


/* Create answers */

function createAnswers(correct) {

    const area =
        document.getElementById(
            "answerButtons"
        );


    area.innerHTML = "";


    let answers = [];


    const correctAnswer =
        testType === "capital"
            ? correct[0]
            : correct[0].toLowerCase();


    answers.push(correctAnswer);


    while (answers.length < 4) {

        const random =
            alphabetData[
                Math.floor(
                    Math.random() *
                    alphabetData.length
                )
            ];


        const value =
            testType === "capital"
                ? random[0]
                : random[0].toLowerCase();


        if (!answers.includes(value)) {

            answers.push(value);

        }

    }


    answers.sort(
        function() {

            return Math.random() - 0.5;

        }
    );


    answers.forEach(
        function(answer) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answerBtn";


            button.innerText =
                answer;


            button.onclick =
                function() {

                    checkAnswer(
                        answer,
                        correct
                    );

                };


            area.appendChild(button);

        }
    );

}


/* Check answer */

function checkAnswer(
    answer,
    correct
) {

    const correctAnswer =
        testType === "capital"
            ? correct[0]
            : correct[0].toLowerCase();


    const buttons =
        document.querySelectorAll(
            ".answerBtn"
        );


    buttons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    if (answer === correctAnswer) {

        testScore++;


        document.getElementById(
            "testMessage"
        ).innerText =
            "✅ Correct! Great Job! 🎉";

    }
    else {

        document.getElementById(
            "testMessage"
        ).innerText =
            "❌ Wrong! Correct answer is " +
            correctAnswer;

    }


    setTimeout(
        function() {

            testPosition++;


            if (
                testPosition <
                testQuestions.length
            ) {

                showQuestion();

            }
            else {

                showResult();

            }

        },
        1000
    );

}


/* =====================================================
   RESULT
===================================================== */

function showResult() {

    hideAllPages();


    document.getElementById(
        "resultPage"
    ).classList.remove("hidden");


    const total =
        testQuestions.length;


    const wrong =
        total - testScore;


    const percentage =
        Math.round(
            (testScore / total) * 100
        );


    document.getElementById(
        "finalScore"
    ).innerText =
        testScore +
        " / " +
        total;


    document.getElementById(
        "correctCount"
    ).innerText =
        testScore;


    document.getElementById(
        "wrongCount"
    ).innerText =
        wrong;


    document.getElementById(
        "percentage"
    ).innerText =
        percentage +
        "%";


    if (testType === "capital") {

        document.getElementById(
            "resultTestName"
        ).innerText =
            "🔠 Capital Letter Test";

    }
    else {

        document.getElementById(
            "resultTestName"
        ).innerText =
            "🔡 Small Letter Test";

    }


    if (percentage === 100) {

        document.getElementById(
            "resultMessage"
        ).innerText =
            "🏆 Perfect Score!";


        document.getElementById(
            "resultSubMessage"
        ).innerText =
            "🌟 Amazing! You know your alphabets very well!";

    }

    else if (percentage >= 80) {

        document.getElementById(
            "resultMessage"
        ).innerText =
            "🎉 Excellent Work!";


        document.getElementById(
            "resultSubMessage"
        ).innerText =
            "👏 Very good! Keep learning!";

    }

    else if (percentage >= 60) {

        document.getElementById(
            "resultMessage"
        ).innerText =
            "😊 Good Job!";


        document.getElementById(
            "resultSubMessage"
        ).innerText =
            "💪 Keep practicing!";

    }

    else {

        document.getElementById(
            "resultMessage"
        ).innerText =
            "🌱 Keep Practicing!";


        document.getElementById(
            "resultSubMessage"
        ).innerText =
            "❤️ Try again. You can do it!";

    }

}
