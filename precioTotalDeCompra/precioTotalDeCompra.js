/*
Has hecho una compra y sabes el precio del producto y su iva.
Haz un script que te calcule el precio total que vas a pagar por tu compra.
Para calcular el total debes sumar al precio el resultado de multiplicasr 
precio por el iva y dividir por 100.

precio 200€ e iva 21€
*/

let precio = 200;
let iva = 21;
let precioTotal = precio + (precio * iva /100);
console.log("El precio total es: " +precioTotal);


