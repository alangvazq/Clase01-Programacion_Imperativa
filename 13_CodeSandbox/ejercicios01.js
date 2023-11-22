// Dado los siguientes números:

let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

// Escribe tu código debajo de estas líneas,
// y observa los resultados por la consola.
// Especificamente para este conjunto de datos
// deberías ver por consola el número 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else if (num3 > num1 && num3 > num2) {
    console.log(num3);
}

// Fin del ejercicio 01
// -----------------------------------------------------------------

// Ahora bien. dado los siguientes numeros:

let nume1 = 13;
let nume2 = 1663;
let nume3 = 3363;
// agrega una variable mas, llamada num4
// con un valor numerico
let nume4 = 3364;

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.

if (nume1 > nume2 && nume1 > nume3 && nume1 > nume4) {
    console.log(nume1);
}else if (nume2 > nume1 && nume2 > nume3 && nume2 > nume4) {
    console.log(nume2);
}else if (nume3 > nume1 && nume3 > nume2 && nume3 > nume4) {
    console.log(nume3);
}else if (nume4 > nume1 && nume4 > nume2 && nume4 > nume3) {
    console.log(nume4);
}

// Fin del ejercicio 02
// -----------------------------------------------------------------

/**
 * Extra: que puedes hacer para identificar
 * el numero mayor de una lista de numeros,
 * como la siguiente? Utiliza Javascript.
 *
 * Tip: es valido buscar en google :)
 *
 * Adicional: al terminar tu algoritmo,
 * cambia los valores de la lista, bien sea
 * agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista
 * de numeros
 */

// ...numero es un operador de propagación (spread operator)
// que permite que una expresión sea expandida en situaciones
// donde se esperan múltiples argumentos (llamadas a funciones)
// o múltiples elementos (arrays literales). Por lo tanto, ...numeros = 5, 12, 2, 40, 33, 2, 8

// Math.max() devuelve el mayor de cero o más números.
// Math.max(...numeros) devuelve el mayor de los números en el array numeros

const numeros = [5, 12, 2, 40, 33, 2, 8];

// Escribe tu código debajo de esta linea,

let maximo = Math.max(...numeros);
console.log(maximo);

// Fin del ejercicio extra


