/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite,
y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.

Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.
*/

/* function encontrarMultiplos(numero, limite){
    let multiplo = []
    for(let i = 0; i < (limite-numero); i += numero){
        multiplo.push(i+numero)
    }
    return multiplo
}

console.log(encontrarMultiplos(5,50)); */

/* 
Punto 2: Arreglos y Objetos
Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades
como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando
que aprueba si su promedio de notas es mayor o igual a 70.
*/
// Crear arreglo de objetos estudiantes

let datosEstudiantes =[
    {
        nombre: 'tito',
        notas:[7,7,6],
        aprobado: function(){
            let suma = 0
            for(let i = 0; i < this.notas.length; i++){
                suma += this.notas[i]
            }
            
            if((suma/this.notas.length) > 7){
                return true
            }else{
                return false
            }
        }
    },
    {
        nombre: 'pato',
        notas:[8,8,8],
        aprobado: function(){
            let suma = 0
            for(let i = 0; i < this.notas.length; i++){
                suma += this.notas[i]
            }

            if((suma/this.notas.length) > 7){
                return true
            }else{
                return false
            }
        }
    },
]

console.log(datosEstudiantes[0].aprobado());

// Función para calcular el promedio de notas

let nombre = 'pato'

function calcularPromedio(array, nombre){
    let suma = 0
    for(let i = 0; i < array.length; i++){
        if(nombre == array[i].nombre){
            suma += array[i].notas[i]
        }
    }
    return suma / array.length
}

console.log(calcularPromedio(datosEstudiantes, nombre))

// Función para determinar si el estudiante aprobó

function aproboAlumno(array){
    let suma = 0
    for(let i = 0; i < array.length; i++){
        suma += array[i].notas[i]
    }
    return suma/array.length
}

aproboAlumno(datosEstudiantes)

// Calcular si los estudiantes aprobaron o no (sin función)



// Imprimir estado de aprobación de los estudiantes (sin función)

console.log(datosEstudiantes[0].aprobado())

/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.

Respuesta y Explicación:

*/

/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.

Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.

*/