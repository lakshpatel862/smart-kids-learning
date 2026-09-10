/* =========================
   ALPHABET DATA
========================= */

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


/* =========================
   CREATE ALPHABET BOXES
========================= */

const grid =
    document.getElementById("alphabetGrid");


alphabetData.forEach(function(item, index) {

    const box =
        document.createElement("div");


    box.className =
        "letterBox";


    box.innerText =
        item[0];


    box.onclick = function() {

        openLesson(index);

    };


    grid.appendChild(box);

});


/* =========================
   OPEN LESSON
========================= */

function openLesson(index) {

    currentIndex = index;


    document.getElementById("homePage")
        .classList.add("hidden");


    document.getElementById("lessonPage")
        .classList.remove("hidden");


    updateLesson();


    speakCurrent();

}


/* =========================
   UPDATE LESSON
========================= */

function updateLesson() {

    const data =
        alphabetData[currentIndex];


    const letter =
        data[0];


    const word =
        data[1];


    const picture =
        data[2];


    document.getElementById("letter")
        .innerText = letter;


    document.getElementById("word")
        .innerText = word;


    document.getElementById("bigLetter")
        .innerText = letter;


    document.getElementById("smallLetter")
        .innerText =
        letter.toLowerCase();


    document.getElementById("picture")
        .innerText = picture;


    document.getElementById("wordText")
        .innerText = word;


    document.getElementById("progress")
        .innerText =
        (currentIndex + 1) + " / 26";

}


/* =========================
   SPEAK
========================= */

function speakCurrent() {

    const data =
        alphabetData[currentIndex];


    const sentence =
        data[0] + " for " + data[1];


    const speech =
        new SpeechSynthesisUtterance(sentence);


    speech.lang =
        "en-US";


    speech.rate =
        0.8;


    speech.pitch =
        1.2;


    window.speechSynthesis.cancel();


    window.speechSynthesis.speak(speech);

}


/* =========================
   NEXT
========================= */

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


/* =========================
   PREVIOUS
========================= */

function previousLetter() {

    if (currentIndex > 0) {

        currentIndex--;

        updateLesson();

        speakCurrent();

    }

}


/* =========================
   HOME
========================= */

function goHome() {

    document.getElementById("lessonPage")
        .classList.add("hidden");


    document.getElementById("testMenu")
        .classList.add("hidden");


    document.getElementById("testPage")
        .classList.add("hidden");


    document.getElementById("resultPage")
        .classList.add("hidden");


    document.getElementById("homePage")
        .classList.remove("hidden");


    window.speechSynthesis.cancel();

}


/* =================================================
   TEST SYSTEM
================================================= */


let testType = "";

let testQuestions = [];

let testPosition = 0;

let testScore = 0;


/* =========================
   OPEN TEST MENU
========================= */

function openTestMenu() {

    document.getElementById("homePage")
        .classList.add("hidden");


    document.getElementById("lessonPage")
        .classList.add("hidden");


    document.getElementById("testPage")
        .classList.add("hidden");


    document.getElementById("resultPage")
        .classList.add("hidden");


    document.getElementById("testMenu")
        .classList.remove("hidden");

}


/* =========================
   START TEST
========================= */

function startTest(type) {

    testType = type;


    testPosition = 0;


    testScore = 0;


    /*
       Copy all 26 alphabets.

       Because every question is used only once,
       there will be NO repeated question.
    */

    testQuestions =
        [...alphabetData];


    /*
       Randomize question order
    */

    testQuestions.sort(
        function() {

            return Math.random() - 0.5;

        }
    );


    document.getElementById("testMenu")
        .classList.add("hidden");


    document.getElementById("testPage")
        .classList.remove("hidden");


    if (type === "capital") {

        document.getElementById("testTitle")
            .innerText =
            "🔠 Capital Letter Test";

    }
    else {

        document.getElementById("testTitle")
            .innerText =
            "🔡 Small Letter Test";

    }


    showQuestion();

}


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    const current =
        testQuestions[testPosition];


    document.getElementById("questionNumber")
        .innerText =
        "Question " +
        (testPosition + 1) +
        " / " +
        testQuestions.length;


    if (testType === "capital") {

        document.getElementById("testQuestion")
            .innerText =
            current[0];

    }
    else {

        document.getElementById("testQuestion")
            .innerText =
            current[0].toLowerCase();

    }


    document.getElementById("testMessage")
        .innerText = "";


    createAnswers(current);

}


/* =========================
   CREATE ANSWERS
========================= */

function createAnswers(correct) {

    const answerArea =
        document.getElementById("answerButtons");


    answerArea.innerHTML = "";


    let answers = [];


    /* Correct answer */

    if (testType === "capital") {

        answers.push(correct[0]);

    }
    else {

        answers.push(
            correct[0].toLowerCase()
        );

    }


    /*
       Add 3 different wrong answers
    */

    while (answers.length < 4) {

        const random =
            alphabetData[
                Math.floor(
                    Math.random() *
                    alphabetData.length
                )
            ];


        let value;


        if (testType === "capital") {

            value = random[0];

        }
        else {

            value =
                random[0].toLowerCase();

        }


        if (!answers.includes(value)) {

            answers.push(value);

        }

    }


    /*
       Randomize answer buttons
    */

    answers.sort(
        function() {

            return Math.random() - 0.5;

        }
    );


    answers.forEach(function(answer) {

        const button =
            document.createElement("button");


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


        answerArea.appendChild(button);

    });

}


/* =========================
   CHECK ANSWER
========================= */

function checkAnswer(
    answer,
    correct
) {

    const correctAnswer =
        testType === "capital"
            ? correct[0]
            : correct[0].toLowerCase();


    /*
       Disable all buttons
       so child cannot click twice.
    */

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


    /*
       Wait 1 second,
       then next question.
    */

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


/* =========================
   SHOW RESULT
========================= */

function showResult() {

    document.getElementById("testPage")
        .classList.add("hidden");


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


    document.getElementById("finalScore")
        .innerText =
        testScore + " / " + total;


    document.getElementById("correctCount")
        .innerText =
        testScore;


    document.getElementById("wrongCount")
        .innerText =
        wrong;


    document.getElementById("percentage")
        .innerText =
        percentage + "%";


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


    /* =========================
       PERFORMANCE MESSAGE
    ========================= */


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
            "👏 Very good! Keep learning and practicing!";

    }


    else if (percentage >= 60) {

        document.getElementById(
            "resultMessage"
        ).innerText =
            "😊 Good Job!";


        document.getElementById(
            "resultSubMessage"
        ).innerText =
            "💪 You are doing great. Practice a little more!";

    }


    else {

        document.getElementById(
            "resultMessage"
        ).innerText =
            "🌱 Keep Practicing!";


        document.getElementById(
            "resultSubMessage"
        ).innerText =
            "❤️ Don't worry. Try again and you will improve!";

    }

}
