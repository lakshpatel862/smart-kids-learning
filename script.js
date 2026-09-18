/* ================= ANIMALS ================= */

const animals = [

    ["Lion", "🦁", "Roar Roar!"],
    ["Tiger", "🐯", "Roar Roar!"],
    ["Elephant", "🐘", "Trumpet!"],
    ["Dog", "🐶", "Woof Woof!"],
    ["Cat", "🐱", "Meow Meow!"],
    ["Cow", "🐮", "Moo Moo!"],
    ["Horse", "🐴", "Neigh Neigh!"],
    ["Goat", "🐐", "Maa Maa!"],
    ["Sheep", "🐑", "Baa Baa!"],
    ["Monkey", "🐵", "Ooh Ooh Aah Aah!"],
    ["Rabbit", "🐰", "Squeak Squeak!"],
    ["Bear", "🐻", "Growl Growl!"],
    ["Panda", "🐼", "Panda!"],
    ["Fox", "🦊", "Yip Yip!"],
    ["Wolf", "🐺", "Awoooo!"],
    ["Pig", "🐷", "Oink Oink!"],
    ["Chicken", "🐔", "Cluck Cluck!"],
    ["Duck", "🦆", "Quack Quack!"],
    ["Frog", "🐸", "Ribbit Ribbit!"],
    ["Snake", "🐍", "Hiss Hiss!"],
    ["Penguin", "🐧", "Penguin!"],
    ["Owl", "🦉", "Hoot Hoot!"],
    ["Parrot", "🦜", "Hello!"],
    ["Fish", "🐟", "Blub Blub!"],
    ["Dolphin", "🐬", "Click Click!"],
    ["Whale", "🐳", "Whooo!"],
    ["Octopus", "🐙", "Octopus!"],
    ["Butterfly", "🦋", "Butterfly!"],
    ["Bee", "🐝", "Buzz Buzz!"],
    ["Turtle", "🐢", "Turtle!"]

];


function openAnimals() {

    showPage("animalPage");

    createAnimals();

}


/* =========================================
          CREATE ANIMAL CARDS
========================================= */

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
            '</div>' +

            '<div class="animalSound">' +
            '🔊 ' + animal[2] +
            '</div>';


        button.addEventListener(
            "click",
            function() {

                speakAnimal(animal, button);

            }
        );


        grid.appendChild(button);

    });

}


/* =========================================
          ANIMAL NAME + SOUND
========================================= */

function speakAnimal(animal, button) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Your browser does not support voice."
        );

        return;

    }


    speechSynthesis.cancel();


    /* Animation */

    button.classList.remove("playing");

    void button.offsetWidth;

    button.classList.add("playing");


    /* Animal voice */

    const speech =
        new SpeechSynthesisUtterance(

            animal[0] +
            "... " +
            animal[2]

        );


    speech.rate = 0.65;

    speech.pitch = 1.15;

    speech.volume = 1;


    speech.onend = function() {

        button.classList.remove("playing");

    };


    speechSynthesis.speak(speech);

}