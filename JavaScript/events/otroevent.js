var boton = document.getElementById("btn").addEventListener("click", alerta);

function alerta() {
  alert("guardado con éxito");
}

// var prueba = document
// .getElementById("prueba")
// .addEventListener("mouseover", cambiaColor);

// document.getElementById('prueba').innerHTML=prueba

var inputFondo = document.getElementsByTagName("input")[0];
inputFondo.addEventListener("focusin", cambioColor);

function cambioColor() {
  inputFondo.style.backgroundColor = "yellow";
}
inputFondo.addEventListener("focusout", quitarColor);

function quitarColor() {
  inputFondo.style.backgroundColor = "";
}

var inputLetras = document.getElementsByTagName("input")[1];
inputLetras.addEventListener("keydown", vocales);

function vocales(event) {
  console.log("event", event);
  const vocales = [65, 69, 79, 73, 85];
  // if(event.keyCode === 65 || event.keyCode === 69 || event.keyCode === 75 || event.keyCode ===  73 || event.keyCode === 85){
  if (vocales.includes(event.keyCode) === true) {
    inputLetras.style.color = "red";
  } else {
    inputLetras.style.color = "green";
  }
}
