function preencherEstrelas() {
  var inNumeroEstrelas = document.getElementById("inNumero");
  var outEspacos = document.getElementById("outEspacos");

  var num = Number(inNumeroEstrelas.value);

  if (num == 0 || isNaN(num)) {
    alert("Número inválido...");
    inNumeroEstrelas.focus();
    return;
  }

  var estrelas = "";

  for (var i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      estrelas = estrelas + "*";
    } else {
      estrelas = estrelas + "-";
    }
  }

  outEspacos.textContent = estrelas;
}

var btPreencer = document.getElementById("btPreencer");
btPreencer.addEventListener("click", preencherEstrelas);