const prompt = require("prompt-sync")({ sigint: true });

/* let nombre = prompt('Ingresa nombre: ')
console.log(`Hola ${nombre}`); */

/* let convertir = (numero) => numero * 2.54
console.log(convertir(23)); */

/* let dominio = prompt('Ingresa string: ')
let url = (dominio) => `http://www.${dominio}.com`
console.log(url(dominio)); */

/* let admiracion = prompt('Ingresa string: ')
let url = (admiracion) => `¡${admiracion}!`
console.log(url(admiracion)); */

/* let edad = prompt('Ingresa edad perro: ')
let edad_perro = (edad) => edad * 7
console.log(`Edad en años perro: ${edad_perro(edad)}`); */

/* let sueldo_m = prompt('Ingresa sueldo mensual: ')
let sueldo_hora = (sueldo_m) => (sueldo_m / 4 ) / 40
console.log(`Sueldo por hora: ${sueldo_hora(sueldo_m)}`); */

/* let altura = prompt('Ingresa peso en kilogramos: ')
let peso = prompt('Ingresa altura en metros: ')
let calculadorIMC = (peso, altura) => peso / (altura*altura)
console.log(`IMC: ${calculadorIMC(peso, altura)}`); */

let radio = prompt('Ingresa radio: ')
let circunferencia = radio => Math.PI * (radio*2)
console.log(`La circunferencia es: ${circunferencia(radio)}`);

/* let radio = prompt('Ingresa radio: ');
function circunferencia(radio) {
    return Math.PI * (radio * 2);
}
console.log(`La circunferencia es: ${circunferencia(radio)}`); */
