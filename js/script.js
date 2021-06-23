
const player1 = document.querySelector(".box-player1");
const player2 = document.querySelector(".box-player2");
const score1 = document.querySelector(".palyer-number1");
const score2 = document.querySelector(".palyer-number2");
const current1 = document.querySelector(".number-current1");
const current2 = document.querySelector(".number-current2");
const newGameBtn = document.querySelector(".btn-new-game");
const img = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn-roll-dice");
const holdBtn = document.querySelector(".btn-hold");
let turn;


function eventListeners() {
    document.addEventListener("DOMContentLoaded", random);
    rollBtn.addEventListener("click", rollBtnClick);
    holdBtn.addEventListener("click", holdBtnClick);
    newGameBtn.addEventListener("click", () => {
        location.reload();
    });
}
eventListeners();


function random() {
    turn = Math.round(Math.random());
    turn == 1 ? player1.classList.add("active") : player2.classList.add("active");
}

function rollBtnClick() {
    const number = Math.floor(Math.random() * 6) + 1;
    img.classList.remove("d-none");
    img.src = "img/imges/dice " + number + ".png";
    let current = turn == 1 ? current1 : current2;
    if (number == 1) {
        current.textContent = 0;
        return changeTurn();
    }
    current.textContent = number + Number(current.textContent);
}

function holdBtnClick() {
    const score = turn == 1 ? score1 : score2;
    const current = turn == 1 ? current1 : current2;
    const player = turn == 1 ? player1 : player2;
    const number = Number(current.textContent) + Number(score.textContent);
    score.textContent = number;
    current.textContent = 0;
    if (number >= 100) {
        player.style.background = "gray";
        rollBtn.disabled = true;
        holdBtn.disabled = true;
        return;
    }
    changeTurn();
}

function changeTurn() {
    const player = turn == 1 ? player1 : player2;
    player.classList.remove("active");
    turn = turn == 1 ? 0 : 1;
    turn == 1 ? player1.classList.add("active") : player2.classList.add("active");
}
