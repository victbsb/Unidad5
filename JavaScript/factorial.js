
var resultado = 1;
let num = prompt("Introduzca un número, por favor; calcularé su factorial");

// for (i = 1; i<= num; i++){
//     resultado*=i;
// };
// console.log(`El factorial del número es ${resultado}`);

for (let i = num; i > 0; i--) {
  resultado *= i;
  // Es la multiplicación y asignación, se multiplica ese número por el que le digamos y lo asigna a la variable que hayamos puesto a la izquierda
}
console.log(`El factorial del número es ${resultado}`);
