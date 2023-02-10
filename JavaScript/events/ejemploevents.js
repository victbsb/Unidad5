var boton = document.getElementById("btn");
boton.addEventListener("click", comprobarNumero);
function comprobarNumero() {
  var valor = document.getElementsByTagName("input")[0].value;
  var resultadoPantalla = document.getElementById("resultado");
  if (valor % 2 === 0) {
    resultadoPantalla.innerHTML = "El número " + valor + " es un número par";
  } else {
    resultadoPantalla.innerHTML = `El número ${valor} es un número impar`;
  }
}

var input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", mostrarLetra);

function mostrarLetra(evento) {
  if (evento.keyCode === 13) {
    comprobarNumero();
  }
}
