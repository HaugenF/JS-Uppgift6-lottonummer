let lottoRad = [0, 0, 0, 0, 0, 0, 0];

console.log(lottoRad);

function nyLottoRad() {
  for (let i = 0; i < lottoRad.length; i++) {
    lottoRad[i] = Math.floor(Math.random() * 20 + 1);
  }
}
