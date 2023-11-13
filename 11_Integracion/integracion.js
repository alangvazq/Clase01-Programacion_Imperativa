/*
Integración de contenido:

1) Crear un array llamado misMascotas

2) Dentro de este array crearemos un objeto literal para cada mascota.
Cada objeto deberá tener:
    nombre
    raza
    edad
    sonido
    un método que nos retorne ese sonido 2 veces

    Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.
*/

let misMascotas = [{
    nombre: 'nico',
    raza: 'husky',
    edad: 2,
    sonido: 1,
    retorno: function () {
        return this.sonido * 2
    }
},
{
    nombre: 'tito',
    raza: 'chihuahua',
    edad: 5,
    sonido: 5,
    retorno: function () {
        return this.sonido * 2
    }
},
{
    nombre: 'fido',
    raza: 'labrador',
    edad: 10,
    sonido: 4,
    retorno: function () {
        return this.sonido * 2
    }
}
]

function aumentarEdad() {
    for (let i = 0; i < misMascotas.length; i++) {
        misMascotas[i].edad += 1;
    }
}

aumentarEdad();

console.log(misMascotas[0].edad);
console.log(misMascotas[1].edad);

function aumentarEdad2() {
    for (let i = 0; i < misMascotas.length; i++) {
        if (misMascotas[i].edad < 6) {
            misMascotas[i].edad += 1
        } else if (misMascotas[i].edad >= 6 && misMascotas[i].edad <= 10) {
            misMascotas[i].edad += 10
        } else if (misMascotas[i].edad > 10) {
            misMascotas[i].edad += (misMascotas[i].edad / 2)
        }
    }
}

aumentarEdad2();

console.log(misMascotas[0].edad);
console.log(misMascotas[1].edad);
console.log(misMascotas[2].edad);

function id() {
    for (let i = 0; i < misMascotas.length; i++) {
        misMascotas[i].id = i + 1;
    }
}

id();

console.log(misMascotas[0]);
console.log(misMascotas[1]);
console.log(misMascotas[2]);

/* ------------------------------------------------------------------ */

/*   Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 

Ejemplo: 
consecutivosSimilares(“AAAA”) debe retornar 3
consecutivosSimilares(“BBBBB”) debe retornar 4
consecutivosSimilares(“ABABABAB”) debe retornar 0
consecutivosSimilares(“BABABA”) debe retornar 0
consecutivosSimilares(“AAABBB”) debe retornar 4 */

let string = 'AAABBB';

function consecutivosSimilares(string) {
    let suma = 0
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] == string[i + 1]) {
            suma += 1;
        } else {
            suma += 0;
        }
    }
    return suma
}

/*console.log(consecutivosSimilares(string));

/   Rotación de arreglo a la derecha
Debes crear una función llamada “rotar” que reciba un arreglo y un número, y
debera retornar un nuevo arreglo con los elementos rotados la cantidad de veces
como sea el número a la derecha.

Ejemplo: 
rotar([1, 2, 3, 4, 5], 2) debe retornar [4, 5, 1, 2, 3]
rotar([1, 2, 3, 4, 5], 3) debe retornar [3, 4, 5, 1, 2]*/

function rotar(array, numero) {
    for (let i = 0; i < numero; i++) {
        let a = array.pop()
        array.unshift(a)
    }
    return array
}

let array = [1, 2, 3, 4, 5];

console.log(rotar(array, 4));
