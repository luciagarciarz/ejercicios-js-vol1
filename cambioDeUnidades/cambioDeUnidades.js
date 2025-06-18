/*Cambio de unidades. en este ejercicio debes convertir 
a segundos una medida de tiempo dada en horas y minutos

ejemplo:
horas = 2
minutos =30
1h = 60min
60min =60seg
*/

let horas = 2;
let minutos = 30;
let segundos;
//las horas a segundos
segundos = *60*60;
//se suma los min en segundos
segundos += minutos*60;
console.log("Total de segundos:" + segundos);

