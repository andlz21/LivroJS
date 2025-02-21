const form = document.querySelector("form");
const btConfirmar = document.querySelector("#btVerificar");

const outRepostaSimNao = document.querySelector("#outRespostaSimNao");
const outRespostaTipos = document.querySelector("#outRespostaTipo");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const ladoA = Number(ladoA.value);
  const ladoB = Number(ladoB.value);
  const ladoC = Number(ladoC.value);

  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
    outRepostaSimNao.innerText = "Lados nao podem formar um triangulo";
  } else {
    outRepostaSimNao.innerText = "Lados podem formar um triangulo";
    if (ladoA == ladoB && ladoA == ladoC) {
      outRespostaTipos.innerText = "Tipo: Equilatero";
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
      outRespostaTipos.innerText = "Tipo: Isosceles";
    } else {
      outRespostaTipos.innerText = "Tipo: Escaleno";
    }
  }
});