const helado = 1.90;
const Oreo = 1;
const KitKat = 1.50;
const Brownie = 0.75;
const Lacasitos = parseFloat(0.95); /*parse float para que aparezca el redondeo*/

toppings = ['Oreo', 'KitKat', 'Brownie', 'Lacasitos'];

topping = prompt("¿Qué topping quieres?", toppings.sort());

if (topping == "Oreo" || topping == "oreo") {
    precio = helado + Oreo;
    alert (`El precio es ${precio} euros`);
} else if (topping == 'KitKat' || topping == "kitkat" || topping == "kitKat") {
    precio = helado + KitKat;
    alert (`El precio es ${precio} euros`);
} else if (topping == 'Brownie' || topping == "brownie") {
    precio = helado + Brownie;
    alert (`El precio es ${precio} euros`);
} else if (topping == 'Lacasitos' || topping == "lacasitos") {
    precio = (helado + Lacasitos).toFixed(2); /*Para establecer el redondeo a 2.*/
    alert (`El precio es ${precio} euros`);
} else {
    alert("No tenemos este topping, lo sentimos")
    precio = helado;
    alert(`El precio sin topping es: ${precio} euros`);
}

