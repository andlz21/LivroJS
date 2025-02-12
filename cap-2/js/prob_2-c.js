const frm = document.querySelector('form');
const produto = document.getElementById('#inProduto');
const preco = document.getElementById('#inPreco');

frm.addEventListener('submit', (e) => {
  const produto = frm.inProduto.value;
  const precoAPagar = Number(frm.inPreco.value);

  const terceiroProduto = precoAPagar / 2;
  const valorTotal = (precoAPagar * 2) + terceiroProduto;

  document.querySelector('#outPromocao').textContent = `Promoção de ${produto} - Leve 3 por R$: ${valorTotal.toFixed(2)}`;
  document.querySelector('#outPrecoTerceiro').textContent = `O 3º produto custa apenas - R$: ${terceiroProduto.toFixed(2)}`;

  e.preventDefault();
});