/* =====================================================
   KIDS LEARNING WORLD
   MAIN JAVASCRIPT
===================================================== */


/* ================= PAGE ELEMENTS ================= */

const homePage = document.getElementById("homePage");
const alphabetPage = document.getElementById("alphabetPage");
const otherPage = document.getElementById("otherPage");

const alphabetBtn = document.getElementById("alphabetBtn");
const numbersBtn = document.getElementById("numbersBtn");
const animalsBtn = document.getElementById("animalsBtn");
const testBtn = document.getElementById("testBtn");

const homeFromAlphabet =
    document.getElementById("homeFromAlphabet");

const homeFromOther =
    document.getElementById("homeFromOther");


/* ================= ALPHABET BUTTON ================= */

alphabetBtn.addEventListener("click", function () {

    homePage.style.display = "none";
    otherPage.style.display = "none";
    alphabetPage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= HOME BUTTON ================= */

homeFromAlphabet.addEventListener("click", function () {

    alphabetPage.style.display = "none";
    otherPage.style.display = "none";
    homePage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= OTHER FEATURES ================= */

numbersBtn.addEventListener("click", function () {

    showOtherPage(
        "🔢 Numbers",
        "Numbers 1 to 1000 section is coming soon! 🚀"
    );

});


animalsBtn.addEventListener("click", function () {

    showOtherPage(
        "🐯 Animals",
        "Animals learning section is coming soon! 🐶🐱🦁"
    );

});


testBtn.addEventListener("click", function () {

    showOtherPage(
        "📝 Test",
        "Fun test section is coming soon! 🎯"
    );

});


/* ================= OTHER PAGE FUNCTION ================= */

function showOtherPage(title, text) {

    homePage.style.display = "none";
    alphabetPage.style.display = "none";
    otherPage.style.display = "block";

    document.getElementById("otherTitle").textContent = title;
    document.getElementById("otherText").textContent = text;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= HOME FROM OTHER ================= */

homeFromOther.addEventListener("click", function () {

    otherPage.style.display = "none";
    alphabetPage.style.display = "none";
    homePage.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   ALPHABET SYSTEM
===================================================== */

const letterCards =
    document.querySelectorAll(".letterCard");

const popup =
    document.getElementById("letterPopup");

const popupLetter =
    document.getElementById("popupLetter");

const popupEmoji =
    document.getElementById("popupEmoji");

const popupWord =
    document.getElementById("popupWord");

const popupSentence =
    document.getElementById("popupSentence");

const closePopup =
    document.getElementById("closePopup");

const speakButton =
    document.getElementById("speakButton");

const learnedCount =
    document.getElementById("learnedCount");

const progressFill =
    document.getElementById("progressFill");


/* ================= LEARNED LETTERS ================= */

let learnedLetters =
    JSON.parse(localStorage.getItem("learnedLetters")) || [];


/* ================= CARD CLICK ================= */

letterCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const letter =
            card.dataset.letter;

        const word =
            card.dataset.word;

        const emoji =
            card.dataset.emoji;


        popupLetter.textContent = letter;
        popupWord.textContent = word;
        popupEmoji.textContent = emoji;

        popupSentence.textContent =
            letter + " for " + word;


        popup.classList.add("show");


        /* Mark as learned */

        if (!learnedLetters.includes(letter)) {

            learnedLetters.push(letter);

            localStorage.setItem(
                "learnedLetters",
                JSON.stringify(learnedLetters)
            );

        }


        updateProgress();


        /* Automatically speak */

        speakLetter(letter, word);

    });

});


/* ================= CLOSE POPUP ================= */

closePopup.addEventListener("click", function() {

    popup.classList.remove("show");

});


/* ================= CLICK OUTSIDE ================= */

popup.addEventListener("click", function(event) {

    if (event.target === popup) {

        popup.classList.remove("show");

    }

});


/* ================= SPEAK BUTTON ================= */

speakButton.addEventListener("click", function() {

    const letter =
        popupLetter.textContent;

    const word =
        popupWord.textContent;

    speakLetter(letter, word);

});


/* =====================================================
   VOICE
===================================================== */

function speakLetter(letter, word) {

    if (!("speechSynthesis" in window)) {

        alert("Your browser does not support voice.");

        return;

    }


    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(
            letter + " for " + word
        );


    speech.lang = "en-IN";
    speech.rate = 0.75;
    speech.pitch = 1.15;
    speech.volume = 1;


    window.speechSynthesis.speak(speech);

}


/* =====================================================
   PROGRESS
===================================================== */

function updateProgress() {

    const count =
        learnedLetters.length;

    learnedCount.textContent =
        count;


    const percentage =
        (count / 26) * 100;

    progressFill.style.width =
        percentage + "%";


    letterCards.forEach(function(card) {

        const letter =
            card.dataset.letter;

        if (learnedLetters.includes(letter)) {

            card.classList.add("learned");

        } else {

            card.classList.remove("learned");

        }

    });

}


/* =====================================================
   LANGUAGE BUTTONS
===================================================== */

document
    .getElementById("englishBtn")
    .addEventListener("click", function() {

        alert("English Learning Mode 🇬🇧");

    });


document
    .getElementById("hindiBtn")
    .addEventListener("click", function() {

        alert("Hindi Learning Mode 🇮🇳");

    });


document
    .getElementById("gujaratiBtn")
    .addEventListener("click", function() {

        alert("Gujarati Learning Mode 🪔");

    });


/* ================= START ================= */

updateProgress();
