const frm = document.querySelector('form');

const valor15Uso = document.getElementById('#inValor');
const tempoUso = document.querySelector('#inTempo');

frm.addEventListener('submit', (e) => {
  const valor15min = Number(frm.inValor.value);
  const tempoUso = Number(frm.inTempo.value);
  const pagarTotal = Math.ceil(tempoUso / 15) * valor15min;

  document.querySelector('#outValor').textContent = `Valor a pagar: R$: ${pagarTotal.toFixed(2)}`;

  e.preventDefault();
});