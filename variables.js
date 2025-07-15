/*
1. Declara una variable (let) nombre con tu nombre.
2. Declara una constante pais con el país donde vives.
3. Declara una variable edad, y cambia su valor dos veces.
4. Muestra todo con console.log().*/

let nombre = "Lucía";
let country = "Spain";
let age = 34;
    
console.log (`Nombre: ${nombre}, country: ${country}, age: ${age}`);

    age = 35;

console.log (`Nombre: ${nombre}, country: ${country}, age: ${age}`);



/*
1. Declara una variable mensaje con var fuera de un bloque if, con el valor "Mensaje original".
2. Dentro de un bloque if (true), vuelve a declarar mensaje usando var, con el valor "Mensaje dentro del if".
3. Muestra el valor de mensaje fuera del bloque.*/

var message = "Mensaje original";
if (true) {
    var message = "Mensaje dentro del if";
}

console.log (message);






