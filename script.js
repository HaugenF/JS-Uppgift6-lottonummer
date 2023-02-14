const lotto1 = document.querySelector(".lotto-1");
const lotto2 = document.querySelector(".lotto-2");
const lotto3 = document.querySelector(".lotto-3");
const lotto4 = document.querySelector(".lotto-4");
const lotto5 = document.querySelector(".lotto-5");
const lotto6 = document.querySelector(".lotto-6");
const lotto7 = document.querySelector(".lotto-7");
const container = document.getElementById("circle-container");
const lottoBtn = document.querySelector(".gameBtn");
const resetBtn = document.querySelector(".resetBtn");
const lottoNr = [lotto1, lotto2, lotto3, lotto4, lotto5, lotto6, lotto7];
let lottoRad = [0, 0, 0, 0, 0, 0, 0];

lottoBtn.addEventListener("click", function nyLottoRad() {
  for (let i = 0; i < lottoRad.length; i++) {
    lottoRad[i] = Math.floor(Math.random() * 20 + 1);
    lottoNr[i].innerHTML = lottoRad[i];
  }
  container.classList.add("gameOn");
  lottoBtn.innerHTML = "Ny rad";
});

resetBtn.addEventListener("click", function resetLotto() {
  for (let i = 0; i < lottoRad.length; i++) {
    lottoNr[i].innerHTML = 0;
  }

  container.classList.remove("gameOn");
  lottoBtn.innerHTML = "Spela!";
});
