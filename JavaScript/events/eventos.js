//Calculadora de números pares o impares con eventos:

var boton = document
  .getElementById("boton")
  .addEventListener("click", displayResult);

function displayResult(eleccion) {
  var eleccion = document.getElementsByTagName('input')[0].value;

  if (eleccion % 2 === 0) {
    result = "par";
  } else {
    result = "impar";
  }

  document.getElementById("result").innerHTML = `El número es introducido es el ${eleccion}, por lo que es ${result}`;
}
