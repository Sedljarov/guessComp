const btnLess = document.querySelector("#btn-less");
const btnMore = document.querySelector("#btn-more");
const btnYes = document.querySelector("#btn-yes");
const btnRestart = document.querySelector("#btn-restart");
const output = document.querySelector("#output");

let min = 1;
let max = 100;
let num = 0;

function resetGame() {
  min = 1;
  max = 100;
  num = Math.floor((min + max) / 2);
  output.innerText = num;
}

num = Math.floor((min + max) / 2);
output.innerText = num;

btnYes.addEventListener("click", function () {
  output.innerText = "I WIN";
});

btnLess.addEventListener("click", function () {
  max = Math.floor((min + max) / 2) + 1;
  num = Math.floor((min + max) / 2);
  output.innerText = num;
});

btnMore.addEventListener("click", function () {
  min = Math.floor((min + max) / 2) + 1;
  num = Math.floor((min + max) / 2);
  output.innerText = num;
});

btnRestart.addEventListener("click", function () {
  resetGame();
});
