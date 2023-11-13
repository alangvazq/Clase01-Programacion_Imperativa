const prompt = require("prompt-sync")({ sigint: true });

// Ejercicio 01

/* let edad = 11 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

function impar(edad){
    if (edad%2 != 0){
        return console.log("¿Sabías que tu edad es impar?")
    }
}

if (edad < 0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
} else if (edad < 18) {
console.log("No puede pasar al bar.")
impar(edad)
} else if (edad <= 21){
console.log("Puede pasar al bar, pero no puede tomar alcohol.Felicidades por haber llegado a la mayoría de edad.")
impar(edad)
} else {
console.log("Puede pasar al bar y tomar alcohol.")
impar(edad)
} */

// Ejercicio 02 

/* vehiculo = 'autobus';
litrosConsumidos = 1;

function totalAPagar(vehiculo, litrosConsumidos) {
    total = 0;

    if (vehiculo === 'coche' && 0 < litrosConsumidos <= 25) {
        total = (litrosConsumidos * 86) + 50;
    }else if (litrosConsumidos > 25) {
        total = (litrosConsumidos * 86) + 25;
    }

    if (vehiculo === 'moto' && 0 < litrosConsumidos <= 25) {
        total = (litrosConsumidos * 70) + 50;
    }else if (litrosConsumidos > 25) {
        total = (litrosConsumidos * 70) + 25;
    }

    if (vehiculo === 'autobus' && 0 < litrosConsumidos <= 25) {
        total = (litrosConsumidos * 55) + 50;
    }else if (litrosConsumidos > 25) {
        total = (litrosConsumidos * 55) + 25;
    }

    return total;
}

totalAPagar(vehiculo, litrosConsumidos);

console.log(`Total ${totalAPagar(vehiculo, litrosConsumidos)}`); */

// Local de sándwiches

// Sandwich base
/* let Pollo = 150
let Carne = 200
let Vegetariano = 100 */

/* let sandwichBase = 'pollo'
let sandwichPan = 'blanco'
let i1 = true
let i2 = false

let total = 0

function totalAPagar(sandwichBase, sandwichPan, i1, i2){
    if(sandwichBase === 'pollo'){
        total += 150
    } else if(sandwichBase === 'Carne'){
        total += 200
    } else if(sandwichBase === 'veggie'){
        total += 100
    }

    if(sandwichPan === 'blanco'){
        total += 50
    } else if(sandwichPan === 'negro'){
        total += 60
    } else if(sandwichPan === 'gluten'){
        total += 75
    }

    if(i1 === true){
        total += 20
    }
    
    if(i2 === true){
        total += 15
    }

    return total
}

console.log(`Total ${totalAPagar(sandwichBase, sandwichPan, i1, i2)}`); */

// ¿Cuál es el número secreto?

/* let numero = parseInt(prompt('Número del 1 al 10: '))

function random() {
    return Math.floor(Math.random() * 2);
}

let numeroAleatorio = random()

if(numero === numeroAleatorio){
    console.log('Felicidades');
}else {
    console.log(`Intenta otra vez, el número es ${random()}`);
} */
