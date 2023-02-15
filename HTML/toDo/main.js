function agregar(){
    var input = document.getElementById('input').value;

    var lista = document.getElementById('checkList');

    var contenidoLista = document.createTextNode(input);

    var linea = document.createElement('li');

    var checkBox = cb = document.createElement('input');

    cb.type = 'checkbox';

//Tambien se podria poner: linea.setAttribute('type', 'checkbox');

    linea.appendChild(cb);

    linea.appendChild(contenidoLista);

    lista.appendChild(linea);    

};

//Que dando al enter también funcione:

var entry = document
.getElementById('input')
.addEventListener('keypress', ejecutar);

function ejecutar(evt){
    if(evt.keyCode === 13){
        agregar()
    };
};


