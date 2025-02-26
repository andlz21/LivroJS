const form = document.querySelector("form");
const resp = document.getElementById("outRespostaFruta");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fruta = form.inNomeFruta.value;
  const numero = Number(form.inNumero.value);
  let resposta = '';

  for (let i = 1; i < numero; i++) {
    resposta = resposta + fruta + " * ";

    resp.innerText = resposta + fruta;
  }
});