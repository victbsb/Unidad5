function leerMas() {
    var puntos = document.getElementById('puntos');
    var mas = document.getElementById('mas');
    var boton = document.getElementById('boton');

    if(puntos.style.display === 'none'){
        puntos.style.display = 'inline';
        mas.style.display = 'none';
        boton.innerHTML ='Leer más';
    } else {
        puntos.style.display = 'none';
        mas.style.display = 'inline';
        boton.innerText ='Leer menos';
    }
}

function leerMas2() {
    var puntos = document.getElementById('puntos2');
    var mas = document.getElementById('mas2');
    var boton = document.getElementById('boton2');

    if(puntos.style.display === 'none'){
        puntos.style.display = 'inline';
        mas.style.display = 'none';
        boton.innerHTML ='Leer más';
    } else {
        puntos.style.display = 'none';
        mas.style.display = 'inline';
        boton.innerText ='Leer menos';
    }
}

function leerMas3() {
    var puntos = document.getElementById('puntos3');
    var mas = document.getElementById('mas3');
    var boton = document.getElementById('boton3');

    if(puntos.style.display === 'none'){
        puntos.style.display = 'inline';
        mas.style.display = 'none';
        boton.innerHTML ='Leer más';
    } else {
        puntos.style.display = 'none';
        mas.style.display = 'inline';
        boton.innerText ='Leer menos';
    }
}
