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


/* =====================================================
                    NUMBER
===================================================== */

let currentNumber = 1;


/* =====================================================
                    ANIMALS
===================================================== */

const animals = [

    ["🐶", "Dog", "Woof Woof"],
    ["🐱", "Cat", "Meow Meow"],
    ["🐮", "Cow", "Moo Moo"],
    ["🐷", "Pig", "Oink Oink"],
    ["🐔", "Chicken", "Cluck Cluck"],
    ["🐴", "Horse", "Neigh"],
    ["🐑", "Sheep", "Baa Baa"],
    ["🐐", "Goat", "Maa Maa"],
    ["🦁", "Lion", "Roar"],
    ["🐯", "Tiger", "Roar"],
    ["🐘", "Elephant", "Trumpet"],
    ["🐒", "Monkey", "Ooh Ooh"],
    ["🐻", "Bear", "Growl"],
    ["🐼", "Panda", "Growl"],
    ["🦊", "Fox", "Ring-ding"],
    ["🐺", "Wolf", "Howl"],
    ["🐸", "Frog", "Croak"],
    ["🐍", "Snake", "Hiss"],
    ["🐦", "Bird", "Tweet Tweet"],
    ["🦆", "Duck", "Quack Quack"],
    ["🦉", "Owl", "Hoo Hoo"],
    ["🐧", "Penguin", "Squawk"],
    ["🐬", "Dolphin", "Click Click"],
    ["🦋", "Butterfly", "Flutter"]

];


/* =====================================================
                    TEST
===================================================== */

let testQuestions = [];

let currentTestQuestion = 0;

let currentAnswer = null;

let answerChanges = 0;

let testScore = 0;


/* =====================================================
                    COMMON
===================================================== */

function hideAllPages() {

    const pages = [

        "homePage",
        "alphabetPage",
        "numberPage",
        "testPage",
        "resultPage",
        "animalPage"

    ];

    pages.forEach(function(id) {

        const page =
            document.getElementById(id);

        if (page) {
            page.classList.add("hidden");
        }

    });

}


function goHome() {

    stopSpeech();

    hideAllPages();

    document
        .getElementById("homePage")
        .classList.remove("hidden");

}


/* =====================================================
                SPEECH
===================================================== */

function stopSpeech() {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }

}


function speakText(text) {

    if (!("speechSynthesis" in window)) {

        return;

    }

    stopSpeech();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.rate = 0.75;

    speech.pitch = 1.1;

    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}


/* =====================================================
                ALPHABET
===================================================== */

function openAlphabetPage() {

    stopSpeech();

    hideAllPages();

    document
        .getElementById("alphabetPage")
        .classList.remove("hidden");

    alphabetIndex = 0;

    showAlphabet();

}


function showAlphabet() {

    const item =
        alphabetData[alphabetIndex];

    document
        .getElementById("letter")
        .innerText = item[0];

    document
        .getElementById("picture")
        .innerText = item[2];

    document
        .getElementById("word")
        .innerText = item[1];

    document
        .getElementById("sentence")
        .innerText =
            item[0] +
            " for " +
            item[1];

    document
        .getElementById("alphabetProgress")
        .innerText =
            item[0] +
            " / Z";

    restartAnimation(
        document.getElementById("letter")
    );


    /* Automatically speak only once */

    setTimeout(function() {

        speakAlphabet();

    }, 500);

}


function speakAlphabet() {

    const item =
        alphabetData[alphabetIndex];

    speakText(
        item[0] +
        " for " +
        item[1]
    );

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

    stopSpeech();

    hideAllPages();

    document
        .getElementById("numberPage")
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
                ? " " +
                  ones[number % 10]
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
                ? " " +
                  numberToWords(number % 100)
                : ""
            )
        );

    }


    return "One Thousand";

}


function showNumber() {

    document
        .getElementById("bigNumber")
        .innerText =
            currentNumber;

    document
        .getElementById("numberName")
        .innerText =
            numberToWords(currentNumber);

    document
        .getElementById("numberProgress")
        .innerText =
            currentNumber +
            " / 1000";


    const ballBox =
        document.getElementById("balls");

    ballBox.innerHTML = "";


    const ballCount =
        Math.min(currentNumber, 20);


    for (
        let i = 0;
        i < ballCount;
        i++
    ) {

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


function speakNumber() {

    speakText(
        numberToWords(currentNumber)
    );

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
                    ANIMATION
===================================================== */

function restartAnimation(element) {

    if (!element) {
        return;
    }

    element.style.animation = "none";

    void element.offsetWidth;

    element.style.animation =
        "robotFloat .8s ease-out";

}


/* =====================================================
                CREATE TEST
===================================================== */

function createTestQuestions() {

    let questions = [];


    /* ---------- 10 ALPHABET QUESTIONS ---------- */

    const shuffledAlphabet =
        [...alphabetData]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);


    shuffledAlphabet.forEach(function(item) {

        const correct = item[0];

        let options = [correct];


        while (options.length < 4) {

            const randomItem =
                alphabetData[
                    Math.floor(
                        Math.random() *
                        alphabetData.length
                    )
                ];

            if (!options.includes(randomItem[0])) {

                options.push(randomItem[0]);

            }

        }


        options =
            options.sort(
                () => Math.random() - 0.5
            );


        questions.push({

            type: "alphabet",

            question:
                "Which letter is this?",

            picture:
                item[2],

            answer:
                correct,

            options:
                options

        });

    });


    /* ---------- 10 NUMBER QUESTIONS ---------- */

    let numbers = [];

    while (numbers.length < 10) {

        const randomNumber =
            Math.floor(
                Math.random() * 1000
            ) + 1;

        if (!numbers.includes(randomNumber)) {

            numbers.push(randomNumber);

        }

    }


    numbers.forEach(function(number) {

        const correct =
            number.toString();

        let options = [correct];


        while (options.length < 4) {

            const randomNumber =
                Math.floor(
                    Math.random() * 1000
                ) + 1;

            const value =
                randomNumber.toString();

            if (!options.includes(value)) {

                options.push(value);

            }

        }


        options =
            options.sort(
                () => Math.random() - 0.5
            );


        questions.push({

            type: "number",

            question:
                "Which number is this?",

            picture:
                "🔢",

            answer:
                correct,

            options:
                options

        });

    });


    return questions;

}


/* =====================================================
                OPEN TEST
===================================================== */

function openTestPage() {

    stopSpeech();

    hideAllPages();

    document
        .getElementById("testPage")
        .classList.remove("hidden");

    testQuestions =
        createTestQuestions();

    currentTestQuestion = 0;

    currentAnswer = null;

    answerChanges = 0;

    testScore = 0;

    showTestQuestion();

}


/* =====================================================
            SHOW TEST QUESTION
===================================================== */

function showTestQuestion() {

    const q =
        testQuestions[
            currentTestQuestion
        ];


    currentAnswer = null;

    answerChanges = 0;


    document
        .getElementById("testProgress")
        .innerText =
            "Question " +
            (currentTestQuestion + 1) +
            " / 20";


    document
        .getElementById("changeInfo")
        .innerText =
            "Answer changes: 0 / 3";


    document
        .getElementById("testTopic")
        .innerText =
            q.type === "alphabet"
            ? "🔤 Alphabet"
            : "🔢 Numbers";


    document
        .getElementById("testQuestion")
        .innerText =
            q.question;


    document
        .getElementById("testQuestionPicture")
        .innerText =
            q.picture;


    document
        .getElementById("answerMessage")
        .innerText = "";


    const optionBox =
        document.getElementById("testOptions");

    optionBox.innerHTML = "";


    q.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.className =
            "testOption";

        button.innerText =
            option;


        button.onclick =
            function() {

                chooseAnswer(
                    option,
                    button
                );

            };


        optionBox.appendChild(button);

    });


    document
        .getElementById("nextQuestionButton")
        .innerText =
            currentTestQuestion === 19
            ? "🏆 Finish Test"
            : "Next Question ➡️";

}


/* =====================================================
                CHOOSE ANSWER
===================================================== */

function chooseAnswer(
    selectedAnswer,
    selectedButton
) {

    /*
       Child can change answer
       maximum 3 times.
    */

    if (answerChanges >= 3) {

        document
            .getElementById("answerMessage")
            .innerText =
                "⚠️ You used all 3 answer changes!";

        return;

    }


    answerChanges++;

    currentAnswer =
        selectedAnswer;


    const q =
        testQuestions[
            currentTestQuestion
        ];


    const allButtons =
        document.querySelectorAll(
            ".testOption"
        );


    allButtons.forEach(function(button) {

        button.classList.remove(
            "selected",
            "correct",
            "wrong"
        );

    });


    selectedButton.classList.add(
        "selected"
    );


    /*
       Correct / Wrong message
    */

    const message =
        document.getElementById(
            "answerMessage"
        );


    if (
        selectedAnswer ===
        q.answer
    ) {

        selectedButton.classList.remove(
            "selected"
        );

        selectedButton.classList.add(
            "correct"
        );

        message.innerText =
            "🎉 CORRECT! Great Job! ⭐";

        message.className =
            "answerMessage answerCorrect";


        speakText("Correct! Great job!");

    } else {

        selectedButton.classList.remove(
            "selected"
        );

        selectedButton.classList.add(
            "wrong"
        );

        message.innerText =
            "❌ WRONG! Try another answer! 💪";

        message.className =
            "answerMessage answerWrong";


        speakText("Wrong. Try again!");

    }


    document
        .getElementById("changeInfo")
        .innerText =
            "Answer changes: " +
            answerChanges +
            " / 3";


    /*
       If correct, lock after showing
       correct answer.

       If wrong, child can change answer.
    */

    if (
        selectedAnswer ===
        q.answer
    ) {

        allButtons.forEach(function(button) {

            if (
                button.innerText ===
                q.answer
            ) {

                button.classList.add(
                    "correct"
                );

            }

        });

    }

}


/* =====================================================
                NEXT TEST QUESTION
===================================================== */

function nextTestQuestion() {

    /*
       If child has not selected
       any answer.
    */

    if (currentAnswer === null) {

        const message =
            document.getElementById(
                "answerMessage"
            );

        message.innerText =
            "👆 Please choose an answer first!";

        message.className =
            "answerMessage answerWrong";

        return;

    }


    const q =
        testQuestions[
            currentTestQuestion
        ];


    /*
       Score the FINAL selected answer.
    */

    if (
        currentAnswer ===
        q.answer
    ) {

        testScore++;

    }


    if (
        currentTestQuestion <
        testQuestions.length - 1
    ) {

        currentTestQuestion++;

        showTestQuestion();

    } else {

        finishTest();

    }

}


/* =====================================================
                FINISH TEST
===================================================== */

function finishTest() {

    stopSpeech();

    hideAllPages();

    document
        .getElementById("resultPage")
        .classList.remove("hidden");


    const total = 20;

    const correct =
        testScore;

    const wrong =
        total - correct;

    const percentage =
        Math.round(
            (correct / total) * 100
        );


    document
        .getElementById("resultScore")
        .innerText =
            correct +
            " / " +
            total +
            " Marks";


    document
        .getElementById("resultCorrect")
        .innerText =
            correct;


    document
        .getElementById("resultWrong")
        .innerText =
            wrong;


    document
        .getElementById("resultPercentage")
        .innerText =
            percentage + "%";


    const message =
        document.getElementById(
            "resultMessage"
        );


    /*
       Special rewards
    */

    if (percentage === 100) {

        message.innerText =
            "👑 PERFECT! You are a Super Star! 🤖🎉";

        document
            .getElementById("robotParty")
            .classList.remove("hidden");


        speakText(
            "Perfect! You are a super star!"
        );

    }

    else if (percentage >= 90) {

        message.innerText =
            "🌟 Excellent! Almost Perfect!";

        speakText(
            "Excellent! Keep learning!"
        );

    }

    else if (percentage >= 80) {

        message.innerText =
            "🏆 Very Good! Keep Learning!";

        speakText(
            "Very good! Keep learning!"
        );

    }

    else if (percentage >= 70) {

        message.innerText =
            "👏 Good Job! You can do even better!";

        speakText(
            "Good job! Keep practicing!"
        );

    }

    else {

        message.innerText =
            "💪 Don't Give Up! Try Again!";

        speakText(
            "Don't give up. Try again!"
        );

    }

}


/* =====================================================
                RESTART TEST
===================================================== */

function restartTest() {

    openTestPage();

}


/* =====================================================
                ANIMALS
===================================================== */

function openAnimalPage() {

    stopSpeech();

    hideAllPages();

    document
        .getElementById("animalPage")
        .classList.remove("hidden");

    createAnimalCards();

}


function createAnimalCards() {

    const grid =
        document.getElementById(
            "animalGrid"
        );

    grid.innerHTML = "";


    animals.forEach(function(animal) {

        const card =
            document.createElement("button");

        card.className =
            "animalCard";


        card.innerHTML = `

            <div class="animalEmoji">
                ${animal[0]}
            </div>

            <div class="animalName">
                ${animal[1]}
            </div>

            <div class="animalSound">
                🔊 ${animal[2]}
            </div>

        `;


        card.onclick =
            function() {

                speakText(
                    animal[1] +
                    " says " +
                    animal[2]
                );

            };


        grid.appendChild(card);

    });

}


/* =====================================================
                STAR
