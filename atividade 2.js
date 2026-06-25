console.log("=== CATEGORIZAÇÃO DOS NÚMEROS ===");

for (let numero = 0; numero <= 100; numero++) {

    if (numero >= 0 && numero <= 100) {

        if (numero % 2 === 0) {
            console.log(numero + " é PAR");
        } else {
            console.log(numero + " é ÍMPAR");
        }

    } else {
        console.log(numero + " está fora do intervalo");
    }
}

