let stars = 0;
let lessons = 0;
let badges = 0;

function startLearning() {
    document.querySelector(".cards").scrollIntoView({
        behavior: "smooth"
    });
}

function openLesson(topic) {
    lessons++;
    stars += 5;
    updateProgress();

    let message = "";

    if (topic === "ABC") {
        message = "🔤 ABC\n\nA - Apple 🍎\nB - Ball ⚽\nC - Cat 🐱";
    } 
    else if (topic === "Numbers") {
        message = "🔢 Numbers\n\n1 - One\n2 - Two\n3 - Three\n4 - Four\n5 - Five";
    }
    else if (topic === "Colors") {
        message = "🎨 Colors\n\n🔴 Red\n🔵 Blue\n🟡 Yellow\n🟢 Green";
    }
    else if (topic === "Shapes") {
        message = "🔷 Shapes\n\n⭕ Circle\n⬜ Square\n🔺 Triangle";
    }
    else if (topic === "Animals") {
        message = "🐶 Animals\n\n🐶 Dog\n🐱 Cat\n🦁 Lion\n🐘 Elephant";
    }
    else if (topic === "Fruits") {
        message = "🍎 Fruits\n\n🍎 Apple\n🍌 Banana\n🍊 Orange\n🍇 Grapes";
    }
    else if (topic === "Vehicles") {
        message = "🚗 Vehicles\n\n🚗 Car\n🚌 Bus\n🚂 Train\n✈️ Aeroplane";
    }
    else if (topic === "Drawing") {
        message = "🖍️ Drawing\n\nUse your creativity and have fun! 🎨";
    }

    alert(message);
}

function startQuiz() {
    let answer = prompt(
        "🧠 QUIZ\n\nWhat comes after A?\n\n1. B\n2. C\n3. D"
    );

    if (answer === "1") {
        stars += 10;
        badges++;
        updateProgress();
        alert("🎉 Correct!\n⭐ You earned 10 stars!");
    } 
    else {
        alert("😊 Good try!\nCorrect answer is B.");
    }
}

function matchingGame() {
    let answer = prompt(
        "🧩 MATCHING GAME\n\nWhich animal says Meow?\n\n1. Dog 🐶\n2. Cat 🐱\n3. Lion 🦁"
    );

    if (answer === "2") {
        stars += 10;
        updateProgress();
        alert("🎉 Correct!\n⭐ You earned 10 stars!");
    } 
    else {
        alert("😊 Try again!");
    }
}

function dailyChallenge() {
    let answer = prompt(
        "⭐ DAILY CHALLENGE\n\nHow many fingers are on one hand?\n\n1. 3\n2. 5\n3. 10"
    );

    if (answer === "2") {
        stars += 15;
        badges++;
        updateProgress();
        alert("🏆 Excellent!\n⭐ You earned 15 stars!");
    } 
    else {
        alert("😊 Keep learning!");
    }
}

function showParentMessage() {
    alert(
        "👨‍👩‍👧 Parent Section\n\n" +
        "⭐ Stars: " + stars + "\n" +
        "📚 Lessons: " + lessons + "\n" +
        "🏆 Badges: " + badges
    );
}

function updateProgress() {
    document.getElementById("stars").textContent = stars;
    document.getElementById("lessons").textContent = lessons;
    document.getElementById("badges").textContent = badges;
}
const alphabetData = [
    { letter: "A", word: "Apple", emoji: "🍎" },
    { letter: "B", word: "Ball", emoji: "⚽" },
    { letter: "C", word: "Cat", emoji: "🐱" },
    { letter: "D", word: "Dog", emoji: "🐶" },
    { letter: "E", word: "Elephant", emoji: "🐘" },
    { letter: "F", word: "Fish", emoji: "🐟" },
    { letter: "G", word: "Grapes", emoji: "🍇" },
    { letter: "H", word: "Hat", emoji: "🎩" },
    { letter: "I", word: "Ice Cream", emoji: "🍦" },
    { letter: "J", word: "Juice", emoji: "🧃" },
    { letter: "K", word: "Kite", emoji: "🪁" },
    { letter: "L", word: "Lion", emoji: "🦁" },
    { letter: "M", word: "Mango", emoji: "🥭" },
    { letter: "N", word: "Nest", emoji: "🪺" },
    { letter: "O", word: "Orange", emoji: "🍊" },
    { letter: "P", word: "Parrot", emoji: "🦜" },
    { letter: "Q", word: "Queen", emoji: "👑" },
    { letter: "R", word: "Rabbit", emoji: "🐰" },
    { letter: "S", word: "Sun", emoji: "☀️" },
    { letter: "T", word: "Tiger", emoji: "🐯" },
    { letter: "U", word: "Umbrella", emoji: "☂️" },
    { letter: "V", word: "Van", emoji: "🚐" },
    { letter: "W", word: "Watch", emoji: "⌚" },
    { letter: "X", word: "Xylophone", emoji: "🎵" },
    { letter: "Y", word: "Yak", emoji: "🐂" },
    { letter: "Z", word: "Zebra", emoji: "🦓" }
];

let currentAlphabet = 0;

function openAlphabet() {
    currentAlphabet = 0;
    showAlphabet();
}

function showAlphabet() {
    const item = alphabetData[currentAlphabet];

    const message =
        "Letter " + item.letter + ". " +
        item.letter + " for " + item.word;

    document.body.innerHTML = `
        <div class="alphabet-learning">
            <button onclick="location.reload()">🏠 Home</button>

            <h1>🌈 Learn Alphabet</h1>

            <div class="alphabet-card" onclick="speakAlphabet()">
                <div class="big-letter">${item.letter}</div>

                <div class="big-picture">${item.emoji}</div>

                <h2>${item.letter} for ${item.word}</h2>

                <p>🔊 Click here to listen</p>
            </div>

            <div class="alphabet-buttons">
                <button onclick="previousAlphabet()">⬅️ Previous</button>

                <span>${currentAlphabet + 1} / 26</span>

                <button onclick="nextAlphabet()">Next ➡️</button>
            </div>
        </div>
    `;

    speak(message);
}

function speak(text) {
    if ("speechSynthesis" in window) {
        speechSynthesis.cancel();

        const voice = new SpeechSynthesisUtterance(text);
        voice.lang = "en-US";
        voice.rate = 0.8;
        voice.pitch = 1.2;

        speechSynthesis.speak(voice);
    }
}

function speakAlphabet() {
    const item = alphabetData[currentAlphabet];

    speak(
        item.letter + " for " + item.word
    );
}

function nextAlphabet() {
    if (currentAlphabet < 25) {
        currentAlphabet++;
        showAlphabet();
    } else {
        speak("You completed all the alphabets. Very good!");
    }
}

function previousAlphabet() {
    if (currentAlphabet > 0) {
        currentAlphabet--;
        showAlphabet();
    }
}
