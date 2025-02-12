function mostrarOla() {
  let nome = document.getElementById("nome").value;
  document.getElementById("resposta").textContent = "Olá, " + nome;
}

let mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla);

// var x = 10 / 2 * Math.sqrt(9) - 4;
// console.log(x);