let lotto1 = document.querySelector(".lotto-1");
let lotto2 = document.querySelector(".lotto-2");
let lotto3 = document.querySelector(".lotto-3");
let lotto4 = document.querySelector(".lotto-4");
let lotto5 = document.querySelector(".lotto-5");
let lotto6 = document.querySelector(".lotto-6");
let lotto7 = document.querySelector(".lotto-7");
const container = document.getElementById("circle-container");
const startLotto = document.querySelector(".gameBtn");

let lottoRad = [0, 0, 0, 0, 0, 0, 0];

startLotto.addEventListener("click", function nyLottoRad() {
  for (let i = 0; i < lottoRad.length; i++) {
    lottoRad[i] = Math.floor(Math.random() * 20 + 1);
  }
  lotto1.innerHTML = lottoRad[0];
  lotto2.innerHTML = lottoRad[1];
  lotto3.innerHTML = lottoRad[2];
  lotto4.innerHTML = lottoRad[3];
  lotto5.innerHTML = lottoRad[4];
  lotto6.innerHTML = lottoRad[5];
  lotto7.innerHTML = lottoRad[6];
  container.classList.add("gameOn");
});
