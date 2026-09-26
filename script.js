let stars = 0;

function openPage(pageName) {

    document.querySelector(".menu").style.display = "none";

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.style.display = "none";
    });

    document.getElementById(pageName).style.display = "block";

    if (pageName === "abc") {
        createAlphabet();
    }

    if (pageName === "numbers") {
        createNumbers();
    }

    if (pageName === "quiz") {
        nextQuestion();
    }
}


function goHome() {

    let pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.style.display = "none";
    });

    document.querySelector(".menu").style.display = "grid";
}


function speak(text) {

    let speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.8;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
}


/* =========================
   ABC LEARNING
========================= */

let alphabetData = [

    ["A", "Apple", "🍎"],
    ["B", "Ball", "⚽"],
    ["C", "Cat", "🐱"],
    ["D", "Dog", "🐶"],
    ["E", "Elephant", "🐘"],
    ["F", "Fish", "🐟"],
    ["G", "Grapes", "🍇"],
    ["H", "Hat", "🎩"],
    ["I", "Ice Cream", "🍦"],
    ["J", "Juice", "🧃"],
    ["K", "Kite", "🪁"],
    ["L", "Lion", "🦁"],
    ["M", "Monkey", "🐒"],
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
    ["Y", "Yo-Yo", "🪀"],
    ["Z", "Zebra", "🦓"]

];


function createAlphabet() {

    let box = document.getElementById("alphabetBox");

    box.innerHTML = "";

    alphabetData.forEach(function(item) {

        let letter = item[0];
        let word = item[1];
        let emoji = item[2];

        let card = document.createElement("div");

        card.className = "letterCard";

        card.innerHTML = `
            <div class="letter">${letter}</div>
            <div class="emoji">${emoji}</div>
            <div class="word">${word}</div>
        `;

        card.onclick = function() {

            speak(letter + " for " + word);

            addStar();

        };

        box.appendChild(card);

    });

}


/* =========================
   NUMBERS
========================= */

function createNumbers() {

    let box = document.getElementById("numberBox");

    box.innerHTML = "";

    for (let i = 1; i <= 100; i++) {

        let number = document.createElement("div");

        number.className = "number";

        number.innerHTML = i;

        number.onclick = function() {

            speak(String(i));

            addStar();

        };

        box.appendChild(number);

    }

}


/* =========================
   STARS
========================= */

function addStar() {

    stars++;

    document.getElementById("stars").innerText = stars;

}


/* =========================
   QUIZ
========================= */

let quizQuestions = [

    {
        question: "🍎 Which fruit is red?",
        answers: ["Apple", "Banana", "Grapes"],
        correct: "Apple"
    },

    {
        question: "🐶 Which animal says Woof?",
        answers: ["Cat", "Dog", "Lion"],
        correct: "Dog"
    },

    {
        question: "🔢 What comes after 2?",
        answers: ["1", "3", "5"],
        correct: "3"
    },

    {
        question: "🌈 Which color is the sky?",
        answers: ["Blue", "Green", "Black"],
        correct: "Blue"
    },

    {
        question: "🦁 Which animal is called the king of the jungle?",
        answers: ["Rabbit", "Lion", "Cow"],
        correct: "Lion"
    }

];


let currentQuestion = 0;


function nextQuestion() {

    let q = quizQuestions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    let answerBox = document.getElementById("answers");

    answerBox.innerHTML = "";

    document.getElementById("quizResult").innerText = "";

    q.answers.forEach(function(answer) {

        let button = document.createElement("button");

        button.innerText = answer;

        button.onclick = function() {

            checkAnswer(answer);

        };

        answerBox.appendChild(button);

    });

}


function checkAnswer(answer) {

    let q = quizQuestions[currentQuestion];

    if (answer === q.correct) {

        document.getElementById("quizResult").innerText =
            "🎉 Correct! ⭐ Great Job!";

        addStar();

        speak("Correct! Great job!");

    } else {

        document.getElementById("quizResult").innerText =
            "❌ Wrong! Try Again!";

        speak("Try again!");

    }

}


function nextQuestionAfterAnswer() {

    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {
        currentQuestion = 0;
    }

    nextQuestion();

}
