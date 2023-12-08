// Ejercicio 1

let paises = [
    {
        nombre: "Argentina",
        continente: "Sudamérica",
        poblacion: 40000000
    },
    {
        nombre: "Colombia",
        continente: "Sudamérica",
        poblacion: 50372000
    },
    {
        nombre: "Brasil",
        continente: "Sudamérica",
        poblacion: 300000000
    },
    {
        nombre: "Etiopía",
        continente: "África",
        poblacion: 15000000
    },
    {
        nombre: "Chile",
        continente: "Sudamérica",
        poblacion: 10000000
    }
];

/* 1.- Crear una función que reciba como parámetro el arreglo de objetos, un continente,
y un número de población.
2.- La misma debe retornar un nuevo arreglo solo con los países que sean del continente pasado
por parámetro, y además, que su población sea mayor o igual a la del parámetro.
3.- Si no encuentra coincidencias deberá retornar un array vacío
*/

function ordenDePaises(paises, continente, poblacion) {
    let paisesFiltrados = paises.filter(function (pais) {
        return pais.continente === continente && pais.poblacion >= poblacion;
    });
    return paisesFiltrados;
}

console.log(ordenDePaises(paises, "Sudamérica", 50000000));

// Ejercicio 2

let arrayDeNumeros = [1,2,3, 8, 9, 104, 5, 6, 7, 15];

/*Crear una función llamada bubbleSort que reciba como parámetros el array y un string que
represente el sentido de ordenamiento, la función deberá realizar un ordenamiento interno del
array según el orden indicado.

“ASC” lo ordenará ascendente
“DESC” lo ordenará descendente

Para analizar el correcto funcionamiento imprimir por consola el array antes y después de
ejecutar la función. 
*/

direccion = "DESC";

function bubbleSort(array, sentido){
    if (sentido === "ASC"){
        for(let i=0; i<array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    } else if (sentido === "DESC") {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length - 1; j++) {
                if (array[j] < array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    } else if (sentido !== "ASC" || sentido !== "DESC") {
        console.log("No se ingresó un sentido válido");
    }
    return array;
};

bubbleSort(arrayDeNumeros, direccion);

console.log(bubbleSort(arrayDeNumeros, direccion));

// Ejercicio 3

let matriz = [
    [5, 2, 2], // 0
    [2, 5, 2], // 1
    [4, 4, 5]  // 2
];

/*1.- Crear una función que reciba la matriz por parámetro, sume todos los valores de la fila 1
y retorne la suma.*/ /*Se pide la fila no el index*/

function sumaFila1(matriz){
    let suma = 0;
    for (let i = 0; i < matriz[1].length; i++){
        suma += matriz[1][i];
    }
    return suma;
}

console.log(sumaFila1(matriz));

/*2.- Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con
todos los valores pares de la matriz.*/

function arrayPares (array){
    let arrayDeNumeros = []
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length; j++){
            if (array[i][j] % 2 === 0){
                arrayDeNumeros.push(array[i][j])
            }
        }
    }
    return arrayDeNumeros
}

arrayPares(matriz)

console.log(arrayPares(matriz));