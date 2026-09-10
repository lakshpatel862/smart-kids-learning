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
    ["P","Penguin","🐧"],
    ["Q","Queen","👑"],
    ["R","Rainbow","🌈"],
    ["S","Sun","☀️"],
    ["T","Tree","🌳"],
    ["U","Umbrella","☂️"],
    ["V","Van","🚐"],
    ["W","Watermelon","🍉"],
    ["X","Xylophone","🎵"],
    ["Y","Yacht","⛵"],
    ["Z","Zebra","🦓"]

];


let currentIndex = 0;


/* =====================================================
   ALPHABET HOME
===================================================== */

const alphabetGrid =
    document.getElementById("alphabetGrid");


alphabetData.forEach(
    function(item,index) {

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
   ALPHABET LESSON
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

    if (
        "speechSynthesis" in window
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

    const pages = [

        "homePage",
        "lessonPage",
        "numbersPage",
        "numberDetailPage",
        "tablesPage",
        "alphabetTestMenu",
        "alphabetTestPage",
        "numberTestPage",
        "multiplicationTestMenu",
        "multiplicationTestPage",
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


    if (
        "speechSynthesis" in window
    ) {

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
                ? " " +
                  numberToWords(num % 100)
                : ""
            )
        );

    }


    return "One Thousand";

}


/* =====================================================
   NUMBERS 1 - 1000
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
    )
    .classList.remove("hidden");


    document.getElementById(
        "bigNumber"
    )
    .innerText =
        number;


    document.getElementById(
        "numberWord"
    )
    .innerText =
        numberToWords(number);


    if (number <= 20) {

        document.getElementById(
            "numberObjects"
        )
        .innerText =
            "⚽ ".repeat(number);

    }
    else {

        document.getElementById(
            "numberObjects"
        )
        .innerText =
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
   MULTIPLICATION TABLES 1 - 100
===================================================== */

function createTableButtons() {

    const area =
        document.getElementById(
            "tableButtons"
        );


    area.innerHTML = "";


    for (
        let number = 1;
        number <= 100;
        number++
    ) {

        const button =
            document.createElement("button");


        button.className =
            "tableNumberButton";


        button.innerText =
            "Table " + number;


        button.onclick =
            function() {

                showTable(number);

            };


        area.appendChild(button);

    }

}


createTableButtons();


function openTables() {

    hideAllPages();


    document.getElementById("tablesPage")
        .classList.remove("hidden");

}


function showTable(number) {

    const display =
        document.getElementById(
            "tableDisplay"
        );


    const title =
        document.getElementById(
            "selectedTableTitle"
        );


    const table =
        document.getElementById(
            "selectedTable"
        );


    title.innerText =
        "✖️ Table of " + number;


    table.innerHTML = "";


    for (
        let i = 1;
        i <= 10;
        i++
    ) {

        const line =
            document.createElement("div");


        line.className =
            "tableLine";


        line.innerText =
            number +
            " × " +
            i +
            " = " +
            (number * i);


        line.onclick =
            function() {

                speak(
                    number +
                    " times " +
                    i +
                    " equals " +
                    (number * i)
                );

            };


        table.appendChild(line);

    }


    display.classList.remove("hidden");


    display.scrollIntoView({
        behavior: "smooth"
    });

}


function closeTable() {

    document.getElementById(
        "tableDisplay"
    )
    .classList.add("hidden");

}


/* =====================================================
   ALPHABET TEST
===================================================== */

let alphabetTestType = "";

let alphabetQuestions = [];

let alphabetPosition = 0;

let alphabetScore = 0;


/* Open menu */

function openAlphabetTestMenu() {

    hideAllPages();


    document.getElementById(
        "alphabetTestMenu"
    )
    .classList.remove("hidden");

}


/* Start */

function startAlphabetTest(type) {

    alphabetTestType = type;

    alphabetPosition = 0;

    alphabetScore = 0;


    alphabetQuestions =
        [...alphabetData];


    shuffleArray(
        alphabetQuestions
    );


    hideAllPages();


    document.getElementById(
        "alphabetTestPage"
    )
    .classList.remove("hidden");


    if (type === "capital") {

        document.getElementById(
            "alphabetTestTitle"
        )
        .innerText =
            "🔠 Capital Letter Test";

    }
    else {

        document.getElementById(
            "alphabetTestTitle"
        )
        .innerText =
            "🔡 Small Letter Test";

    }


    showAlphabetQuestion();

}


function showAlphabetQuestion() {

    const current =
        alphabetQuestions[
            alphabetPosition
        ];


    document.getElementById(
        "alphabetQuestionNumber"
    )
    .innerText =
        "Question " +
        (alphabetPosition + 1) +
        " / 26";


    if (
        alphabetTestType === "capital"
    ) {

        document.getElementById(
            "alphabetQuestion"
        )
        .innerText =
            current[0];

    }
    else {

        document.getElementById(
            "alphabetQuestion"
        )
        .innerText =
            current[0].toLowerCase();

    }


    document.getElementById(
        "alphabetTestMessage"
    )
    .innerText = "";


    createAlphabetAnswers(
        current
    );

}


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


    while (
        answers.length < 4
    ) {

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


        if (
            !answers.includes(value)
        ) {

            answers.push(value);

        }

    }


    shuffleArray(answers);


    answers.forEach(
        function(answer) {

            const button =
                document.createElement(
                    "button"
                );


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


    if (
        answer === correctAnswer
    ) {

        alphabetScore++;


        document.getElementById(
            "alphabetTestMessage"
        )
        .innerText =
            "✅ Correct! 🎉";

    }
    else {

        document.getElementById(
            "alphabetTestMessage"
        )
        .innerText =
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


function startNumberTest() {

    numberPosition = 0;

    numberScore = 0;


    numberQuestions = [];


    for (
        let i = 1;
        i <= 1000;
        i++
    ) {

        numberQuestions.push(i);

    }


    shuffleArray(numberQuestions);


    numberQuestions =
        numberQuestions.slice(
            0,
            NUMBER_TEST_TOTAL
        );


    hideAllPages();


    document.getElementById(
        "numberTestPage"
    )
    .classList.remove("hidden");


    showNumberQuestion();

}


function showNumberQuestion() {

    const current =
        numberQuestions[numberPosition];


    document.getElementById(
        "numberQuestionNumber"
    )
    .innerText =
        "Question " +
        (numberPosition + 1) +
        " / " +
        NUMBER_TEST_TOTAL;


    document.getElementById(
        "numberQuestion"
    )
    .innerText =
        current;


    document.getElementById(
        "numberTestMessage"
    )
    .innerText = "";


    createNumberAnswers(
        current
    );

}


function createNumberAnswers(correct) {

    const area =
        document.getElementById(
            "numberAnswers"
        );


    area.innerHTML = "";


    let answers = [];


    answers.push(correct);


    while (
        answers.length < 4
    ) {

        const random =
            Math.floor(
                Math.random() * 1000
            ) + 1;


        if (
            !answers.includes(random)
        ) {

            answers.push(random);

        }

    }


    shuffleArray(answers);


    answers.forEach(
        function(answer) {

            const button =
                document.createElement(
                    "button"
                );


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


    if (
        answer === correct
    ) {

        numberScore++;


        document.getElementById(
            "numberTestMessage"
        )
        .innerText =
            "✅ Correct! 🌟";

    }
    else {

        document.getElementById(
            "numberTestMessage"
        )
        .innerText =
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
   MULTIPLICATION TEST
===================================================== */

let multiplicationQuestions = [];

let multiplicationPosition = 0;

let multiplicationScore = 0;

let multiplicationMin = 1;

let multiplicationMax = 10;

const MULTIPLICATION_TEST_TOTAL = 20;


/*
   Start multiplication test.

   Example:
   1 × 1 = □
*/

function startMultiplicationTest(
    min,
    max
) {

    multiplicationMin = min;

    multiplicationMax = max;

    multiplicationPosition = 0;

    multiplicationScore = 0;


    multiplicationQuestions = [];


    /*
       Make ALL possible questions.

       Example for 1-10:
       1×1
       1×2
       ...
       10×10

       Every question is unique.
    */

    for (
        let a = min;
        a <= max;
        a++
    ) {

        for (
            let b = 1;
            b <= 10;
            b++
        ) {

            multiplicationQuestions.push(
                {
                    a: a,
                    b: b,
                    answer: a * b
                }
            );

        }

    }


    /*
       Randomize questions.
    */

    shuffleArray(
        multiplicationQuestions
    );


    /*
       Only first 20 questions
       are used in one test.

       Since the full question list
       has unique combinations,
       NO question repeats.
    */

    multiplicationQuestions =
        multiplicationQuestions.slice(
            0,
            MULTIPLICATION_TEST_TOTAL
        );


    hideAllPages();


    document.getElementById(
        "multiplicationTestPage"
    )
    .classList.remove("hidden");


    showMultiplicationQuestion();

}


/* Show multiplication question */

function showMultiplicationQuestion() {

    const current =
        multiplicationQuestions[
            multiplicationPosition
        ];


    document.getElementById(
        "multiplicationQuestionNumber"
    )
    .innerText =
        "Question " +
        (multiplicationPosition + 1) +
        " / " +
        MULTIPLICATION_TEST_TOTAL;


    /*
       Blank is kept ONLY in test.
    */

    document.getElementById(
        "multiplicati
