"use strict";
function dado() {
  let max = 6;
  let min = 1;
  return Math.round(Math.random() * (max - min) + min);
}

function playGame() {
  let score = 0;
  for (let i = 1; score < 50; i++) {
    let result = dado();
    score = score + result;
    console.log(`Tirada: ${i}  Dado: ${result} Puntuacion Total: ${score}`);
    if (score >= 50) {
      console.log(
        `Congratulations!! ha salido un ${result} y has obtenido ${score} puntos`
      );
    }
  }
}
playGame();
