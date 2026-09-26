/* ==========================================
   MAGIC ALPHABET WORLD
========================================== */


/* ================= VARIABLES ================= */

let stars = 0;

let learnedLetters = [];

let currentLetter = null;

let currentLanguage = "en";


/* ================= ALPHABET DATA ================= */

const alphabetData = [

    {
        letter: "A",
        word: "Apple",
        emoji: "🍎",
        hi: "सेब",
        gu: "સફરજન",
        sentence: "A is for Apple!"
    },

    {
        letter: "B",
        word: "Ball",
        emoji: "⚽",
        hi: "गेंद",
        gu: "દડો",
        sentence: "B is for Ball!"
    },

    {
        letter: "C",
        word: "Cat",
        emoji: "🐱",
        hi: "बिल्ली",
        gu: "બિલાડી",
        sentence: "C is for Cat!"
    },

    {
        letter: "D",
        word: "Dog",
        emoji: "🐶",
        hi: "कुत्ता",
        gu: "કૂતરો",
        sentence: "D is for Dog!"
    },

    {
        letter: "E",
        word: "Elephant",
        emoji: "🐘",
        hi: "हाथी",
        gu: "હાથી",
        sentence: "E is for Elephant!"
    },

    {
        letter: "F",
        word: "Fish",
        emoji: "🐟",
        hi: "मछली",
        gu: "માછલી",
        sentence: "F is for Fish!"
    },

    {
        letter: "G",
        word: "Grapes",
        emoji: "🍇",
        hi: "अंगूर",
        gu: "દ્રાક્ષ",
        sentence: "G is for Grapes!"
    },

    {
        letter: "H",
        word: "Horse",
        emoji: "🐴",
        hi: "घोड़ा",
        gu: "ઘોડો",
        sentence: "H is for Horse!"
    },

    {
        letter: "I",
        word: "Ice Cream",
        emoji: "🍦",
        hi: "आइसक्रीम",
        gu: "આઈસ્ક્રીમ",
        sentence: "I is for Ice Cream!"
    },

    {
        letter: "J",
        word: "Jelly",
        emoji: "🍮",
        hi: "जेली",
        gu: "જેલી",
        sentence: "J is for Jelly!"
    },

    {
        letter: "K",
        word: "Kite",
        emoji: "🪁",
        hi: "पतंग",
        gu: "પતંગ",
        sentence: "K is for Kite!"
    },

    {
        letter: "L",
        word: "Lion",
        emoji: "🦁",
        hi: "शेर",
        gu: "સિંહ",
        sentence: "L is for Lion!"
    },

    {
        letter: "M",
        word: "Mango",
        emoji: "🥭",
        hi: "आम",
        gu: "કેરી",
        sentence: "M is for Mango!"
    },

    {
        letter: "N",
        word: "Nest",
        emoji: "🪺",
        hi: "घोंसला",
        gu: "માળો",
        sentence: "N is for Nest!"
    },

    {
        letter: "O",
        word: "Orange",
        emoji: "🍊",
        hi: "संतरा",
        gu: "નારંગી",
        sentence: "O is for Orange!"
    },

    {
        letter: "P",
        word: "Parrot",
        emoji: "🦜",
        hi: "तोता",
        gu: "પોપટ",
        sentence: "P is for Parrot!"
    },

    {
        letter: "Q",
        word: "Queen",
        emoji: "👑",
        hi: "रानी",
        gu: "રાણી",
        sentence: "Q is for Queen!"
    },

    {
        letter: "R",
        word: "Rabbit",
        emoji: "🐰",
        hi: "खरगोश",
        gu: "સસલું",
        sentence: "R is for Rabbit!"
    },

    {
        letter: "S",
        word: "Sun",
        emoji: "☀️",
        hi: "सूरज",
        gu: "સૂર્ય",
        sentence: "S is for Sun!"
    },

    {
        letter: "T",
        word: "Tiger",
        emoji: "🐯",
        hi: "बाघ",
        gu: "વાઘ",
        sentence: "T is for Tiger!"
    },

    {
        letter: "U",
        word: "Umbrella",
        emoji: "☂️",
        hi: "छाता",
        gu: "છત્રી",
        sentence: "U is for Umbrella!"
    },

    {
        letter: "V",
        word: "Van",
        emoji: "🚐",
        hi: "वैन",
        gu: "વેન",
        sentence: "V is for Van!"
    },

    {
        letter: "W",
        word: "Whale",
        emoji: "🐋",
        hi: "व्हेल",
        gu: "વ્હેલ",
        sentence: "W is for Whale!"
    },

    {
        letter: "X",
        word: "Xylophone",
        emoji: "🎵",
        hi: "ज़ाइलोफोन",
        gu: "ઝાયલોફોન",
        sentence: "X is for Xylophone!"
    },

    {
        letter: "Y",
        word: "Yo-Yo",
        emoji: "🪀",
        hi: "यो-यो",
        gu: "યો-યો",
        sentence: "Y is for Yo-Yo!"
    },

    {
        letter: "Z",
        word: "Zebra",
        emoji: "🦓",
        hi: "ज़ेब्रा",
        gu: "ઝેબ્રા",
        sentence: "Z is for Zebra!"
    }

];


/* ================= OPEN ALPHABET ================= */

function openAlphabet() {

    document.getElementById("homePage").style.display = "none";

    document.getElementById("alphabetPage").style.display = "block";

    createAlphabet();

}


/* ================= HOME ================= */

function goHome() {

    document.getElementById("alphabetPage").style.display = "none";

    document.getElementById("homePage").style.display = "block";

}


/* ================= CREATE ALPHABET ================= */

function createAlphabet() {

    const grid = document.getElementById("alphabetGrid");

    grid.innerHTML = "";

    alphabetData.forEach(function(item, index) {

        const card = document.createElement("div");

        card.className = "letterCard";

        if (learnedLetters.includes(item.letter)) {

            card.classList.add("learned");

        }


        let displayedWord = item.word;


        if (currentLanguage === "hi") {

            displayedWord = item.hi;

        }


        if (currentLanguage === "gu") {

            displayedWord = item.gu;

        }


        card.innerHTML = `

            <div class="letter">
                ${item.letter}
            </div>

            <div class="cardEmoji">
                ${item.emoji}
            </div>

            <div class="word">
                ${displayedWord}
            </div>

            <div class="meaning">
                Tap to learn ✨
            </div>

        `;


        card.onclick = function() {

            learnLetter(item, index);

        };


        grid.appendChild(card);

    });

}


/* ================= LEARN LETTER ================= */

function learnLetter(item, index) {

    currentLetter = item;


    if (!learnedLetters.includes(item.letter)) {

        learnedLetters.push(item.letter);

        addStars(5);

    } else {

        addStars(1);

    }


    document.getElementById("learnedCount").innerText =
        learnedLetters.length;


    showPopup(item);


    speakLetter(item);

}


/* ================= POPUP ================= */

function showPopup(item) {

    let word = item.word;

    let sentence = item.sentence;


    if (currentLanguage === "hi") {

        word = item.hi;

        sentence = item.letter + " से " + item.hi;

    }


    if (currentLanguage === "gu") {

        word = item.gu;

        sentence = item.letter + " એટલે " + item.gu;

    }


    document.getElementById("popupLetter").innerText =
        item.letter;


    document.getElementById("popupEmoji").innerText =
        item.emoji;


    document.getElementById("popupWord").innerText =
        word;


    document.getElementById("popupSentence").innerText =
        sentence;


    document.getElementById("letterPopup").style.display =
        "flex";

}


function closePopup() {

    document.getElementById("letterPopup").style.display =
        "none";

}


/* ================= SPEAK ================= */

function speakLetter(item) {

    let text = item.sentence;

    let language = "en-US";


    if (currentLanguage === "hi") {

        text = item.letter + " से " + item.hi;

        language = "hi-IN";

    }


    if (currentLanguage === "gu") {

        text = item.letter + " એટલે " + item.gu;

        language = "gu-IN";

    }


    speak(text, language);

}


/* ================= SPEECH ================= */

function speak(text, language) {

    if (!("speechSynthesis" in window)) {

        return;

    }


    window.speechSynthesis.cancel();


    const voice = new SpeechSynthesisUtterance(text);

    voice.lang = language;

    voice.rate = 0.75;

    voice.pitch = 1.15;


    window.speechSynthesis.speak(voice);

}


/* ================= REPEAT ================= */

function repeatWord() {

    if (currentLetter) {

        speakLetter(currentLetter);

    }

}


/* ================= STARS ================= */

function addStars(number) {

    stars += number;

    document.getElementById("starCount").innerText =
        stars;

}


/* ================= LANGUAGE ================= */

function setLanguage(language) {

    currentLanguage = language;

    createAlphabet();


    if (language === "en") {

        document.getElementById("magicMessage").innerText =
            "🇬🇧 English mode activated! Let's learn! ✨";

    }


    if (language === "hi") {

        document.getElementById("magicMessage").innerText =
            "🇮🇳 हिंदी मोड शुरू! चलो सीखते हैं! ✨";

    }


    if (language === "gu") {

        document.getElementById("magicMessage").innerText =
            "🪔 ગુજરાતી મોડ શરૂ! ચાલો શીખીએ! ✨";

    }

}


/* ================= SURPRISE ================= */

function surpriseLetter() {

    const randomIndex =
        Math.floor(Math.random() * alphabetData.length);


    const item =
        alphabetData[randomIndex];


    learnLetter(item, randomIndex);


    document.getElementById("magicMessage").innerText =
        "🎁 Surprise! Today we discovered " +
        item.letter +
        "! ⭐";

}


/* ================= FINISH ================= */

function finishAlphabet() {

    if (learnedLetters.length === 26) {

        addStars(20);

        document.getElementById("celebration").style.display =
            "flex";

        speak(
            "Amazing! You learned the whole alphabet!",
            "en-US"
        );

    } else {

        const remaining =
            26 - learnedLetters.length;


        document.getElementById("magicMessage").innerText =
            "🌟 Great job! " +
            remaining +
            " letters are still waiting for you!";

    }

}


/* ================= CLOSE CELEBRATION ================= */

function closeCelebration() {

    document.getElementById("celebration").style.display =
        "none";

}
