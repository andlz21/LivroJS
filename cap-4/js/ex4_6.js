function verificarPrimo() {
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var num = Number(inNumero.value);

  if (num == 0 || isNaN(num)) {
    alert("Número inválido...");
    inNumero.focus();
    return;
  }

  var numDivisores = 0;

  for (var i = i; i <= num; i++) {
    if (num % i == 0) {
      numDivisores++;
    }
  }

  if (numDivisores == 2) {
    outResposta.textContent = num + "É primo!";
  } else {
    outResposta.textContent = num + "Não é primo!";
  }
}

var btVerificarPrimo = document.getElementById("btVerificarPrimo");
btVerificarPrimo.addEventListener("click", verificarPrimo);


// Mudanças possíveis para otimizar
var temDivisor = 0;

for(var i = 2; i <= num / 2; i++ ){
  if(num % 1 == 0) {
    temDivisor = 1;
    break;
  }
}

if (num > 1 && !temDivisor) {
  outResposta.textContent = num + "É primo!";
} else {
  outResposta.textContent = num + "Não é primo!"; 
}