var primeraOp = document.getElementById('first-option');
console.log('primeraOp',primeraOp)

var parrafo = document.getElementsByTagName('p');
parrafo[0].innerHTML = "Hola";
console.log('parrafo',parrafo);

var labels = document.getElementsByTagName('label');
console.log('labels',labels)

var clases = document.getElementsByClassName('label-input');
console.log('clases', clases)

var nombre = "Victor"

var title = document.getElementById("titulo").innerHTML = nombre

//puedo hacer un proceso de calculos y hacerlo aparecer en pantalla.
//Solo con innerHTML puedo poenr numeros y letras únicamente.