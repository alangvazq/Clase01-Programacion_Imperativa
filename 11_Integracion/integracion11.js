const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// Obtener en un nuevo array las edades menores a 18.

function edadMenor18(array){
    let menorDeEdad = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] < 18){
            menorDeEdad.push(array[i]);
        }
    }
    return menorDeEdad;
}

console.log(edadMenor18(edades));

// Obtener en un nuevo array las edades mayor o igual a 18.

function edadMayor18(array){
    let mayorDeEdad = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] >= 18){
            mayorDeEdad.push(array[i]);
        }
    }
    return mayorDeEdad;
}

console.log(edadMayor18(edades));

// Obtener en un nuevo array las edades igual a 18.

function edadIgual18(array){
    let edad18 = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] == 18){
            edad18.push(array[i]);
        }
    }
    return edad18;
}

console.log(edadIgual18(edades));

// Obtener el menor.



// Obtener el mayor. 
// Obtener el promedio de edades.
// Incrementar en 1 todas las edades.
