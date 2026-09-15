/* =====================================================
                KIDS LEARNING WORLD
                 COMPLETE SCRIPT
===================================================== */


/* ================= PAGE SYSTEM ================= */

const pages = [
    "homePage",
    "alphabetPage",
    "numberPage",
    "animalPage",
    "testMenuPage",
    "testPage",
    "resultPage"
];

function showPage(id) {

    pages.forEach(function(page) {

        const element = document.getElementById(page);

        if (element) {
            element.classList.add("hidden");
        }

    });

    const selected = document.getElementById(id);

    if (selected) {
        selected.classList.remove("hidden");
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
    ["T", "Tree", "🌳"],
    ["U", "Umbrella", "☂️"],
    ["V", "Van", "🚐"],
    ["W", "Watermelon", "🍉"],
    ["X", "Xylophone", "🎵"],
    ["Y", "Yo-Yo", "🪀"],
    ["Z", "Zebra", "🦓"]

];

let alphabetIndex = 0;
let alphabetFirstOpen = true;


function openAlphabet() {

    showPage("alphabetPage");

    alphabetIndex = 0;
    alphabetFirstOpen = true;

    showAlphabet();
}


function showAlphabet() {

    const item = alphabetData[alphabetIndex];

    document.getElementById("letter").textContent = item[0];
    document.getElementById("picture").textContent = item[2];
    document.getElementById("word").textContent = item[1];

    document.getElementById("sentence").textContent =
        item[0] + " for " + item[1];

    document.getElementById("alphabetProgress").textContent =
        item[0] + " / Z";

    const letter = document.getElementById("letter");

    letter.style.animation = "none";
    void letter.offsetWidth;
    letter.style.animation = "drop .7s";

    /*
       Automatically speak once whenever
       a new alphabet opens.
    */

    setTimeout(function() {
        speakAlphabet();
    }, 600);
}


function speakAlphabet() {

    if (!("speechSynthesis" in window)) {
        return;
    }

    speechSynthesis.cancel();

    const item = alphabetData[alphabetIndex];

    const speech =
        new SpeechSynthesisUtterance(
            item[0] + " for " + item[1]
        );

    speech.rate = 0.7;
    speech.pitch = 1.15;
    speech.volume = 1;

    speechSynthesis.speak(speech);
}


function nextAlphabet() {

    if (alphabetIndex < alphabetData.length - 1) {

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


/* ================= NUMBERS ================= */

let currentNumber = 1;


function openNumbers() {

    showPage("numberPage");

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

    if (number < 10) {
        return ones[number];
    }

    if (number < 20) {
        return teens[number - 10];
    }

    if (number < 100) {

        return tens[Math.floor(number / 10)] +
            (number % 10 ?
            " " + ones[number % 10] :
            "");

    }

    if (number < 1000) {

        return ones[Math.floor(number / 100)] +
            " Hundred" +
            (number % 100 ?
            " " + numberToWords(number % 100) :
            "");

    }

    return "One Thousand";
}


function showNumber() {

    document.getElementById("bigNumber").textContent =
        currentNumber;

    document.getElementById("numberName").textContent =
        numberToWords(currentNumber);

    document.getElementById("numberProgress").textContent =
        currentNumber + " / 1000";

    const balls = document.getElementById("balls");

    balls.textContent = "";

    const count = Math.min(currentNumber, 20);

    for (let i = 0; i < count; i++) {
        balls.textContent += "⚽ ";
    }

    const numberElement =
        document.getElementById("bigNumber");

    numberElement.style.animation = "none";
    void numberElement.offsetWidth;
    numberElement.style.animation = "drop .7s";

    setTimeout(function() {
        speakNumber();
    }, 600);
}


function speakNumber() {

    if (!("speechSynthesis" in window)) {
        return;
    }

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(
            numberToWords(currentNumber)
        );

    speech.rate = .7;
    speech.pitch = 1.1;

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


/* ================= ANIMALS ================= */

const animals = [

    ["Lion", "🦁", "Roar!"],
    ["Tiger", "🐯", "Roar!"],
    ["Elephant", "🐘", "Trumpet!"],
    ["Dog", "🐶", "Woof Woof!"],
    ["Cat", "🐱", "Meow!"],
    ["Cow", "🐮", "Moo!"],
    ["Horse", "🐴", "Neigh!"],
    ["Goat", "🐐", "Bleat!"],
    ["Sheep", "🐑", "Baa Baa!"],
    ["Monkey", "🐵", "Ooh Ooh Aah Aah!"],
    ["Rabbit", "🐰", "Rabbit!"],
    ["Bear", "🐻", "Growl!"],
    ["Panda", "🐼", "Panda!"],
    ["Fox", "🦊", "Fox!"],
    ["Wolf", "🐺", "Howl!"],
    ["Pig", "🐷", "Oink!"],
    ["Chicken", "🐔", "Cluck Cluck!"],
    ["Duck", "🦆", "Quack Quack!"],
    ["Frog", "🐸", "Ribbit!"],
    ["Snake", "🐍", "Hiss!"],
    ["Penguin", "🐧", "Penguin!"],
    ["Owl", "🦉", "Hoot Hoot!"],
    ["Parrot", "🦜", "Hello!"],
    ["Fish", "🐟", "Blub Blub!"],
    ["Dolphin", "🐬", "Dolphin!"],
    ["Whale", "🐳", "Whale!"],
    ["Octopus", "🐙", "Octopus!"],
    ["Butterfly", "🦋", "Butterfly!"],
    ["Bee", "🐝", "Buzz Buzz!"],
    ["Turtle", "🐢", "Turtle!"]

];


function openAnimals() {

    showPage("animalPage");

    createAnimals();
}


function createAnimals() {

    const grid =
        document.getElementById("animalGrid");

    grid.innerHTML = "";

    animals.forEach(function(animal) {

        const button =
            document.createElement("button");

        button.className = "animalCard";

        button.innerHTML =
            '<div class="animalEmoji">' +
            animal[1] +
            '</div>' +
            '<div class="animalName">' +
            animal[0] +
            '</div>';

        button.addEventListener("click", function() {

            speakAnimal(animal);

        });

        grid.appendChild(button);

    });
}


function speakAnimal(animal) {

    if (!("speechSynthesis" in window)) {
        return;
    }

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(
            animal[0] + ". " + animal[2]
        );

    speech.rate = .75;
    speech.pitch = 1.1;

    speechSynthesis.speak(speech);
}


/* ================= TEST SYSTEM ================= */

let testType = "alphabet";

let questions = [];
let questionIndex = 0;

let score = 0;
let answered = false;
let selectedAnswer = null;

let changeCount = 0;

const MAX_CHANGES = 3;


/* ================= TEST MENU ================= */

function openTestMenu() {

    showPage("testMenuPage");

}


function startAlphabetTest() {

    testType = "alphabet";

    createAlphabetQuestions();

    startTest();

}


function startNumberTest() {

    testType = "number";

    createNumberQuestions();

    startTest();

}


/* ================= ALPHABET QUESTIONS ================= */

function createAlphabetQuestions() {

    questions = [];

    const shuffled =
        [...alphabetData]
        .sort(() => Math.random() - 0.5)
        .slice(0, 20);

    shuffled.forEach(function(item) {

        const correct = item[0].toLowerCase();

        let options = [correct];

        const letters =
            "abcdefghijklmnopqrstuvwxyz";

        while (options.length < 4) {

            const random =
                letters[Math.floor(
                    Math.random() * letters.length
                )];

            if (!options.includes(random)) {
                options.push(random);
            }

        }

        options =
            options.sort(() => Math.random() - .5);

        questions.push({

            question:
                "Which small letter matches " +
                item[0] + "?",

            visual:
                item[0],

            correct: correct,

            options: options

        });

    });

}


/* ================= NUMBER QUESTIONS ================= */

function createNumberQuestions() {

    questions = [];

    const used = new Set();

    while (questions.length < 20) {

        const number =
            Math.floor(Math.random() * 1000) + 1;

        if (used.has(number)) {
            continue;
        }

        used.add(number);

        const correct = numberToWords(number);

        let options = [correct];

        while (options.length < 4) {

            const randomNumber =
                Math.floor(Math.random() * 1000) + 1;

            const randomWord =
                numberToWords(randomNumber);

            if (!options.includes(randomWord)) {
                options.push(randomWord);
            }

        }

        options =
            options.sort(() => Math.random() - .5);

        questions.push({

            question:
                "Which number is this?",

            visual:
                number,

            correct: correct,

            options: options

        });

    }

}


/* ================= START TEST ================= */

function startTest() {

    questionIndex = 0;
    score = 0;

    answered = false;
    selectedAnswer = null;

    changeCount = 0;

    showPage("testPage");

    document.getElementById("testTitle").textContent =
        testType === "alphabet"
        ? "📝 Alphabet Test"
        : "📝 Number Test";

    showQuestion();

}


/* ================= SHOW QUESTION ================= */

function showQuestion() {

    const q =
        questions[questionIndex];

    answered = false;
    selectedAnswer = null;
    changeCount = 0;

    document.getElementById("questionNumber")
        .textContent =
        questionIndex + 1;

    document.getElementById("liveMarks")
        .textContent = score;

    document.getElementById("questionText")
        .textContent = q.question;

    document.getElementById("questionVisual")
        .textContent = q.visual;

    const area =
        document.getElementById("answerArea");

    area.innerHTML = "";

    document.getElementById("feedback")
        .textContent = "";

    document.getElementById("feedback")
        .className = "feedback";

    q.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.className = "answerBtn";

        button.textContent = option;

        button.addEventListener("click", function() {

            selectAnswer(
                option,
                button
            );

        });

        area.appendChild(button);

    });

}


/* ================= SELECT ANSWER ================= */

function selectAnswer(option, button) {

    if (answered) {
        return;
    }

    /*
       First answer = normal.
       User can change answer up to 3 times.
    */

    if (selectedAnswer === null) {

        selectedAnswer = option;

        checkTemporaryAnswer(option);

        button.classList.add("selected");

        return;
    }


    if (changeCount >= MAX_CHANGES) {

        showFeedback(
            "⚠️ You used all 3 answer changes!",
            false
        );

        return;
    }


    changeCount++;

    selectedAnswer = option;

    document
        .querySelectorAll(".answerBtn")
        .forEach(function(btn) {
            btn.classList.remove("selected");
        });

    button.classList.add("selected");

    checkTemporaryAnswer(option);
}


/* ================= TEMPORARY CHECK ================= */

function checkTemporaryAnswer(option) {

    const q =
        questions[questionIndex];

    if (option === q.correct) {

        showFeedback(
            "✅ Correct! Great Job! 🌟",
            true
        );

    } else {

        showFeedback(
            "❌ Wrong! Try another answer. 💪",
            false
        );

    }

}


/* ================= FEEDBACK ================= */

function showFeedback(message, correct) {

    const feedback =
        document.getElementById("feedback");

    feedback.textContent = message;

    feedback.className =
        correct
        ? "feedback correct"
        : "feedback wrong";

}


/* ================= NEXT QUESTION ================= */

function nextQuestion() {

    if (selectedAnswer === null) {

        showFeedback(
            "👆 Please choose an answer first!",
            false
        );

        return;
    }

    const q =
        questions[questionIndex];

    /*
       Score is counted only from the
       final answer selected by child.
    */

    if (selectedAnswer === q.correct) {

        score++;

    }

    questionIndex++;

    if (questionIndex >= questions.length) {

        finishTest();

    } else {

        showQuestion();

    }

}


/* ================= FINISH TEST ================= */

function finishTest() {

    const total = questions.length;

    const wrong = total - score;

    const percentage =
        Math.round((score / total) * 100);

    document.getElementById("resultScore")
        .textContent =
        score + " / " + total + " Marks";

    document.getElementById("resultCorrect")
        .textContent = score;

    document.getElementById("resultWrong")
        .textContent = wrong;

    document.getElementById("resultPercentage")
        .textContent =
        percentage + "%";

    const message =
        document.getElementById("resultMessage");

    const robots =
        document.getElementById("dancingRobots");


    if (percentage === 100) {

        message.textContent =
            "🏆 PERFECT! All answers are correct! 🤖🎉";

        robots.textContent =
            "🤖 🕺 🤖 💃 🤖 🕺 🤖";

        robots.style.animation =
            "robotDance .3s infinite alternate";

    }

    else if (percentage >= 90) {

        message.textContent =
            "🌟 Amazing! You are a Super Star!";

        robots.textContent =
            "🤖 🕺 🤖";

    }

    else if (percentage >= 80) {

        message.textContent =
            "🎉 Very Good! Keep Learning!";

        robots.textContent =
            "🤖 💃";

    }

    else if (percentage >= 70) {

        message.textContent =
            "👏 Good Job! Keep Practicing!";

        robots.textContent =
            "🤖";

    }

    else {

        message.textContent =
            "💪 Keep trying! You can do it!";

        robots.textContent =
            "🤖 ❤️";

    }

    showPage("resultPage");

}


/* ================= HOME ================= */

function goHome() {

    if ("speechSynthesis" in window) {
        speechSynthesis.cancel();
    }

    showPage("homePage");

}


/* =====================================================
                 BUTTON CONNECTIONS
===================================================== */

document.addEventListener("DOMContentLoaded", function() {


    /* HOME BUTTONS */

    document
        .getElementById("alphabetBtn")
        .addEventListener("click", openAlphabet);


    document
        .getElementById("numberBtn")
        .addEventListener("click", openNumbers);


    document
        .getElementById("animalBtn")
        .addEventListener("click", openAnimals);


    document
        .getElementById("testBtn")
        .addEventListener("click", openTestMenu);


    /* ALL HOME BUTTONS */

    document
        .querySelectorAll(".homeBtn")
        .forEach(function(button) {

            button.addEventListener("click", goHome);

        });


    /* ALPHABET */

    document
        .getElementById("speakAlphabetBtn")
        .addEventListener("click", speakAlphabet);


    document
        .getElementById("nextAlphabet")
        .addEventListener("click", nextAlphabet);


    document
        .getElementById("prevAlphabet")
        .addEventListener("click", previousAlphabet);


    /* NUMBERS */

    document
        .getElementById("speakNumberBtn")
        .addEventListener("click", speakNumber);


    document
        .getElementById("nextNumber")
        .addEventListener("click", nextNumber);


    document
        .getElementById("prevNumber")
        .addEventListener("click", previousNumber);


    /* TEST MENU */

    document
        .getElementById("alphabetTestBtn")
        .addEventListener(
            "click",
            startAlphabetTest
        );


    document
        .getElementById("numberTestBtn")
        .addEventListener(
            "click",
            startNumberTest
        );


    /* TEST */

    document
        .getElementById("nextQuestion")
        .addEventListener(
            "click",
            nextQuestion
        );


    /* RESULT */

    document
        .getElementById("tryAgainBtn")
        .addEventListener(
            "click",
            function() {

                if (testType === "alphabet") {
                    startAlphabetTest();
                } else {
                    startNumberTest();
                }

            }
        );


    document
        .getElementById("resultHomeBtn")
        .addEventListener(
            "click",
            goHome
        );


    /* Start at HOME */

    showPage("homePage");

});
