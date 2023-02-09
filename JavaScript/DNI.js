// Cálculo de la letra del DNI como ejercicio propuesto de JS.
// 07/02/2023
var letra;
let dni = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];
let input = prompt("Por favor, introduce tu número de DNI", "ej: 12345678");

if (input < 0 || input > 99999999 || input.length != 8) {
  alert(
    "El número introducido no es válido; refresque la página para reintroducir el número"
  );
} else {
  let letra = dni[input % 23];
  alert("Tu letra es la " + letra + " , ¿verdad?");
  window.letra = letra;
}

