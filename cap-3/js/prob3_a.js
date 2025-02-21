const form = document.querySelector("form");
const resp = document.querySelector("h3");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);

  const resposta = numero % 2 ? "é ímpar" : "é par";

  resp.innerText = `${numero} ${resposta}`;
});