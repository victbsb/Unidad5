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