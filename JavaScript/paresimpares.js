const number = [253,8575,1,20,562,1233,25,27,258,254,7485,2683];

const par = number.filter(function(num){    
    return (num%2==0);
});
console.log(par);

const impar = number.filter(function(num){    
    return (num%2!=0);
});
console.log(impar);

/* Resuelto por Liber:

const number = [253,8575,1,20,562,1233,25,27,258,254,7485,2683];

const par = number.filter(function(num){ 
    if(num%2 ==0){
    return (num%2==0) } ;
});

console.log("pares", par);

const impar = number.filter(function(num){    
    if(num%2 ==0){
    return (num%2==0)};
});
console.log("impares", impar);


-----------------------------------


Tambien podria ser:

var par [];
var impar[];

numbers.filter(function(numero));
if(numero%2==0)¨{
    par.push(numero)
}; else{
    impar.push(numero)
};
*/

