/* =====================================================
   KIDS LEARNING WORLD
===================================================== */


/* ================= DATA ================= */

const alphabetData = [
    ["A","Apple","🍎"],
    ["B","Ball","⚽"],
    ["C","Cat","🐱"],
    ["D","Dog","🐶"],
    ["E","Elephant","🐘"],
    ["F","Fish","🐟"],
    ["G","Grapes","🍇"],
    ["H","House","🏠"],
    ["I","Ice Cream","🍦"],
    ["J","Jar","🫙"],
    ["K","Kite","🪁"],
    ["L","Lion","🦁"],
    ["M","Monkey","🐒"],
    ["N","Nose","👃"],
    ["O","Orange","🍊"],
    ["P","Panda","🐼"],
    ["Q","Queen","👑"],
    ["R","Rabbit","🐇"],
    ["S","Sun","☀️"],
    ["T","Tiger","🐯"],
    ["U","Umbrella","☂️"],
    ["V","Van","🚐"],
    ["W","Watch","⌚"],
    ["X","Xylophone","🎵"],
    ["Y","Yo-Yo","🪀"],
    ["Z","Zebra","🦓"]
];


const animals = [
    ["🐶","Dog"],
    ["🐱","Cat"],
    ["🦁","Lion"],
    ["🐯","Tiger"],
    ["🐘","Elephant"],
    ["🐒","Monkey"],
    ["🐼","Panda"],
    ["🐰","Rabbit"],
    ["🦊","Fox"],
    ["🐻","Bear"],
    ["🐮","Cow"],
    ["🐷","Pig"],
    ["🐸","Frog"],
    ["🐵","Monkey"],
    ["🐔","Hen"],
    ["🦆","Duck"],
    ["🐴","Horse"],
    ["🐑","Sheep"],
    ["🐐","Goat"],
    ["🐘","Elephant"]
];


const numberNames = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten"
];


/* ================= PAGES ================= */

const homePage =
    document.getElementById("homePage");

const alphabetPage =
    document.getElementById("alphabetPage");

const numbersPage =
    document.getElementById("numbersPage");

const animalsPage =
    document.getElementById("animalsPage");

const testPage =
    document.getElementById("testPage");


function hideAllPages() {

    homePage.style.display = "none";
    alphabetPage.style.display = "none";
    numbersPage.style.display = "none";
    animalsPage.style.display = "none";
    testPage.style.display = "none";

}


function showHome() {

    hideAllPages();

    homePage.style.display = "block";

    window.scrollTo(0,0);

}


/* ================= HOME BUTTONS ================= */

document.getElementById("alphabetBtn")
.addEventListener("click",function(){

    hideAllPages();

    alphabetPage.style.display = "block";

    window.scrollTo(0,0);

    loadLetter(currentLetter);

});


document.getElementById("numbersBtn")
.addEventListener("click",function(){

    hideAllPages();

    numbersPage.style.display = "block";

    window.scrollTo(0,0);

    showNumber(currentNumber);

});


document.getElementById("animalsBtn")
.addEventListener("click",function(){

    hideAllPages();

    animalsPage.style.display = "block";

    window.scrollTo(0,0);

});


document.getElementById("testBtn")
.addEventListener("click",function(){

    hideAllPages();

    testPage.style.display = "block";

    window.scrollTo(0,0);

    startTest();

});


/* ================= HOME BUTTONS ================= */

document.getElementById("alphabetHome")
.addEventListener("click",showHome);

document.getElementById("numbersHome")
.addEventListener("click",showHome);

document.getElementById("animalsHome")
.addEventListener("click",showHome);

document.getElementById("testHome")
.addEventListener("click",showHome);


/* =====================================================
   ALPHABET
===================================================== */

let currentLetter = 0;

let learnedLetters =
    JSON.parse(
        localStorage.getItem("kidsLearnedLetters")
    ) || [];


function loadAlphabetCards() {

    const grid =
        document.getElementById("alphabetGrid");

    grid.innerHTML = "";


    alphabetData.forEach(function(item,index){

        const card =
            document.createElement("button");

        card.className = "letterCard";

        card.innerHTML = `
            <strong>${item[0]}</strong>
            <span class="word">${item[1]}</span>
            <span class="emoji">${item[2]}</span>
        `;


        if(
            learnedLetters.includes(item[0])
        ){

            card.classList.add("learned");

        }


        card.addEventListener("click",function(){

            currentLetter = index;

            loadLetter(index);

            speakLetter(
                item[0],
                item[1]
            );

        });


        grid.appendChild(card);

    });

}


loadAlphabetCards();


/* ================= LOAD LETTER ================= */

function loadLetter(index) {

    const item =
        alphabetData[index];


    document.getElementById("letterNumber")
        .textContent =
        `${index + 1} / 26`;


    document.getElementById("currentLetter")
        .textContent =
        item[0];


    document.getElementById("currentWord")
        .textContent =
        `${item[0]} for ${item[1]} ${item[2]}`;


    document.getElementById("traceMessage")
        .textContent =
        `✏️ Start tracing ${item[0]}`;


    document.getElementById("nextBtn")
        .disabled = true;


    tracingDone = false;

    drawingDistance = 0;

    strokes = 0;


    setTimeout(function(){

        setupCanvas();

    },50);


    speakLetter(
        item[0],
        item[1]
    );

}


/* =====================================================
   CANVAS TRACING
===================================================== */

const canvas =
    document.getElementById("traceCanvas");

const ctx =
    canvas.getContext("2d");


let drawing = false;

let tracingDone = false;

let drawingDistance = 0;

let strokes = 0;


function setupCanvas() {

    const box =
        canvas.getBoundingClientRect();

    const dpr =
        window.devicePixelRatio || 1;


    canvas.width =
        box.width * dpr;

    canvas.height =
        box.height * dpr;


    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );


    drawGuide();

}


function drawGuide() {

    const width =
        canvas.clientWidth;

    const height =
        canvas.clientHeight;


    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    /* Writing lines */

    ctx.strokeStyle =
        "#dce5ff";

    ctx.lineWidth = 2;


    ctx.beginPath();

    ctx.moveTo(20,height*.25);
    ctx.lineTo(width-20,height*.25);

    ctx.moveTo(20,height*.50);
    ctx.lineTo(width-20,height*.50);

    ctx.moveTo(20,height*.75);
    ctx.lineTo(width-20,height*.75);

    ctx.stroke();


    /* Dotted letter */

    const letter =
        alphabetData[currentLetter][0];


    let size =
        Math.min(
            width*.65,
            270
        );


    ctx.font =
        `bold ${size}px Arial`;

    ctx.textAlign =
        "center";

    ctx.textBaseline =
        "middle";


    ctx.strokeStyle =
        "#b8a4ff";

    ctx.lineWidth = 7;

    ctx.setLineDash([
        8,
        10
    ]);


    ctx.strokeText(
        letter,
        width/2,
        height/2
    );


    ctx.setLineDash([]);


    ctx.font =
        "bold 17px Arial";

    ctx.fillStyle =
        "#a294d5";


    ctx.fillText(
        "Trace the dotted letter 👆",
        width/2,
        height-25
    );

}


/* ================= POINTER ================= */

function getPosition(event) {

    const rect =
        canvas.getBoundingClientRect();


    let x;
    let y;


    if(
        event.touches &&
        event.touches.length
    ){

        x =
            event.touches[0].clientX -
            rect.left;

        y =
            event.touches[0].clientY -
            rect.top;

    }else{

        x =
            event.clientX -
            rect.left;

        y =
            event.clientY -
            rect.top;

    }


    return {
        x:x,
        y:y
    };

}


/* ================= START ================= */

function startDraw(event) {

    event.preventDefault();

    drawing = true;

    strokes++;


    const p =
        getPosition(event);


    ctx.beginPath();

    ctx.moveTo(
        p.x,
        p.y
    );

}


/* ================= DRAW ================= */

function draw(event) {

    if(!drawing){
        return;
    }


    event.preventDefault();


    const p =
        getPosition(event);


    ctx.lineWidth = 12;

    ctx.lineCap =
        "round";

    ctx.lineJoin =
        "round";

    ctx.strokeStyle =
        "#ff4d8d";


    ctx.lineTo(
        p.x,
        p.y
    );

    ctx.stroke();


    drawingDistance += 6;


    if(
        strokes >= 1 &&
        drawingDistance >= 250
    ){

        completeTracing();

    }

}


/* ================= END ================= */

function stopDraw(event) {

    if(event){
        event.preventDefault();
    }

    drawing = false;

}


/* ================= CANVAS EVENTS ================= */

canvas.addEventListener(
    "mousedown",
    startDraw
);

canvas.addEventListener(
    "mousemove",
    draw
);

canvas.addEventListener(
    "mouseup",
    stopDraw
);

canvas.addEventListener(
    "mouseleave",
    stopDraw
);


canvas.addEventListener(
    "touchstart",
    startDraw,
    {passive:false}
);

canvas.addEventListener(
    "touchmove",
    draw,
    {passive:false}
);

canvas.addEventListener(
    "touchend",
    stopDraw,
    {passive:false}
);


/* ================= COMPLETE ================= */

function completeTracing() {

    if(tracingDone){
        return;
    }


    tracingDone = true;


    const letter =
        alphabetData[currentLetter][0];


    document.getElementById("traceMessage")
        .textContent =
        `🎉 Great Job! ${letter} completed! ⭐`;


    document.getElementById("nextBtn")
        .disabled = false;


    if(
        !learnedLetters.includes(letter)
    ){

        learnedLetters.push(letter);

        localStorage.setItem(
            "kidsLearnedLetters",
            JSON.stringify(
                learnedLetters
            )
        );

    }


    updateProgress();


    /* Automatically next */

    setTimeout(function(){

        if(
            tracingDone &&
            currentLetter < 25
        ){

            nextLetter();

        }

    },1200);

}


/* ================= CLEAR ================= */

document.getElementById("clearBtn")
.addEventListener("click",function(){

    tracingDone = false;

    drawingDistance = 0;

    strokes = 0;

    document.getElementById("nextBtn")
        .disabled = true;


    document.getElementById("traceMessage")
        .textContent =
        `✏️ Try again! Trace ${alphabetData[currentLetter][0]}`;


    drawGuide();

});


/* ================= NEXT ================= */

document.getElementById("nextBtn")
.addEventListener("click",function(){

    nextLetter();

});


function nextLetter() {

    if(currentLetter < 25){

        currentLetter++;

        loadLetter(
            currentLetter
        );

    }else{

        document.getElementById("traceMessage")
            .textContent =
            "🏆 Amazing! You completed A to Z! 🎉";

        document.getElementById("nextBtn")
            .disabled = true;

    }

}


/* ================= PROGRESS ================= */

function updateProgress() {

    document.getElementById("learnedCount")
        .textContent =
        learnedLetters.length;


    document.getElementById("progressFill")
        .style.width =
        `${(learnedLetters.length/26)*100}%`;


    loadAlphabetCards();

}


/* =====================================================
   POPUP
===================================================== */

const popup =
    document.getElementById("popup");


function openPopup(letter,word,emoji) {

    document.getElementById("popupLetter")
        .textContent = letter;

    document.getElementById("popupWord")
        .textContent = word;

    document.getElementById("popupEmoji")
        .textContent = emoji;

    document.getElementById("popupSentence")
        .textContent =
        `${letter} for ${word}`;


    popup.classList.add("show");

}


document.getElementById("closePopup")
.addEventListener("click",function(){

    popup.classList.remove("show");

});


document.getElementById("speakBtn")
.addEventListener("click",function(){

    const letter =
        document.getElementById("popupLetter")
            .textContent;

    const word =
        document.getElementById("popupWord")
            .textContent;


    speakLetter(
        letter,
        word
    );

});


/* =====================================================
   VOICE
===================================================== */

function speakLetter(letter,word) {

    if(
        !("speechSynthesis" in window)
    ){

        return;

    }


    speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(
            `${letter} for ${word}`
        );


    speech.lang =
        "en-IN";

    speech.rate =
        .7;

    speech.pitch =
        1.1;

    speech.volume =
        1;


    speechSynthesis.speak(
        speech
    );

}


/* =====================================================
   NUMBERS
===================================================== */

let currentNumber = 1;


function showNumber(number) {

    document.getElementById("bigNumber")
        .textContent =
        number;


    document.getElementById("numberText")
        .textContent =
        getNumberName(number);


    let balls = "";

    let amount =
        Math.min(number,20);


    for(
        let i=0;
        i<amount;
        i++
    ){

        balls += "⚽ ";

    }


    if(number > 20){

        balls += "...";

    }


    document.getElementById("numberBalls")
        .textContent =
        balls;


    speakNumber(number);

}


document.getElementById("nextNumber")
.addEventListener("click",function(){

    if(currentNumber < 1000){

        currentNumber++;

        showNumber(
            currentNumber
        );

    }

});


document.getElementById("prevNumber")
.addEventListener("click",function(){

    if(currentNumber > 1){

        currentNumber--;

        showNumber(
            currentNumber
        );

    }

});


function getNumberName(number) {

    if(number <= 10){

        return numberNames[number];

    }

    if(number === 11) return "Eleven";
    if(number === 12) return "Twelve";
    if(number === 13) return "Thirteen";
    if(number === 14) return "Fourteen";
    if(number === 15) return "Fifteen";
    if(number === 16) return "Sixteen";
    if(number === 17) return "Seventeen";
    if(number === 18) return "Eighteen";
    if(number === 19) return "Nineteen";
    if(number === 20) return "Twenty";

    return "Number " + number;

}


function speakNumber(number) {

    if(!("speechSynthesis" in window)){
        return;
    }

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(
            `${number}`
        );

    speech.lang = "en-IN";

    speech.rate = .75;

    speechSynthesis.speak(speech);

}


/* =====================================================
   ANIMALS
===================================================== */

function loadAnimals() {

    const grid =
        document.getElementById("animalGrid");

    animals.forEach(function(animal){

        const card =
            document.createElement("button");

        card.className =
            "animalCard";


        card.innerHTML = `
            <span class="animalEmoji">
                ${animal[0]}
            </span>

            <span class="animalName">
                ${animal[1]}
            </span>
        `;


        card.addEventListener("click",function(){

            speakAnimal(
                animal[1]
            );

        });


        grid.appendChild(card);

    });

}


function speakAnimal(name) {

    if(!("speechSynthesis" in window)){
        return;
    }

    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(
            name
        );

    speech.lang =
        "en-IN";

    speech.rate =
        .7;

    speech.pitch =
        1.1;

    speechSynthesis.speak(
        speech
    );

}


loadAnimals();


/* =====================================================
   TEST
===================================================== */

const questions = [

    {
        q:"Which letter comes first?",
        options:["A","B","C","D"],
        answer:"A"
    },

    {
        q:"A is for ______?",
        options:["Apple","Ball","Cat","Dog"],
        answer:"Apple"
    },

    {
        q:"Which letter comes after A?",
        options:["C","B","D","Z"],
        answer:"B"
    },

    {
        q:"B is for ______?",
        options:["Dog","Apple","Ball","Cat"],
        answer:"Ball"
    },

    {
        q:"Which animal says Meow?",
        options:["Dog","Cat","Lion","Cow"],
        answer:"Cat"
    },

    {
        q:"Which number comes after 1?",
        options:["3","4","2","5"],
        answer:"2"
    },

    {
        q:"C is for ______?",
        options:["Cat","Apple","Ball","Tiger"],
        answer:"Cat"
    },

    {
        q:"Which animal is very big?",
        options:["Ant","Elephant","Cat","Rabbit"],
        answer:"Elephant"
    },

    {
        q:"D is for ______?",
        options:["Dog","Apple","Fish","Lion"],
        answer:"Dog"
    },

    {
        q:"Which letter comes after B?",
        options:["A","C","D","E"],
        answer:"C"
    }

];


let questionIndex = 0;

let score = 0;

let answered = false;


function startTest() {

    questionIndex = 0;

    score = 0;

    answered = false;

    showQuestion();

}


function showQuestion() {

    const q =
        questions[questionIndex];


    document.getElementById("questionNumber")
        .textContent =
        `Question ${questionIndex+1}`;


    document.getElementById("questionText")
        .textContent =
        q.q;


    document.getElementById("testScore")
        .textContent =
        score;


    document.getElementById("testResult")
        .textContent = "";


    const answers =
        document.getElementById("answers");


    answers.innerHTML = "";


    answered = false;


    q.options.forEach(function(option){

        const button =
            document.createElement("button");

        button.className =
            "answerBtn";

        button.textContent =
            option;


        button.addEventListener(
            "click",
            function(){

                checkAnswer(
                    button,
                    option,
                    q.answer
                );

            }
        );


        answers.appendChild(button);

    });

}


function checkAnswer(
    button,
    selected,
    correct
){

    if(answered){
        return;
    }


    answered = true;


    const allButtons =
        document.querySelectorAll(
            ".answerBtn"
        );


    if(selected === correct){

        button.classList.add(
            "correct"
        );

        score += 2;

        document.getElementById(
            "testResult"
        ).textContent =
            "🎉 Correct! Great Job! ⭐";

    }else{

        button.classList.add(
            "wrong"
        );

        allButtons.forEach(function(btn){

            if(
                btn.textContent === correct
            ){

                btn.classList.add(
                    "correct"
                );

            }

        });


        document.getElementById(
            "testResult"
        ).textContent =
            `❌ Wrong! Correct answer is ${correct}`;

    }


    document.getElementById("testScore")
        .textContent =
        score;

}


document.getElementById("nextQuestion")
.addEventListener("click",function(){

    if(
        questionIndex <
        questions.length - 1
    ){

        questionIndex++;

        showQuestion();

    }else{

        document.getElementById("questionText")
            .textContent =
            `🏆 Test Complete! Your Score: ${score}/20`;

        document.getElementById("answers")
            .innerHTML = "";

        document.getE
