//Calculadora de números pares o impares con eventos:

var boton = document.getElementById('boton').addEventListener('click', displayResult);

function displayResult(eleccion){

var eleccion = prompt('Introduzca un número y pulse el botón para saber si es par o impar', 'ej. 45');
 
if(eleccion%2 == 0) {
        result = 'par'
    } else {
        result = 'impar'
    };
    
var result = document.getElementById('result').innerHTML = `El número es introducido es el ${eleccion}, por lo que es ${result}`;

document.body.appendChild(result);
};



