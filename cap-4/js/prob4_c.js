const frm = document.querySelector('form');
const resp1 = document.getElementById('outResposta1');
const resp2 = document.getElementById('outResposta2');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = Number(frm.inNumero.value);

  let divisores = 'Divisores do ' + numero + ': 1';
  soma = 1;

  for(i = 2; i <= numero / 2; i++){
    if(numero % i == 0) {
      divisores = divisores + ', ' + i;
      soma = soma + i;
    }
  }

  divisores = divisores + ' (Soma: ' + soma + ')';

  resp1.innerText = divisores;


  if(numero == soma ) {
    resp2.innerText = `${numero} é um número perfeito`;
  } else {
    resp2.innerText = `${numero} não é um número perfeito`;
  }
});