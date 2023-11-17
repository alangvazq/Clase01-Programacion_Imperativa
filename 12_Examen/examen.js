/*Ejercicio 1: 
Desarrollar una función para el siguiente apartado:
Que reciba por parámetro 2 números, y verifique que si uno de ellos es par,retorne la multiplicación
de ambos, si ambos son pares, retorne la suma de ambos, si no hay ninguno par, que retorne
‘ninguno es par ‘.*/

function esPar(numero1, numero2) {
    let operacion = 0

    if (numero1 % 2 === 0 && numero2 % 2 === 0) {
        operacion = numero1 + numero2
    } else if (numero1 % 2 === 0) {
        operacion = numero1 * numero2
    } else if (numero2 % 2 === 0) {
        operacion = numero1 * numero2
    } else {
        operacion = 'ninguno es par'
    }

    return operacion
}

console.log(esPar(3, 3));

/* Ejercicio 2:
Deberás escribir un objeto literal llamado ciclista que contenga las siguientes propiedades que
deberás completar con tus datos:

nombre
apellido 
edad
tiene Bici (TRUE/FALSE)

2. Teniendo en cuenta los datos del punto número 1.

Crear una función que reciba por parámetro el objeto y retorne un string en base a las siguientes condiciones: 

- si edad es mayor o igual a 18 y tiene bici  “puede competir”
- si tiene bici y es menor a 18   “podrá competir pero con un adulto acompañante”
- si no tiene bici “No podrá competir” 

Deberás realizar la invocación de la función de forma que se pueda ver el resultado*/

let ciclista = {
    nombre: 'Alan',
    apellido: 'Garcia',
    edad: 30,
    tieneBici: false
}

function puedeCompetir(objeto) {
    let respuesta = '';

    if (objeto.edad >= 18 && objeto.tieneBici) {
        respuesta = 'puede competir'
    } else if (objeto.edad < 18 && objeto.tieneBici) {
        respuesta = 'podrá competir pero con un adulto acompañante'
    } else {
        respuesta = 'No podrá competir'
    }

    return respuesta
}

console.log(puedeCompetir(ciclista));

/* Ejercicio 3:
Crear un array vacío, que tenga el nombre libros.
Usando estos 4 objetos: */

let historiasInconscientes = {
    anio: 2013,
    autor: "Gabriel Rolón",
    paginas: 352
}
let elAlquimista = {
    anio: 1988,
    autor: "Paulo Coehlo",
    paginas: 192
}
let elCampamento = {
    anio: 2021,
    autor: "Blue Jeans",
    paginas: 480
}
let operacionMasacre = {
    anio: 2009,
    autor: "Rodolfo Walsh",
    paginas: 236
}

/*
- Deberás agregarlos al array utilizando un método de array.
- Mostrar por consola el array para ver que contenga esos objetos.
- Deberás crear una función que reciba el array libros como parámetro, y si el año de lanzamiento
es anterior a 2020, deberá agregar una propiedad a cada objeto que se llame época y tenga el
valor pre-pandemia, si el año es posterior o igual a 2020 el valor de la propiedad época será
post-pandemia.
- Ejecutar la función y mostrar por consola los cambios. */


let libros = [];

libros.push(historiasInconscientes);
libros.push(elAlquimista);
libros.push(elCampamento);
libros.push(operacionMasacre);

console.log(libros);

function epocaPandemia(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].anio < 2020) {
            array[i].epoca = 'pre-pandemia'
        } else {
            array[i].epoca = 'post-pandemia'
        }
    }
    return array
}

epocaPandemia(libros)

console.log(libros)