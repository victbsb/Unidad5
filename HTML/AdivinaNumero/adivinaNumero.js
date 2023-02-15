

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (100 - 0) + 0); // The maximum is exclusive and the minimum is inclusive
  }


const numeroAleatorio = getRandomInt();
var contadorInicial = 0; 

//Comprobar el numero con el aleatorio

function comprobar(){
    var input = document.getElementById('input').value;
    var numero = parseInt(input);
    contadorInicial++;

    document.getElementById('contador').innerHTML=(contadorInicial)

    /*Recuerda que las restricciones más severas deben ir al princippio, como controlar el input que mete el usuario que sea menor que 100
    
    Con el atributo: disabled = true, cuando el contador de vdias llegue a 0 o el de número de intentos, podemos activarlo para que se desactive el botón */

    if(numero == numeroAleatorio){
        console.log('Has acertado')
        document.getElementById('resultado').innerHTML = '¡Has ganado! ¡Tienes un A+ en la evaluación, bien hecho!'
        
        var gif = document.getElementById('gifExito');

        gif.style.display='inline';
        document.getElementById('resultado').append(gif);


    } else if (numero > numeroAleatorio){
        console.log('¡Prueba con algo más bajo!')
        document.getElementById('resultado').innerHTML = '¡Prueba con algo más bajo! Pero cuidado, te queda una vida menos...'


        var gif = document.getElementById('gif');

        gif.style.display='inline';
        document.getElementById('resultado').append(gif);

    } else {
        console.log('¡Prueba con algo más alto!')
        document.getElementById('resultado').innerHTML = '¡Prueba con algo más alto! Pero cuidado, te queda una vida menos...'

        var gif = document.getElementById('gif');

        gif.style.display='inline';
        document.getElementById('resultado').append(gif);

    }
    }


//Para ejecutar con enter

var enter = document
 .getElementById('input')
 .addEventListener('keypress', ejecutar);

 function ejecutar(evt){
     if(evt.keyCode === 13){
         comprobar()
     };
 };

//Contador

// var boton = document.getElementById('btn').addEventListener('onclick', contador());
// document.getElementById('btn').addEventListener('onclick', contador())





