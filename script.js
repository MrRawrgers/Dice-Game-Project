const solo = document.getElementById("solo");
const rollSolo = document.getElementById("rollSolo");
const rollDuo = document.getElementById("rollDuo");
const duo = document.getElementById("duo");
const reset = document.getElementById("reset");
const soloButton = document.getElementById("soloButton");
const rollSoloButton = document.getElementById("rollSoloButton");
const rollDuoButton = document.getElementById("rollDuoButton");
const duoButton = document.getElementById("duoButton");
const player1Dice = document.getElementById("player1Dice");
const playerDice = document.getElementById("playerDice");
const player2Dice = document.getElementById("player2Dice");
const player1H = document.getElementById("player1H");
const playerH = document.getElementById("playerH");
const player2H = document.getElementById("player2H");
const player1DiceImg = document.getElementById("player1DiceImg");
const playerDiceImg = document.getElementById("playerDiceImg");
const player2DiceImg = document.getElementById("player2DiceImg");
const player1Score = document.getElementById("player1Score");
const playerScore = document.getElementById("playerScore");
const player2Score = document.getElementById("player2Score");
const resetButton = document.getElementById("resetButton");

let score = 0;
let score1 = 0;
let score2 = 0;

// button to launch a two player game

duoButton.addEventListener("click", () => {
    solo.style.display = "none";
    duo.style.display = "none";
    playerDice.style.display = "none";
    player1Dice.style.display = "block";
    player2Dice.style.display = "block";
    playerH.style.display = "none";
    player1H.style.display = "block";
    player2H.style.display = "block";
    rollDuo.style.display = "block";
    player1Score.textContent = 0;
    playerScore.textContent = 0;
    player2Score.textContent = 0;
    player1DiceImg.src = "dice1.png";
    player2DiceImg.src = "dice1.png";
    score = 0;
    score1 = 0;
    score2 = 0;
})

// button to launch a single player game

soloButton.addEventListener("click", () => {
    solo.style.display = "none";
    duo.style.display = "none";
    rollSolo.style.display = "block";
    playerH.style.display = "block";
    player1H.style.display = "none";
    player2H.style.display = "none";
    player1Dice.style.display = "none";
    player2Dice.style.display = "none";
    playerDice.style.display = "block";
    playerDiceImg.src = "dice1.png";
    playerScore.textContent = 0;
    score = 0;
    score1 = 0;
    score2 = 0;
})

// Solo game

rollSoloButton.addEventListener("click", () => {
    number = Math.floor((Math.random() * 6) + 1);
    if (number == 1) {
        playerDiceImg.src = "dice1.png";
        score = score + number;
        playerScore.textContent = `You lose. Final score was ${score}`;
        solo.style.display = "block";
        rollSolo.style.display = "none";
        rollDuo.style.display = "none";
        duo.style.display = "block";
    } else if (number == 2) {
        playerDiceImg.src = "dice2.png";
        score = score + number;
        playerScore.textContent = score;
        if (score >= 20) {
            playerScore.textContent = `You win! Final score was ${score}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number == 3) {
        playerDiceImg.src = "dice3.png";
        score = score + number;
        playerScore.textContent = score;
        if (score >= 20) {
            playerScore.textContent = `You win! Final score was ${score}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number == 4) {
        playerDiceImg.src = "dice4.png";
        score = score + number;
        playerScore.textContent = score;
        if (score >= 20) {
            playerScore.textContent = `You win! Final score was ${score}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number == 5) {
        playerDiceImg.src = "dice5.png";
        score = score + number;
        playerScore.textContent = score;
        if (score >= 20) {
            playerScore.textContent = `You win! Final score was ${score}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number == 6) {
        playerDiceImg.src = "dice6.png";
        score = score + number;
        playerScore.textContent = score;
        if (score >= 20) {
            playerScore.textContent = `You win! Final score was ${score}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    }

})

// 2 player player 1 function

rollDuoButton.addEventListener("click", () => {
    number1 = Math.floor((Math.random() * 6) + 1);
    if (number1 == 1) {
        player1DiceImg.src = "dice1.png";
        score1 = score1 + number1;
        player1Score.textContent = `You lose. Score = ${score1}`;
        solo.style.display = "block";
        rollSolo.style.display = "none";
        rollDuo.style.display = "none";
        duo.style.display = "block";
    } else if (number1 == 2) {
        player1DiceImg.src = "dice2.png";
        score1 = score1 + number1;
        player1Score.textContent = `Score = ${score1}`;
        if (score1 >= 20) {
            player1Score.textContent = `You win! Score = ${score1}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number1 == 3) {
        player1DiceImg.src = "dice3.png";
        score1 = score1 + number1;
        player1Score.textContent = `Score = ${score1}`;
        if (score1 >= 20) {
            player1Score.textContent = `You win! Score = ${score1}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number1 == 4) {
        player1DiceImg.src = "dice4.png";
        score1 = score1 + number1;
        player1Score.textContent = `Score = ${score1}`;
        if (score1 >= 20) {
            player1Score.textContent = `You win! Score = ${score1}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number1 == 5) {
        player1DiceImg.src = "dice5.png";
        score1 = score1 + number1;
        player1Score.textContent = `Score = ${score1}`;
        if (score1 >= 20) {
            player1Score.textContent = `You win! Score = ${score1}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number1 == 6) {
        player1DiceImg.src = "dice6.png";
        score1 = score1 + number1;
        player1Score.textContent = `Score = ${score1}`;
        if (score1 >= 20) {
            player1Score.textContent = `You win! Score = ${score1}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    }

})

// 2 player player 2 function

rollDuoButton.addEventListener("click", () => {
    number2 = Math.floor((Math.random() * 6) + 1);
    if (number2 == 1) {
        player2DiceImg.src = "dice1.png";
        score2 = score2 + number2;
        player2Score.textContent = `You lose. Score = ${score2}`;
        solo.style.display = "block";
        rollSolo.style.display = "none";
        rollDuo.style.display = "none";
        duo.style.display = "block";
    } else if (number2 == 2) {
        player2DiceImg.src = "dice2.png";
        score2 = score2 + number2;
        player2Score.textContent = `Score = ${score2}`;
        if (score2 >= 20) {
            player2Score.textContent = `You win! Score = ${score2}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number2 == 3) {
        player2DiceImg.src = "dice3.png";
        score2 = score2 + number2;
        player2Score.textContent = `Score = ${score2}`;
        if (score2 >= 20) {
            player2Score.textContent = `You win! Score = ${score2}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number2 == 4) {
        player2DiceImg.src = "dice4.png";
        score2 = score2 + number2;
        player2Score.textContent = `Score = ${score2}`;
        if (score2 >= 20) {
            player2Score.textContent = `You win! Score = ${score2}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number2 == 5) {
        player2DiceImg.src = "dice5.png";
        score2 = score2 + number2;
        player2Score.textContent = `Score = ${score2}`;
        if (score2 >= 20) {
            player2Score.textContent = `You win! Score = ${score2}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    } else if (number2 == 6) {
        player2DiceImg.src = "dice6.png";
        score2 = score2 + number2;
        player2Score.textContent = `Score = ${score2}`
        if (score2 >= 20) {
            player2Score.textContent = `You win! Score = ${score2}`;
            solo.style.display = "block";
            rollSolo.style.display = "none";
            rollDuo.style.display = "none";
            duo.style.display = "block";
        }
    }

})

