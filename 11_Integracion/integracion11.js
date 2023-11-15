const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const edadesGrupo2 = [2, 11, 54, 63, 24];

// Obtener en un nuevo array las edades menores a 18.

function edadMenor18(array) {
    let menorDeEdad = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 18) {
            menorDeEdad.push(array[i]);
        }
    }
    return menorDeEdad;
}

console.log(edadMenor18(edades));

// Obtener en un nuevo array las edades mayor o igual a 18.

function edadMayor18(array) {
    let mayorDeEdad = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 18) {
            mayorDeEdad.push(array[i]);
        }
    }
    return mayorDeEdad;
}

console.log(edadMayor18(edades));

// Obtener en un nuevo array las edades igual a 18.

function edadIgual18(array) {
    let edad18 = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 18) {
            edad18.push(array[i]);
        }
    }
    if (edad18.length === 0) {
        console.log('no');
    }
    return edad18
}

console.log(edadIgual18(edadesGrupo2));

// Obtener el menor.

function menor(array) {
    let aMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < aMenor) {
            aMenor = array[i]
        }
    }
    return [aMenor];
}

console.log(menor(edades));

// Obtener el mayor.

function mayor(array) {
    let aMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > aMayor) {
            aMayor = array[i]
        }
    }
    return [aMayor];
}

console.log(mayor(edades));

// Obtener el promedio de edades.

function promedio(array) {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return [suma / array.length]
}

console.log(promedio(edades));

// Incrementar en 1 todas las edades.

function masUno(array) {
    let arrayMasUno = []
    for (let i = 0; i < array.length; i++) {
        arrayMasUno.push(array[i] + 1)
    }
    return arrayMasUno
}

console.log(masUno(edades));