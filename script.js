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


/* CREATE A-Z BOXES */

const grid = document.getElementById("alphabetGrid");

alphabetData.forEach((item, index) => {

    const box = document.createElement("div");

    box.className = "letterBox";

    box.innerHTML = item[0];

    box.onclick = function() {
        openLesson(index);
    };

    grid.appendChild(box);

});


/* OPEN LESSON */

function openLesson(index) {

    currentIndex = index;

    document.getElementById("homePage").classList.add("hidden");

    document.getElementById("lessonPage").classList.remove("hidden");

    updateLesson();

    speakCurrent();
}


/* UPDATE LETTER */

function updateLesson() {

    const data = alphabetData[currentIndex];

    const letter = data[0];
    const word = data[1];
    const picture = data[2];

    document.getElementById("letter").innerText = letter;

    document.getElementById("word").innerText = word;

    document.getElementById("bigLetter").innerText = letter;

    document.getElementById("smallLetter").innerText =
        letter.toLowerCase();

    document.getElementById("picture").innerText = picture;

    document.getElementById("wordText").innerText = word;

    document.getElementById("progress").innerText =
        (currentIndex + 1) + " / 26";
}


/* SPEAK */

function speakCurrent() {

    const data = alphabetData[currentIndex];

    const letter = data[0];

    const word = data[1];

    const sentence = letter + " for " + word;

    const speech = new SpeechSynthesisUtterance(sentence);

    speech.lang = "en-US";

    speech.rate = 0.8;

    speech.pitch = 1.2;

    window.speechSynthesis.cancel();

    window.speechSynthesis.speak(speech);
}


/* NEXT */

function nextLetter() {

    if (currentIndex < alphabetData.length - 1) {

        currentIndex++;

        updateLesson();

        speakCurrent();

    }

}


/* PREVIOUS */

function previousLetter() {

    if (currentIndex > 0) {

        currentIndex--;

        updateLesson();

        speakCurrent();

    }

}


/* HOME */

function goHome() {

    document.getElementById("lessonPage").classList.add("hidden");

    document.getElementById("homePage").classList.remove("hidden");

    window.speechSynthesis.cancel();
}
