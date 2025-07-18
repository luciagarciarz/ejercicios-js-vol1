/*

1. Usa las variables nota1 y nota2 como en el ejercicio evaluadorDeNotasSimple.
2. Calcula la media y almacénalo en media.
3. Según el valor de la media, muestra en consola una calificación como esta:

Media   	    Mensaje
9 a 10	        "Excelente"
7 a < 9	        "Notable"
5 a < 7	        "Aprobado"
Menos de 5	    "Suspenso"

*/

const nota1 = 6;
const nota2 = 4;
const media = (nota1 + nota2) / 2;

if (media >= 9 && media <= 10) {
    console.log ("Excelente");
}
else if (media >= 7 && media < 9) {
    console.log ("Notable");
}
else if (media >= 5 && media < 7) {
    console.log ("Aprobado");
}
else {
    console.log ("Suspenso");
}
