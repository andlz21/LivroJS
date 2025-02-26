const frm = document.querySelector('form');
const resp = document.getElementById('outRespostas');

frm.addEventListener('submit', (e) => {
  e.preventDefault();

  let numero = parseInt(frm.linhas.value);
  let estrelas = '';

  for (let i = 1; i <= numero; i++) {

    for (let j = 1; j <= i; j++) {
      estrelas += '*';
    }
    estrelas += '\n';
  }

  resp.textContent = estrelas;
});