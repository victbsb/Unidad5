// function eleccion() {
//     var textoIntroducido = document.getElementById('texto').innerHTML;

//     var enter = document
//      .addEventListener('keyup', mostrarTexto) 
     
//      document.getElementById('salidaPantalla') = enter
//         };
  

// function mostrarTexto(evento) {
//     if (evento.keyCode === 13) {
//       eleccion();
//     }
//   };

//-------------------------------------------

//PASO A) Que funcione con el botón:

function capturarTexto(event){
    var texto = document.getElementById('texto').value
    document.getElementById('salidaPantalla').innerHTML = texto;
};


//PASO B) Que funcione con enter: Que controle lo que escribe el usuario (keyup, keydown...)

var textArea = document.getElementById('texto');

textArea.addEventListener('keypress',checkEnter);



//Controlar solo cuando usa el enter. (keyCode) y LLamar a la funcion que pinta en pantalla. (capturarTexto)


function checkEnter(evt){
    console.log('evt', evt)
    if(evt.keyCode === 13){
        capturarTexto()
    };
};




