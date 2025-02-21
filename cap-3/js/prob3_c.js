const form = document.querySelector("form");
const inValor = document.querySelector("#inValor");
const btConfirmar = document.querySelector("#btConfirmar");
const outTempo = document.querySelector("#outRespostaTempo");
const outTroco = document.querySelector("#outRespostaTroco");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valor = Number(inValor.value);

  if (valor < 1.00) {
    alert("Valor Insuficiente (no mínimo, R$ 1.00)");
    inValor.focus();
    return;
  }

  let tempo = 0;
  let troco = 0;

  if (valor >= 3.00) {
    tempo = 120;
    troco = valor - 3.00;
  } else if (valor >= 1.75) {
    tempo = 60;
    troco = valor - 1.75;
  } else {
    tempo = 30;
    troco = valor - 1.00;
  }

  outRespostaTempo.textContent = `Tempo: ${tempo} minutos`;
  if (troco > 0) {
    outRespostaTroco.textContent = `Troco: R$ ${troco.toFixed(2)}`;
  }
});
