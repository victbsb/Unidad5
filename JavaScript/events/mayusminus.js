function comprobar(){
//Capturar lo que el usuario escribe cuando le de al botón:
    var fraseUsuario = document.getElementById('frase').value;
//comprobar si es mayuscula:
    var fraseMayus = fraseUsuario.toUpperCase();
    var fraseMinus = fraseUsuario.toLowerCase();
    if(fraseUsuario === fraseMayus){
        document.getElementById('resultado').innerHTML = 'Está en mayúscula bro'
    } else if (fraseUsuario === fraseMinus){
        document.getElementById('resultado').innerHTML = 'Está en minúscula bro'
    } else{
        document.getElementById('resultado').innerHTML = 'Está en mayúscula y minúscula bro, ¿quieres hacer el favor de escribir bien? Anda que...'
    }
};


//Librerias externas CALCITE para GIS... CDN es content delivery network. Otra muy usada es Bootstrap en gral. Font awesome para iconos...