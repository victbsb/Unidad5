//Lo que he hecho yo


// function cargarEjemplo(){
//     var ejemplo = '30,38,2'
//     document.getElementById('input').value = ejemplo;
// };

// function calcular(){ 
//     const input = document.getElementById('input').value;
//     const arrNums = input.split(',');
//     const listaNums = arrNums
//         .map(function(arrNums)
//             {return parseInt(arrNums)})
//     console.log(listaNums);

//     for(let i = 1; i < listaNums.length; i++){
//         var suma =+ i ;
//         console.log(suma)
//     };



//     document.body.appendChild(`La suma es ${suma}`);
//     document.body.appendChild(`La media es ${mean}`);
//     document.body.appendChild(`El número máximo es ${max}`);
//     document.body.appendChild(`El número mínimo es ${min}`);

// };
//------------------------------------------------------------------------------------

function calcular(){
    
    
    var numerosInput = document.getElementById('inputNumbers').value.split(','); /*Devuelve una cadena, hay que transformarlo en array*/
    console.log('numerosInput', numerosInput);
    var numeros = numerosInput.map(function(number){
        return parseInt(number);
    })

    console.log(numeros);


    //suma
    var suma = 0
    for ( let i = 0; i < numeros.length; i++) {
        suma += numeros[i]; 
    }
    console.log('suma', suma)

    document.getElementById('resultadoSuma').innerHTML = 'El resultado de la suma es  ' + suma;
    //media
    var media= (suma/numeros.length).toFixed(2);
    console.log('media', media)

    document.getElementById('resultadoMedia').innerHTML = 'El resultado de la media es  ' + media;
    //max

    // var max = Math.max(...numeros);
    // console.log(max);

    var max = numeros[0]
    for(let i=0; i< numeros.length; i++) {
        if(max < numeros[i]) {
            max = numeros[i];
        };
    };

    document.getElementById('resultadoMax').innerHTML = 'El valor mayor es  ' + max;
    //min
    var min = numeros[0]
    for(let i = 0; i< numeros.length; i++) {
        if(min > numeros[i]){
            min = numeros[i];
        };
    };
   
    document.getElementById('resultadoMin').innerHTML = 'El valor menor es  ' + min;

}

function reiniciar() {

    // document.getElementById('inputNumbers').value = '';


    // document.getElementById('resultadoSuma').innerHTML = '';
    // document.getElementById('resultadoMedia').innerHTML ='';
    // document.getElementById('resultadoMax').innerHTML='';
    // document.getElementById('resultadoMin').innerHTML='';
//Otra forma.

    var parrafos = document.getElementsByTag('p');
    console.log(parrafos)
    parrafos.map(function(parr){
        parr.innerHTML='';
    })
}


function cargar() {
    document.getElementById('inputNumbers').value = '1, 2, 3';
}
