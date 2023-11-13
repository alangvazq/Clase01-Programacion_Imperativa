const prompt = require("prompt-sync")({ sigint: true });

/* let valor = 2;

for(let i = 0; i <= 10; i++){
    console.log(`${valor++}`);
} */


/* for (let valor = 5; valor <= 20; valor += 3) {

    console.log(valor);
} */



/* let acumuladora = 0

for(let i = 0; i <= 100; i++){
    acumuladora = acumuladora + i
}

console.log(acumuladora) */

/* let numeroPositivo = 10
let acumuladora = 1

for(let i = 1; i <= numeroPositivo; i++){
    acumuladora = acumuladora * i
}

console.log(acumuladora) */

/* a(0) + b(1) = c(1)

b(1) + c(1) = a(2)

c(1) + a(2) = b(3)

a(2) + b(3) = c(5)

b(3) + c(5) = a(8)

c(5) + a(8) = b(13) */

let numero = 10

let a = 0;
let b = 1;

for(let i = 1; i < numero; i++){

    c = a + b
    console.log(c);

    a = b + c
    console.log(a);

    b = c + a
    console.log(b);
}





