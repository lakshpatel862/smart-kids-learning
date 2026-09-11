* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: "Comic Sans MS", "Trebuchet MS", sans-serif;
    min-height: 100vh;
    background: linear-gradient(135deg, #dff9ff, #fff3c7, #fce1ff);
    overflow-x: hidden;
}


/* ================= GENERAL ================= */

.hidden {
    display: none !important;
}

.page {
    min-height: 100vh;
    padding: 25px;
    text-align: center;
}

h1 {
    color: #ff4f91;
    margin: 20px 0 8px;
    font-size: 38px;
}

.pageSubtitle {
    color: #555;
    font-size: 20px;
    margin-bottom: 25px;
}


/* ================= HOME ================= */

#homePage {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    padding: 30px 20px 60px;
}

.mainHeader {
    text-align: center;
    position: relative;
    z-index: 5;
}

.rainbow {
    font-size: 55px;
    animation: rainbowMove 2s infinite alternate;
}

.mainHeader h1 {
    font-size: 48px;
    margin: 5px;
}

.mainHeader p {
    font-size: 22px;
    color: #444;
}


/* ================= SKY ================= */

.sky {
    position: absolute;
    width: 100%;
    height: 180px;
    top: 0;
    left: 0;
    pointer-events: none;
}

.cloud {
    position: absolute;
    font-size: 70px;
    opacity: .7;
}

.cloud1 {
    left: 5%;
    animation: cloudMove 12s linear infinite;
}

.cloud2 {
    right: 8%;
    animation: cloudMove 15s linear infinite reverse;
}

.sun {
    position: absolute;
    right: 45%;
    top: 10px;
    font-size: 60px;
    animation: sunRotate 5s linear infinite;
}


/* ================= CARTOONS ================= */

.cartoon {
    position: fixed;
    font-size: 55px;
    z-index: 2;
    pointer-events: none;
}

.cartoon1 {
    left: 2%;
    bottom: 20px;
    animation: bounce 2s infinite;
}

.cartoon2 {
    right: 3%;
    bottom: 30px;
    animation: bounce 2.5s infinite;
}

.cartoon3 {
    left: 45%;
    bottom: 5px;
    animation: jump 1.8s infinite;
}


/* ================= MENU ================= */

.menuSection {
    max-width: 1200px;
    margin: 50px auto 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;

    position: relative;
    z-index: 5;
}

.featureCard {
    padding: 30px 20px;
    border-radius: 30px;

    background: rgba(255,255,255,.9);

    box-shadow:
        0 15px 35px rgba(0,0,0,.15);

    transition: .3s;
}

.featureCard:hover {
    transform: translateY(-10px) scale(1.02);
}

.cardIcon {
    font-size: 65px;
    animation: bounce 2s infinite;
}

.featureCard h2 {
    color: #333;
    margin: 12px 0;
    font-size: 26px;
}

.featureCard p {
    color: #666;
    margin-bottom: 20px;
}


/* ================= BUTTONS ================= */

button {
    border: none;
    cursor: pointer;

    font-family: inherit;
    font-weight: bold;

    transition: .25s;
}

button:hover {
    transform: scale(1.06);
}

.bigButton {
    width: 100%;
    padding: 16px;
    border-radius: 20px;

    color: white;
    font-size: 19px;

    box-shadow: 0 8px 15px rgba(0,0,0,.2);
}

.alphabetButton {
    background: linear-gradient(135deg, #ff4f91, #ff8a65);
}

.numberButton {
    background: linear-gradient(135deg, #00a8ff, #7c4dff);
}

.tableButton {
    background: linear-gradient(135deg, #00b894, #00cec9);
}

.testButton {
    margin-top: 12px;
    width: 100%;
    padding: 13px;

    border-radius: 18px;

    background: #ffe066;
    color: #333;

    font-size: 17px;
}


/* ================= HOME BUTTON ================= */

.homeBtn {
    position: fixed;
    top: 15px;
    left: 15px;

    background: linear-gradient(135deg, #ff7675, #fd79a8);
    color: white;

    padding: 12px 20px;
    border-radius: 20px;

    font-size: 17px;

    z-index: 100;
}


/* ================= ALPHABET ================= */

.alphabetGrid {
    max-width: 1100px;
    margin: 30px auto;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 18px;
}

.letterBox {
    height: 120px;

    border-radius: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 55px;
    font-weight: bold;

    color: white;

    background: linear-gradient(
        135deg,
        #ff7675,
        #fd79a8,
        #6c5ce7,
        #00cec9
    );

    box-shadow: 0 10px 20px rgba(0,0,0,.2);

    cursor: pointer;

    animation: boxFloat 2s infinite alternate;
}

.letterBox:hover {
    transform: rotate(-4deg) scale(1.08);
}


/* ================= LESSON ================= */

.lessonBox,
.numberLessonBox,
.tableLessonBox {
    max-width: 750px;

    margin: 80px auto 20px;

    background: rgba(255,255,255,.95);

    padding: 40px;

    border-radius: 35px;

    box-shadow: 0 20px 45px rgba(0,0,0,.2);
}

.lessonLetter {
    font-size: 130px;
    font-weight: bold;

    background: linear-gradient(
        90deg,
        #ff0000,
        #ff9900,
        #00aa00,
        #008cff,
        #8e44ad
    );

    -webkit-background-clip: text;
    color: transparent;

    animation: letterDrop 1s ease-out;
}

.lessonEmoji {
    font-size: 120px;

    animation: bounce 1.5s infinite;
}

.lessonBox h2 {
    font-size: 38px;
    color: #444;
    margin: 15px;
}


/* ================= SPEAK ================= */

.speakButton {
    background: linear-gradient(135deg, #6c5ce7, #0984e3);
    color: white;

    padding: 14px 25px;

    border-radius: 20px;

    font-size: 18px;
}


/* ================= NAVIGATION ================= */

.navigationButtons {
    display: flex;
    justify-content: center;
    gap: 15px;

    margin-top: 25px;
}

.navigationButtons button {
    padding: 13px 22px;

    border-radius: 18px;

    background: #ffeaa7;

    color: #333;

    font-size: 16px;
}


/* ================= NUMBERS ================= */

.numbersGrid {
    max-width: 1200px;

    margin: 30px auto;

    display: grid;

    grid-template-columns: repeat(8, 1fr);

    gap: 12px;
}

.numberBox {
    min-height: 80px;

    border-radius: 18px;

    background: white;

    border: 4px solid #74b9ff;

    cursor: pointer;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    font-size: 27px;
    font-weight: bold;

    box-shadow: 0 7px 12px rgba(0,0,0,.12);

    transition: .2s;
}

.numberBox:hover {
    transform: scale(1.1) rotate(2deg);
}


/* Rainbow number */

.rainbowNumber {
    background: linear-gradient(
        90deg,
        red,
        orange,
        green,
        blue,
        purple
    );

    -webkit-background-clip: text;
    color: transparent;
}


/* ================= NUMBER LESSON ================= */

#bigNumber {
    font-size: 120px;
    font-weight: bold;

    background: linear-gradient(
        90deg,
        red,
        orange,
        yellow,
        green,
        blue,
        purple
    );

    -webkit-background-clip: text;
    color: transparent;

    animation: letterDrop 1s ease-out;
}

#ballDisplay {
    font-size: 35px;

    max-width: 500px;

    margin: 20px auto;

    line-height: 1.6;
}

#numberWords {
    color: #555;
    font-size: 30px;
}


/* ================= TABLES ================= */

.tablesGrid {
    max-width: 1100px;

    margin: 30px auto;

    display: grid;

    grid-template-columns: repeat(8, 1fr);

    gap: 12px;
}

.tableBox {
    padding: 18px 5px;

    background: white;

    border-radius: 18px;

    border: 3px solid #55efc4;

    font-size: 22px;

    cursor: pointer;

    box-shadow: 0 7px 12px rgba(0,0,0,.1);
}

.tableBox:hover {
    transform: scale(1.08);
    background: #e8fff8;
}

.tableLessonBox h1 {
    color: #00a884;
}

.tableLine {
    font-size: 25px;

    margin: 10px;

    padding: 10px;

    border-radius: 15px;

    background: #f1f2f6;
}


/* ================= TEST ================= */

.testBox {
    max-width: 700px;

    margin: 100px auto 30px;

    padding: 35px;

    background: white;

    border-radius: 35px;

    box-shadow: 0 20px 45px rgba(0,0,0,.2);
}

.testTop {
    display: flex;
    justify-content: space-between;

    font-size: 20px;
    font-weight: bold;

    color: #6c5ce7;

    margin-bottom: 30px;
}

.testQuestion {
    min-height: 130px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 65px;
    font-weight: bold;

    color: #333;

    margin-bottom: 25px;
}

#testAnswer {
    width: 100%;

    padding: 17px;

    border: 3px solid #74b9ff;

    border-radius: 18px;

    font-size: 20px;

    outline: none;

    text-align: center;
}

.submitButton {
    width: 100%;

    margin-top: 15px;

    padding: 15px;

    border-radius: 18px;

    background: linear-gradient(135deg, #00b894, #00cec9);

    color: white;

    font-size: 19px;
}

#answerMessage {
    margin-top: 15px;

    font-size: 20px;

    font-weight: bold;

    min-height: 25px;
}


/* ================= RESULT ================= */

.resultBox {
    max-width: 800px;

    margin: 70px auto;

    padding: 40px;

    background: white;

    border-radius: 40px;

    box-shadow: 0 20px 50px rgba(0,0,0,.25);

    text-align: center;
}

.trophy {
    font-size: 100px;

    animation: trophy 1s infinite alternate;
}

.resultBox h1 {
    font-size: 45px;
}

.resultMessage {
    font-size: 23px;

    color: #555;

    margin: 15px;
}

.resultCards {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 15px;

    margin: 30px 0;
}

.resultCards div {
    padding: 20px 10px;

    border-radius: 20px;

    background: #f1f2f6;
}

.resultCards span {
    display: block;
    font-size: 35px;
}

.resultCards strong {
    display: block;
    font-size: 25px;

    margin: 7px;
}

.resultCards small {
    color: #777;
}

.restartButton,
.homeResultButton {
    padding: 15px 25px;

    border-radius: 20px;

    font-size: 18px;

    margin: 7px;
}

.restartButton {
    background: #ffe066;
}

.homeResultButton {
    background: #74b9ff;
    color: white;
}


/* ================= ANIMATIONS ================= */

@keyframes bounce {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-15px);
    }
}

@keyframes jump {

    0%,100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-30px);
    }
}

@keyframes letterDrop {

    from {
        transform: translateY(-150px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes boxFloat {

    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(-5px);
    }
}

@keyframes rainbowMove {

    from {
        transform: rotate(-5deg);
    }

    to {
        transform: rotate(5deg);
    }
}

@keyframes cloudMove {

    from {
        transform: translateX(-30px);
    }

    to {
        transform: translateX(30px);
    }
}

@keyframes sunRotate {

    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes trophy {

    from {
        transform: rotate(-8deg) scale(1);
    }

    to {
        transform: rotate(8deg) scale(1.1);
    }
}


/* ================= MOBILE ================= */

@media(max-width: 900px) {

    .menuSection {
        grid-template-columns: 1fr;
    }

    .alphabetGrid {
        grid-template-columns: repeat(4, 1fr);
    }

    .numbersGrid {
        grid-template-columns: repeat(5, 1fr);
    }

    .tablesGrid {
        grid-template-columns: repeat(5, 1fr);
    }

    .resultCards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media(max-width: 600px) {

    h1 {
        font-size: 30px;
    }

    .alphabetGrid {
        grid-template-columns: repeat(3, 1fr);
    }

    .numbersGrid {
        grid-template-columns: repeat(4, 1fr);
    }

    .tablesGrid {
        grid-template-columns: repeat(4, 1fr);
    }

    .lessonLetter {
        font-size: 90px;
    }

    #bigNumber {
        font-size: 85px;
    }

    .resultCards {
        grid-template-columns: 1fr 1fr;
    }
}
