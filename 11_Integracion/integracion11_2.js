
const arrayCuentas =
    [
        {
            titular: "Arlene Barr",
            estaHabilitada: false,
            saldo: 3253.40,
            edadTitular: 33,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Roslyn Torres",
            estaHabilitada: false,
            saldo: 3229.45,
            edadTitular: 27,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Cleo Lopez",
            estaHabilitada: true,
            saldo: 1360.19,
            edadTitular: 34,
            tipoCuenta: "corriente"
        },
        {
            titular: "Daniel Malone",
            estaHabilitada: true,
            saldo: 3627.12,
            edadTitular: 30,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Ethel Leon",
            estaHabilitada: true,
            saldo: 1616.52,
            edadTitular: 34,
            tipoCuenta: "sueldo"
        },
        {
            titular: "Harding Mitchell",
            estaHabilitada: true,
            saldo: 1408.68,
            edadTitular: 25,
            tipoCuenta: "corriente"
        }
    ]

//    Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

/* function menor30(array){
    let menor30 = []
    for(let i = 0; i < array.length; i++){
        if(arrayCuentas[i].edadTitular < 30){
            menor30.push(array[i])
        }
    }
    return menor30
}

console.log(menor30(arrayCuentas)); */

//    Obtener la cuenta con el titular de la misma más joven.

function datosJoven(array){
    let masJoven = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i].edadTitular < masJoven.edadTitular){
            masJoven = array[i]
        }
    }
    return masJoven
}

console.log(datosJoven(arrayCuentas));

//    Obtener un array con las cuentas habilitadas.
//    Obtener un array con las cuentas deshabilitadas.
//    Obtener la cuenta con el menor saldo.
//    Obtener la cuenta con el mayor saldo.