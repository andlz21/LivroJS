const form = document.querySelector("form");

const resp = document.getElementById("outResposta");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const chin = Number(form.inNumeroChinchilas.value);
  const anos = Number(form.inNumeroAnos.value);


  let resposta = "";
  let total = chin;

  for (let i = 1; i <= anos; i++) {
    resposta = resposta + i + "º Ano: " + total + " Chinchilas\n";
    total *= 3;

    resp.innerText = resposta;
  }
});