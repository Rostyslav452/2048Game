"use strict";

const Game = require("../modules/Game.class");
const game = new Game();

const mainButton = document.querySelector(".button");
const gameScore = document.querySelector(".game-score");
const gameField = document.querySelector(".game-field");
const messageLose = document.querySelector(".message-lose");
const messageWin = document.querySelector(".message-win");
const messageStart = document.querySelector(".message-start");

let previousState = null;

mainButton.addEventListener("click", () => {
  if (mainButton.classList.contains("start")) {
    game.start();

    mainButton.textContent = "Restart";
    mainButton.classList.remove("start");
    mainButton.classList.add("restart");

    messageStart.classList.add("hidden");
  } else {
    game.restart();
  }
  messageWin.classList.add("hidden");
  messageLose.classList.add("hidden");

  gameScore.textContent = game.getScore();
  update();
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  switch (e.key) {
    case "ArrowLeft":
      game.moveLeft();
      break;
    case "ArrowRight":
      game.moveRight();
      break;
    case "ArrowUp":
      game.moveUp();
      break;
    case "ArrowDown":
      game.moveDown();
      break;
  }
  update();

  switch (game.getStatus()) {
    case "win":
      messageWin.classList.remove("hidden");
      break;
    case "lose":
      messageLose.classList.remove("hidden");
      break;
  }
});

function update() {
  const fields = game.getState();

  [...gameField.rows].forEach((row, i) => {
    [...row.cells].forEach((cell, j) => {
      const currentValue = fields[i][j];
      const prevValue = previousState ? previousState[i][j] : 0;

      cell.textContent = "";
      cell.className = "field-cell";

      if (currentValue !== 0) {
        cell.textContent = currentValue;
        cell.classList.add(`field-cell--${currentValue}`);

        if (prevValue === 0) {
          cell.classList.add("field-cell--new");
        } else if (prevValue !== currentValue) {
          cell.classList.add("field-cell--merged");
        }
      }
    });
  });

  gameScore.textContent = game.getScore();
  previousState = fields.map((row) => [...row]);
}
