* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: "Comic Sans MS", Arial, sans-serif;
    background: linear-gradient(135deg, #73d8ff, #a88cff, #ff9dca);
    min-height: 100vh;
    text-align: center;
    color: #333;
}

header {
    background: rgba(255,255,255,0.85);
    padding: 20px;
    border-bottom: 4px solid white;
}

header h1 {
    margin: 0;
    font-size: 38px;
    color: #7b2cff;
}

header p {
    font-size: 21px;
    margin: 8px;
}

.stars {
    display: inline-block;
    background: #fff3a6;
    padding: 8px 18px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: bold;
}

.menu {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 18px;
    max-width: 900px;
    margin: 35px auto;
    padding: 20px;
}

.menu button {
    border: none;
    border-radius: 25px;
    padding: 25px 10px;
    background: white;
    box-shadow: 0 7px 15px rgba(0,0,0,0.18);
    cursor: pointer;
    font-size: 45px;
    transition: 0.2s;
}

.menu button:hover {
    transform: translateY(-6px) scale(1.03);
}

.menu button span {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
}

.page {
    display: none;
    background: rgba(255,255,255,0.92);
    max-width: 1000px;
    margin: 25px auto;
    padding: 25px;
    border-radius: 30px;
}

.page h2 {
    font-size: 30px;
    color: #702cff;
}

.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
}

.letterCard {
    background: white;
    border-radius: 20px;
    padding: 15px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    cursor: pointer;
}

.letter {
    font-size: 50px;
    font-weight: bold;
    color: #ff4d8d;
}

.word {
    font-size: 20px;
    font-weight: bold;
}

.emoji {
    font-size: 40px;
}

.numberCards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    gap: 10px;
}

.number {
    background: white;
    border-radius: 15px;
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.12);
}

.number:hover,
.letterCard:hover,
.animalCards div:hover,
.color:hover {
    transform: scale(1.05);
}

.colorCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.color {
    width: 150px;
    padding: 25px;
    border-radius: 20px;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

.red {
    background: #ff7777;
}

.blue {
    background: #75cfff;
}

.green {
    background: #80df91;
}

.yellow {
    background: #ffe66d;
}

.shape {
    width: 150px;
    padding: 25px;
    background: white;
    border-radius: 20px;
    font-size: 25px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}

.animalCards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
}

.animalCards div {
    background: white;
    border-radius: 25px;
    padding: 25px;
    font-size: 65px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    cursor: pointer;
}

.animalCards b {
    display: block;
    font-size: 20px;
}

.quizBox {
    background: #fff7c7;
    padding: 25px;
    border-radius: 25px;
    max-width: 600px;
    margin: auto;
}

.quizBox h3 {
    font-size: 25px;
}

.quizBox button {
    background: white;
    border: 3px solid #7b2cff;
    padding: 12px 20px;
    margin: 8px;
    border-radius: 15px;
    cursor: pointer;
    font-size: 17px;
}

.quizBox button:hover {
    background: #e8dfff;
}

.back {
    margin-top: 25px;
    padding: 12px 25px;
    border: none;
    border-radius: 20px;
    background: #7b2cff;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

footer {
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
}

@media (max-width: 600px) {

    header h1 {
        font-size: 28px;
    }

    header p {
        font-size: 17px;
    }

    .menu {
        grid-template-columns: repeat(2, 1fr);
        padding: 12px;
    }

    .menu button {
        padding: 20px 5px;
        font-size: 35px;
    }

    .menu button span {
        font-size: 15px;
    }

    .page {
        margin: 12px;
        padding: 15px;
    }

    .letter {
        font-size: 40px;
    }

    .animalCards div {
        font-size: 50px;
    }
}
