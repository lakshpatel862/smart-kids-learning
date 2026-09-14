/* =========================================
              ALPHABET DATA
========================================= */

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


/* =========================================
                 PAGE CONTROL
========================================= */

function hideAllPages() {

    document.querySelectorAll(".screen").forEach(function(page) {
        page.classList.add("hidden");
    });

}

function showPage(id) {

    hideAllPages();

    document.getElementById(id).classList.remove("hidden");

}

function goHome() {

    window.speechSynthesis.cancel();

    showPage("homePage");

}


/* =========================================
              ALPHABET LEARNING
========================================= */

function openAlphabetPage() {

    alphabetIndex = 0;

    showPage("alphabetPage");

    showAlphabet();

}

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
        document.getElementById("letter"),
        "drop .8s"
    );

    setTimeout(function() {
        speakAlphabet();
    },700);

}

function speakAlphabet() {

    window.speechSynthesis.cancel();

    const item = alphabetData[alphabetIndex];

    const speech = new SpeechSynthesisUtterance(
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


/* =========================================
               NUMBER LEARNING
========================================= */

function openNumberPage() {

    currentNumber = 1;

    showPage("numberPage");

    showNumber();

}

function numberToWords(number) {

    const ones = [
        "",
        "One","Two","Three","Four","Five",
        "Six","Seven","Eight","Nine"
    ];

    const teens = [
        "Ten","Eleven","Twelve","Thirteen","Fourteen",
        "Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"
    ];

    const tens = [
        "","","Twenty","Thirty","Forty",
        "Fifty","Sixty","Seventy","Eighty","Ninety"
    ];

    if(number < 10)
        return ones[number];

    if(number < 20)
        return teens[number - 10];

    if(number < 100) {

        return tens[Math.floor(number / 10)] +
        (number % 10 ? " " + ones[number % 10] : "");

    }

    if(number < 1000) {

        return ones[Math.floor(number / 100)] +
        " Hundred" +
        (number % 100 ? " " + numberToWords(number % 100) : "");

    }

    return "One Thousand";

}

function showNumber() {

    document.getElementById("bigNumber").innerText =
        currentNumber;

    document.getElementById("numberName").innerText =
        numberToWords(currentNumber);

    document.getElementById("numberProgress").innerText =
        currentNumber + " / 1000";


    const ballBox = document.getElementById("balls");

    ballBox.innerHTML = "";

    const ballCount = Math.min(currentNumber,20);

    for(let i = 0; i < ballCount; i++) {

        const ball = document.createElement("span");

        ball.innerText = "⚽ ";

        ballBox.appendChild(ball);

    }

    restartAnimation(
        document.getElementById("bigNumber"),
        "drop .8s"
    );

    setTimeout(function() {
        speakNumber();
    },700);

}

function speakNumber() {

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
        numberToWords(currentNumber)
    );

    speech.rate = .75;
    speech.pitch = 1.1;

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


/* =========================================
                 TEST MENU
========================================= */

function openTestMenu() {

    window.speechSynthesis.cancel();

    showPage("testMenu");

}


/* =========================================
              TEST VARIABLES
========================================= */

let testType = "";
let testQuestions = [];
let testIndex = 0;
let testScore = 0;
let selectedAnswer = null;


/* =========================================
             START ALPHABET TEST
========================================= */

function startAlphabetTest() {

    testType = "alphabet";

    testQuestions = createAlphabetQuestions();

    testIndex = 0;
    testScore = 0;
    selectedAnswer = null;

    document.getElementById("testTitle").innerText =
        "🔤 Alphabet Test - 20 Marks";

    showPage("testPage");

    showTestQuestion();

}


/* =========================================
             START NUMBER TEST
========================================= */

function startNumberTest() {

    testType = "number";

    testQuestions = createNumberQuestions();

    testIndex = 0;
    testScore = 0;
    selectedAnswer = null;

    document.getElementById("testTitle").innerText =
        "🔢 Numbers Test - 20 Marks";

    showPage("testPage");

    showTestQuestion();

}


/* =========================================
        CREATE ALPHABET QUESTIONS
========================================= */

function createAlphabetQuestions() {

    let pool = [...alphabetData];

    shuffle(pool);

    return pool.slice(0,20);

}


/* =========================================
         CREATE NUMBER QUESTIONS
========================================= */

function createNumberQuestions() {

    let numbers = [];

    for(let i = 1; i <= 1000; i++) {
        numbers.push(i);
    }

    shuffle(numbers);

    return numbers.slice(0,20);

}


/* =========================================
              SHOW QUESTION
========================================= */

function showTestQuestion() {

    selectedAnswer = null;

    const question =
        testQuestions[testIndex];

    document.getElementById("questionNumber").innerText =
        testIndex + 1;


    const questionBox =
        document.getElementById("testQuestion");

    const answerArea =
        document.getElementById("answerArea");

    answerArea.innerHTML = "";


    if(testType === "alphabet") {

        questionBox.innerText =
            "🔤 " + question[0];

        createAlphabetAnswers(question[0]);

    }
    else {

        questionBox.innerText =
            "🔢 " + question;

        createNumberAnswers(question);

    }

}


/* =========================================
        ALPHABET ANSWERS
========================================= */

function createAlphabetAnswers(correct) {

    let answers = [correct];

    let letters = alphabetData.map(function(item) {
        return item[0];
    });

    shuffle(letters);

    for(let letter of letters) {

        if(!answers.includes(letter)) {

            answers.push(letter);

        }

        if(answers.length === 4)
            break;

    }

    shuffle(answers);

    answers.forEach(function(answer) {

        const button =
            document.createElement("button");

        button.className = "answerButton";

        button.innerText = answer;

        button.onclick = function() {

            selectAnswer(button,answer);

        };

        document.getElementById("answerArea")
            .appendChild(button);

    });

}


/* =========================================
          NUMBER ANSWERS
========================================= */

function createNumberAnswers(correct) {

    let answers = [correct];

    while(answers.length < 4) {

        let random =
            Math.floor(Math.random() * 1000) + 1;

        if(!answers.includes(random)) {
            answers.push(random);
        }

    }

    shuffle(answers);

    answers.forEach(function(answer) {

        const button =
            document.createElement("button");

        button.className = "answerButton";

        button.innerText = answer;

        button.onclick = function() {

            selectAnswer(button,answer);

        };

        document.getElementById("answerArea")
            .appendChild(button);

    });

}


/* =========================================
              SELECT ANSWER
========================================= */

function selectAnswer(button,answer) {

    document.querySelectorAll(".answerButton")
        .forEach(function(btn) {
            btn.classList.remove("selected");
        });

    button.classList.add("selected");

    selectedAnswer = answer;

}


/* =========================================
             SUBMIT ANSWER
========================================= */

function submitTestAnswer() {

    if(selectedAnswer === null) {

        alert("Please choose an answer 😊");

        return;

    }

    const correct =
        testQuestions[testIndex];

    let isCorrect = false;

    if(testType === "alphabet") {

        isCorrect =
            selectedAnswer === correct[0];

    }
    else {

        isCorrect =
            Number(selectedAnswer) === Number(correct);

    }

    if(isCorrect) {

        testScore++;

    }


    testIndex++;


    if(testIndex >= testQuestions.length) {

        showResult();

    }
    else {

        showTestQuestion();

    }

}


/* =========================================
                  RESULT
========================================= */

function showResult() {

    const percentage =
        Math.round((testScore / 20) * 100);

    document.getElementById("resultPercentage").innerText =
        percentage + "%";

    document.getElementById("resultScore").innerText =
        testScore + " / 20";


    const resultText =
        document.getElementById("resultText");

    const emoji =
        document.getElementById("resultEmoji");

    const dance =
        document.getElementById("danceArea");


    dance.innerHTML = "";


    if(percentage === 100) {

        resultText.innerText =
            "🌟 PERFECT! Amazing! 🌟";

        emoji.innerText = "🏆";

        dance.innerHTML =
            '<span class="robotDance">🤖 💃 🕺 🤖</span>';

    }
    else if(percentage >= 90) {

        resultText.innerText =
            "🎉 Excellent!";

        emoji.innerText = "🌟";

    }
    else if(percentage >= 80) {

        resultText.innerText =
            "😊 Very Good!";

        emoji.innerText = "🥳";

    }
    else if(percentage >= 70) {

        resultText.innerText =
            "👍 Good Job!";

        emoji.innerText = "👏";

    }
    else {

        resultText.innerText =
            "💪 Keep Learning!";

        emoji.innerText = "😊";

    }


    showPage("resultPage");

}


/* =========================================
                 SHUFFLE
========================================= */

function shuffle(array) {

    for(let i = array.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [array[i],array[j]] =
        [array[j],array[i]];

    }

    return array;

}


/* =========================================
              ANIMATION RESET
========================================= */

function restartAnimation(element,animation) {

    element.style.animation = "none";

    void element.offsetWidth;

    element.style.animation = animation;

}
