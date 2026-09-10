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
   ALPHABET HOME BOXES
===================================================== */

const alphabetGrid =
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

        alphabetGrid.appendChild(box);

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
        (currentIndex + 1) + " / 26";

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
   SPEECH
===================================================== */

function speak(text) {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

        const speech =
            new SpeechSynthesisUtterance(text);

        speech.lang = "en-US";

        speech.rate = 0.8;

        window.speechSynthesis.speak(speech);

    }

}


/* =====================================================
   PAGE CONTROL
===================================================== */

function hideAllPages() {

    const pages = [

        "homePage",
        "lessonPage",
        "numbersPage",
        "numberDetailPage",
        "alphabetTestMenu",
        "alphabetTestPage",
        "numberTestPage",
        "resultPage"

    ];


    pages.forEach(
        function(id) {

            document.getElementById(id)
                .classList.add("hidden");

        }
    );

}


function goHome() {

    hideAllPages();

    document.getElementById("homePage")
        .classList.remove("hidden");

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }

}


/* =====================================================
   NUMBER WORDS
===================================================== */

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
            (
                num % 10 !== 0
                ? " " + ones[num % 10]
                : ""
            )
        );

    }


    if (num < 1000) {

        return (
            ones[Math.floor(num / 100)] +
            " Hundred" +
            (
                num % 100 !== 0
                ? " " + numberToWords(num % 100)
                : ""
            )
        );

    }


    return "One Thousand";

}


/* =====================================================
   NUMBERS
===================================================== */

let selectedNumber = 1;


function createNumbers() {

    const list =
        document.getElementById("numberList");

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


function openNumbers() {

    hideAllPages();

    document.getElementById("numbersPage")
        .classList.remove("hidden");

}


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


function speakNumber() {

    speak(
        numberToWords(selectedNumber)
    );

}


function speakNumberList() {

    speak(
        "Numbers from one to one thousand"
    );

}


/* =====================================================
   ALPHABET TEST
===================================================== */

let alphabetTestType = "";

let alphabetQuestions = [];

let alphabetPosition = 0;

let alphabetScore = 0;


/* Open test menu */

function openAlphabetTestMenu() {

    hideAllPages();

    document.getElementById(
        "alphabetTestMenu"
    ).classList.remove("hidden");

}


/* Start Alphabet Test */

function startAlphabetTest(type) {

    alphabetTestType = type;

    alphabetPosition = 0;

    alphabetScore = 0;


    /*
       Copy all 26 letters.

       Therefore NO LETTER CAN REPEAT.
    */

    alphabetQuestions =
        [...alphabetData];


    /*
       Random order
    */

    shuffleArray(alphabetQuestions);


    hideAllPages();

    document.getElementById(
        "alphabetTestPage"
    ).classList.remove("hidden");


    if (type === "capital") {

        document.getElementById(
            "alphabetTestTitle"
        ).innerText =
            "🔠 Capital Letter Test";

    }
    else {

        document.getElementById(
            "alphabetTestTitle"
        ).innerText =
            "🔡 Small Letter Test";

    }


    showAlphabetQuestion();

}


function showAlphabetQuestion() {

    const current =
        alphabetQuestions[alphabetPosition];


    document.getElementById(
        "alphabetQuestionNumber"
    ).innerText =
        "Question " +
        (alphabetPosition + 1) +
        " / 26";


    if (alphabetTestType === "capital") {

        document.getElementById(
            "alphabetQuestion"
        ).innerText =
            current[0];

    }
    else {

        document.getElementById(
            "alphabetQuestion"
        ).innerText =
            current[0].toLowerCase();

    }


    document.getElementById(
        "alphabetTestMessage"
    ).innerText = "";


    createAlphabetAnswers(current);

}


/* Alphabet answer buttons */

function createAlphabetAnswers(correct) {

    const area =
        document.getElementById(
            "alphabetAnswers"
        );


    area.innerHTML = "";


    let answers = [];


    const correctAnswer =
        alphabetTestType === "capital"
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
            alphabetTestType === "capital"
            ? random[0]
            : random[0].toLowerCase();


        if (!answers.includes(value)) {

            answers.push(value);

        }

    }


    shuffleArray(answers);


    answers.forEach(
        function(answer) {

            const button =
                document.createElement("button");

            button.className =
                "answerButton";

            button.innerText =
                answer;


            button.onclick =
                function() {

                    checkAlphabetAnswer(
                        answer,
                        correctAnswer
                    );

                };


            area.appendChild(button);

        }
    );

}


function checkAlphabetAnswer(
    answer,
    correctAnswer
) {

    const buttons =
        document.querySelectorAll(
            "#alphabetAnswers .answerButton"
        );


    buttons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    if (answer === correctAnswer) {

        alphabetScore++;

        document.getElementById(
            "alphabetTestMessage"
        ).innerText =
            "✅ Correct! 🎉";

    }
    else {

        document.getElementById(
            "alphabetTestMessage"
        ).innerText =
            "❌ Wrong! Correct answer: " +
            correctAnswer;

    }


    setTimeout(
        function() {

            alphabetPosition++;


            if (
                alphabetPosition <
                alphabetQuestions.length
            ) {

                showAlphabetQuestion();

            }
            else {

                showResult(
                    "Alphabet Test",
                    alphabetScore,
                    alphabetQuestions.length
                );

            }

        },
        900
    );

}


/* =====================================================
   NUMBER TEST
===================================================== */

let numberQuestions = [];

let numberPosition = 0;

let numberScore = 0;

const NUMBER_TEST_TOTAL = 20;


/* Start Number Test */

function startNumberTest() {

    numberPosition = 0;

    numberScore = 0;


    /*
       Create 1-1000 list.
    */

    numberQuestions = [];


    for (
        let i = 1;
        i <= 1000;
        i++
    ) {

        numberQuestions.push(i);

    }


    /*
       Shuffle 1-1000.

       First 20 are selected.

       No number repeats.
    */

    shuffleArray(numberQuestions);


    numberQuestions =
        numberQuestions.slice(
            0,
            NUMBER_TEST_TOTAL
        );


    hideAllPages();


    document.getElementById(
        "numberTestPage"
    ).classList.remove("hidden");


    showNumberQuestion();

}


function showNumberQuestion() {

    const current =
        numberQuestions[numberPosition];


    document.getElementById(
        "numberQuestionNumber"
    ).innerText =
        "Question " +
        (numberPosition + 1) +
        " / " +
        NUMBER_TEST_TOTAL;


    document.getElementById(
        "numberQuestion"
    ).innerText =
        current;


    document.getElementById(
        "numberTestMessage"
    ).innerText = "";


    createNumberAnswers(current);

}


/* Create number choices */

function createNumberAnswers(correct) {

    const area =
        document.getElementById(
            "numberAnswers"
        );


    area.innerHTML = "";


    let answers = [];


    answers.push(correct);


    while (answers.length < 4) {

        const random =
            Math.floor(
                Math.random() * 1000
            ) + 1;


        if (!answers.includes(random)) {

            answers.push(random);

        }

    }


    shuffleArray(answers);


    answers.forEach(
        function(answer) {

            const button =
                document.createElement("button");

            button.className =
                "answerButton";

            button.innerText =
                answer;


            button.onclick =
                function() {

                    checkNumberAnswer(
                        answer,
                        correct
                    );

                };


            area.appendChild(button);

        }
    );

}


function checkNumberAnswer(
    answer,
    correct
) {

    const buttons =
        document.querySelectorAll(
            "#numberAnswers .answerButton"
        );


    buttons.forEach(
        function(button) {

            button.disabled = true;

        }
    );


    if (answer === correct) {

        numberScore++;

        document.getElementById(
            "numberTestMessage"
        ).innerText =
            "✅ Correct! 🌟";

    }
    else {

        document.getElementById(
            "numberTestMessage"
        ).innerText =
            "❌ Wrong! Correct answer: " +
            correct;

    }


    setTimeout(
        function() {

            numberPosition++;


            if (
                numberPosition <
                numberQuestions.length
            ) {

                showNumberQuestion();

            }
            else {

                showResult(
                    "Number Test",
                    numberScore,
                    numberQuestions.length
                );

            }

        },
        900
    );

}


/* =====================================================
   RESULT
===================================================== */

let lastTestFunction = null;


function showResult(
    testName,
    score,
    total
) {

    hideAllPages();


    document.getElementById(
        "resultPage"
    ).classList.remove("hidden");


    const wrong =
        total - score;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    document.getElementById(
        "resultTestName"
    ).innerText =
        "📝 " + testName;


    document.getElementById(
        "finalScore"
    ).innerText =
        score + " / " + total;


    document.getElementById(
        "correctCount"
    ).innerText =
        score;


    document.getElementById(
        "wrongCount"
    ).innerText =
        wrong;


    document.getElementById(
        "percentage"
    ).innerText =
        percentage + "%";


    if (percentage === 100) {

        document.getElementById(
            "resultMessage"
        ).innerText =
            "🏆 Perfect Score!";


        document.getElementById(
            "resultSubMessage"
        ).innerText =
            "🌟 Amazing! You are a Super Kid!";

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
            "❤️ Don't give up. Try again!";

    }


    if (testName === "Alphabet Test") {

        lastTestFunction =
            function() {

                startAlphabetTest(
                    alphabetTestType
                );

            };

    }
    else {

        lastTestFunction =
            startNumberTest;

    }

}


/* Try Again */

function restartLastTest() {

    if (lastTestFunction) {

        lastTestFunction();

    }

}


/* =====================================================
   SHUFFLE
===================================================== */

function shuffleArray(array) {

    /*
       Fisher-Yates Shuffle

       This properly randomizes the questions
       and does NOT duplicate them.
    */

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );


        [
            array[i],
            array[j]
        ] =
        [
            array[j],
            array[i]
        ];

    }

}
