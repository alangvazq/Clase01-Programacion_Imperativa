/* //la lista de clientes.
let arrayCuentas = [
    {
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
    },
    {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
    },
    {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
    },
    {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
    },
    {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
    },
];
// podes continuar tu codigo a partir de aca!

let banco = {
    clientes: arrayCuentas,
    consultarCliente : function(nombre){
        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].titularCuenta === nombre){
                return this.clientes[i]
            }
        }
    },
    deposito : function(nombre, cantidad){
        let deposito = 0;
        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].titularCuenta === nombre){
                deposito = this.clientes[i].saldoEnPesos + cantidad
                return `Depósito realizado, su nuevo saldo es: ${deposito}.`
            }
        }
    },
    extraccion : function(nombre, retirar){
        let retiro = 0;
        for(let i = 0; i < this.clientes.length; i++){
            if(this.clientes[i].titularCuenta === nombre){
                retiro = this.clientes[i].saldoEnPesos - retirar
                if(retiro <= 0){
                    return 'Fondos insuficientes.';
                }else{
                    return `Extracción realizada correctamente, su nuevo saldo es: ${retiro}.`;
                }
            }
        }
    }
}
let clienteEncontrado = banco.consultarCliente('Ramon Connell');
console.log(clienteEncontrado);

let sumaDeposito = banco.deposito('Ramon Connell', 1);
console.log(sumaDeposito);

let sumaRetiro = banco.extraccion('Ramon Connell', 1);
console.log(sumaRetiro); */

// ---------Propiedad única----------

let array = [
    {
        nombre: 'Lean',
        edad: 27
    },
    {
        nombre: 'Eze',
        edad: 49
    }
]

function propiedadUnica(arreglo, propiedad){
    let arrayUnico = []
    for(let i = 0; i < arreglo.length; i++){
        arrayUnico += arreglo[i][propiedad]
    }
    return arrayUnico
}

console.log(propiedadUnica(array, 'edad')) // retornar[{ edad: 27 }, { edad: 49 }]

