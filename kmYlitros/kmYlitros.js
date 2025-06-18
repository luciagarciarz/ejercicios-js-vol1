/*Escribe un programa que solicite al usuario 
ingresar el número de kilómetros recorridos 
por su coche y el número de litros consumidos.
El script debe mostrar el consumo de combustible por kilómetro.

num litros = 20
num km = 80
num litros / num km
*/

let km = parseInt(prompt("Introduce los km recorridos"));
let litros = parseInt(prompt("Introduce los litros consumidos"));
let consumo = km/litros;
alert("Has consumido " +consumo + " litros");