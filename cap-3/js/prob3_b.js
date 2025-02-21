const form = document.querySelector("form");
const inVelocidadePermitida = document.querySelector("#velocidadePermitida");
const inVelocidadeCondutor = document.querySelector("#velocidadeCondutor");
const outResposta = document.querySelector("#resposta");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const velocidadePermitida = Number(inVelocidadePermitida.value);
  const velocidadeCondutor = Number(inVelocidadeCondutor.value);

  if (velocidadeCondutor <= velocidadePermitida) {
    outResposta.textContent = "Sem multa";
  } else {
    const maisVinte = velocidadePermitida * 1.2;
    if (velocidadeCondutor <= maisVinte) {
      outResposta.textContent = "Multa leve";
    } else {
      outResposta.textContent = "Multa grave";
    } 
  }
});