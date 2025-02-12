const frm = document.querySelector('form');
const resp1 = document.querySelector('#outMedicamento');
const resp2 = document.querySelector('#outPromocao');

frm.addEventListener('submit', (e) => {
  const medicamento = frm.inMedicamento.value;
  const preco = parseFloat(frm.inPreco.value);

  const promocao = Math.floor(preco * 2);

  resp1.textContent = `Promoção de ${medicamento}`;
  resp2.textContent = `Leve 2 por apenas R$: ${promocao.toFixed(2)}`;
  e.preventDefault();
});
