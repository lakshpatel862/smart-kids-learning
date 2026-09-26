let stars = 0;
let learnedLetters = [];
let currentLetter = null;
let currentLanguage = "en";


const alphabetData = [

    {
        letter:"A",
        word:"Apple",
        emoji:"🍎",
        hindi:"सेब",
        gujarati:"સફરજન",
        sentence:"A is for Apple"
    },

    {
        letter:"B",
        word:"Ball",
        emoji:"⚽",
        hindi:"गेंद",
        gujarati:"દડો",
        sentence:"B is for Ball"
    },

    {
        letter:"C",
        word:"Cat",
        emoji:"🐱",
        hindi:"बिल्ली",
        gujarati:"બિલાડી",
        sentence:"C is for Cat"
    },

    {
        letter:"D",
        word:"Dog",
        emoji:"🐶",
        hindi:"कुत्ता",
        gujarati:"કૂતરો",
        sentence:"D is for Dog"
    },

    {
        letter:"E",
        word:"Elephant",
        emoji:"🐘",
        hindi:"हाथी",
        gujarati:"હાથી",
        sentence:"E is for Elephant"
    },

    {
        letter:"F",
        word:"Fish",
        emoji:"🐟",
        hindi:"मछली",
        gujarati:"માછલી",
        sentence:"F is for Fish"
    },

    {
        letter:"G",
        word:"Grapes",
        emoji:"🍇",
        hindi:"अंगूर",
        gujarati:"દ્રાક્ષ",
        sentence:"G is for Grapes"
    },

    {
        letter:"H",
        word:"Horse",
        emoji:"🐴",
        hindi:"घोड़ा",
        gujarati:"ઘોડો",
        sentence:"H is for Horse"
    },

    {
        letter:"I",
        word:"Ice Cream",
        emoji:"🍦",
        hindi:"आइसक्रीम",
        gujarati:"આઈસ્ક્રીમ",
        sentence:"I is for Ice Cream"
    },

    {
        letter:"J",
        word:"Jelly",
        emoji:"🍮",
        hindi:"जेली",
        gujarati:"જેલી",
        sentence:"J is for Jelly"
    },

    {
        letter:"K",
        word:"Kite",
        emoji:"🪁",
        hindi:"पतंग",
        gujarati:"પતંગ",
        sentence:"K is for Kite"
    },

    {
        letter:"L",
        word:"Lion",
        emoji:"🦁",
        hindi:"शेर",
        gujarati:"સિંહ",
        sentence:"L is for Lion"
    },

    {
        letter:"M",
        word:"Mango",
        emoji:"🥭",
        hindi:"आम",
        gujarati:"કેરી",
        sentence:"M is for Mango"
    },

    {
        letter:"N",
        word:"Nest",
        emoji:"🪺",
        hindi:"घोंसला",
        gujarati:"માળો",
        sentence:"N is for Nest"
    },

    {
        letter:"O",
        word:"Orange",
        emoji:"🍊",
        hindi:"संतरा",
        gujarati:"નારંગી",
        sentence:"O is for Orange"
    },

    {
        letter:"P",
        word:"Parrot",
        emoji:"🦜",
        hindi:"तोता",
        gujarati:"પોપટ",
        sentence:"P is for Parrot"
    },

    {
        letter:"Q",
        word:"Queen",
        emoji:"👑",
        hindi:"रानी",
        gujarati:"રાણી",
        sentence:"Q is for Queen"
    },

    {
        letter:"R",
        word:"Rabbit",
        emoji:"🐰",
        hindi:"खरगोश",
        gujarati:"સસલું",
        sentence:"R is for Rabbit"
    },

    {
        letter:"S",
        word:"Sun",
        emoji:"☀️",
        hindi:"सूरज",
        gujarati:"સૂર્ય",
        sentence:"S is for Sun"
    },

    {
        letter:"T",
        word:"Tiger",
        emoji:"🐯",
        hindi:"बाघ",
        gujarati:"વાઘ",
        sentence:"T is for Tiger"
    },

    {
        letter:"U",
        word:"Umbrella",
        emoji:"☂️",
        hindi:"छाता",
        gujarati:"છત્રી",
        sentence:"U is for Umbrella"
    },

    {
        letter:"V",
        word:"Van",
        emoji:"🚐",
        hindi:"वैन",
        gujarati:"વેન",
        sentence:"V is for Van"
    },

    {
        letter:"W",
        word:"Whale",
        emoji:"🐋",
        hindi:"व्हेल",
        gujarati:"વ્હેલ",
        sentence:"W is for Whale"
    },

    {
        letter:"X",
        word:"Xylophone",
        emoji:"🎵",
        hindi:"ज़ाइलोफोन",
        gujarati:"ઝાયલોફોન",
        sentence:"X is for Xylophone"
    },

    {
        letter:"Y",
        word:"Yo-Yo",
        emoji:"🪀",
        hindi:"यो-यो",
        gujarati:"યો-યો",
        sentence:"Y is for Yo-Yo"
    },

    {
        letter:"Z",
        word:"Zebra",
        emoji:"🦓",
        hindi:"ज़ेब्रा",
        gujarati:"ઝેબ્રા",
        sentence:"Z is for Zebra"
    }

];


/* HOME */

function goHome() {

    document.getElementById("homePage").style.display = "block";

    document.getElementById("alphabetPage").style.display = "none";

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* ALPHABET */

function openAlphabet() {

    document.getElementById("homePage").style.display = "none";

    document.getElementById("alphabetPage").style.display = "block";

    createAlphabet();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* CREATE ALPHABET */

function createAlphabet() {

    const grid = document.getElementById("alphabetGrid");

    grid.innerHTML = "";

    alphabetData.forEach(item => {

        const card = document.createElement("div");

        card.className = "letterCard";

        if(learnedLetters.includes(item.letter)) {
            card.classList.add("learned");
        }

        let word = item.word;

        if(currentLanguage === "hi") {
            word = item.hindi;
        }

        if(currentLanguage === "gu") {
            word = item.gujarati;
        }

        card.innerHTML = `

            <div class="letter">
                ${item.letter}
            </div>

            <div class="cardEmoji">
                ${item.emoji}
            </div>

            <div class="word">
                ${word}
            </div>

            <div class="meaning">
                🔊 Tap to learn
            </div>

        `;

        card.onclick = () => learnLetter(item);

        grid.appendChild(card);

    });
}


/* LEARN */

function learnLetter(item) {

    currentLetter = item;

    if(!learnedLetters.includes(item.letter)) {

        learnedLetters.push(item.letter);

        addStars(5);

    } else {

        addStars(1);

    }

    updateProgress();

    showPopup(item);

    speakLetter(item);
}


/* PROGRESS */

function updateProgress() {

    document.getElementById("starCount").innerText = stars;

    document.getElementById("progressCount").innerText =
        learnedLetters.length;
}


/* POPUP */

function showPopup(item) {

    let word = item.word;

    let sentence = item.sentence;

    if(currentLanguage === "hi") {

        word = item.hindi;

        sentence =
            item.letter + " से " + item.hindi;
    }

    if(currentLanguage === "gu") {

        word = item.gujarati;

        sentence =
            item.letter + " એટલે " + item.gujarati;
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


/* CLOSE */

function closePopup() {

    document.getElementById("letterPopup").style.display =
        "none";
}


/* VOICE */

function speakLetter(item) {

    let text = item.sentence;

    let language = "en-US";

    if(currentLanguage === "hi") {

        text =
            item.letter + " से " + item.hindi;

        language = "hi-IN";
    }

    if(currentLanguage === "gu") {

        text =
            item.letter + " એટલે " + item.gujarati;

        language = "gu-IN";
    }

    speak(text, language);
}


function speak(text, language) {

    if(!("speechSynthesis" in window)) {
        return;
    }

    speechSynthesis.cancel();

    const voice =
        new SpeechSynthesisUtterance(text);

    voice.lang = language;

    voice.rate = .75;

    voice.pitch = 1.1;

    speechSynthesis.speak(voice);
}


function repeatWord() {

    if(currentLetter) {
        speakLetter(currentLetter);
    }
}


/* STARS */

function addStars(amount) {

    stars += amount;

    updateProgress();
}


/* LANGUAGE */

function setLanguage(language) {

    currentLanguage = language;

    createAlphabet();

    const message =
        document.getElementById("magicMessage");

    if(language === "en") {

        message.innerText =
            "🇬🇧 English mode activated! Let's learn! ✨";
    }

    if(language === "hi") {

        message.innerText =
            "🇮🇳 हिंदी मोड शुरू! चलो सीखते हैं! ✨";
    }

    if(language === "gu") {

        message.innerText =
            "🪔 ગુજરાતી મોડ શરૂ! ચાલો શીખીએ! ✨";
    }
}


/* SURPRISE */

function surpriseLetter() {

    const random =
        Math.floor(
            Math.random() * alphabetData.length
        );

    learnLetter(
        alphabetData[random]
    );
}


/* FINISH */

function finishAlphabet() {

    if(learnedLetters.length === 26) {

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


/* CELEBRATION */

function closeCelebration() {

    document.getElementById("celebration").style.display =
        "none";
}


/* FEATURE POPUP */

function showFeature(emoji,title,text) {

    document.getElementById("featurePopupEmoji").innerText =
        emoji;

    document.getElementById("featurePopupTitle").innerText =
        title;

    document.getElementById("featurePopupText").innerText =
        text;

    document.getElementById("featurePopup").style.display =
        "flex";
}


function closeFeaturePopup() {

    document.getElementById("featurePopup").style.display =
        "none";
}


/* FEATURES */

function openNumbers() {

    showFeature(
        "🔢",
        "Number World",
        "Numbers 1 to 100 learning adventure is coming next! 🚀"
    );
}

function openAnimals() {

    showFeature(
        "🐶",
        "Animal Kingdom",
        "Cute animals and real sounds are coming next! 🐾"
    );
}

function openColors() {

    showFeature(
        "🎨",
        "Colors & Shapes",
        "A colorful creative world is coming next! 🌈"
    );
}

function openFruits() {

    showFeature(
        "🍎",
        "Fruit Garden",
        "A yummy fruit learning world is coming next! 🍓"
    );
}

function openQuiz() {

    showFeature(
        "🧠",
        "Smart Quiz",
        "Fun educational quizzes are coming next! 🏆"
    );
}

function openPuzzle() {

    showFeature(
        "🧩",
        "Puzzle Planet",
        "Fun brain puzzles are coming next! 🚀"
    );
}

function openDrawing() {

    showFeature(
        "✏️",
        "Draw & Color",
        "A creative drawing world is coming next! 🎨"
    );
}

function openChallenge() {

    showFeature(
        "⭐",
        "Daily Challenge",
        "A new challenge every day is coming next! 🏆"
    );
}


/* START */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateProgress();

    }
);
