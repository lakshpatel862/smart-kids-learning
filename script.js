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
