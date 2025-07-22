/*
1. Declara una variable puntos con un valor inicial de 0.
2. Realiza las siguientes acciones simuladas:

        Acción  	                        Operador    	            Valor

        El jugador gana 10 puntos	        +=	                        10
        El jugador pierde 4 puntos	        -=	                        4
        Doble puntuación por bonus	        *=	                        2
        Pierde la mitad por penalti	        /=	                        2
        Se aplica un módulo de 5	        %=	                        5

3. Muestra el valor de puntos en consola después de cada operación.
*/

// 1
let puntos = 0;

// 2

puntos += 10;
console.log(puntos);

puntos -= 4;
console.log(puntos);

puntos *= 2;
console.log(puntos);

puntos /= 2;
console.log(puntos);

puntos %= 5;
console.log(puntos);




