let lotto1 = document.querySelector(".lotto-1");
let lotto2 = document.querySelector(".lotto-2");
let lotto3 = document.querySelector(".lotto-3");
let lotto4 = document.querySelector(".lotto-4");
let lotto5 = document.querySelector(".lotto-5");
let lotto6 = document.querySelector(".lotto-6");
let lotto7 = document.querySelector(".lotto-7");
const container = document.getElementById("circle-container");
const lottoBtn = document.querySelector(".gameBtn");
const resetBtn = document.querySelector(".resetBtn");

let lottoRad = [0, 0, 0, 0, 0, 0, 0];

lottoBtn.addEventListener("click", function nyLottoRad() {
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
  lottoBtn.innerHTML = "Ny rad";
});

resetBtn.addEventListener("click", function resetLotto() {
  lotto1.innerHTML = 0;
  lotto2.innerHTML = 0;
  lotto3.innerHTML = 0;
  lotto4.innerHTML = 0;
  lotto5.innerHTML = 0;
  lotto6.innerHTML = 0;
  lotto7.innerHTML = 0;
  container.classList.remove("gameOn");
  lottoBtn.innerHTML = "Spela!";
});
