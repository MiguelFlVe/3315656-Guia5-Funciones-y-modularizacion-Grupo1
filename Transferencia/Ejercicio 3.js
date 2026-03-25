//Crea un programa que: simule un cajero automático. El usuario inicia con un saldo definido en una variable constante. 
// Podrá retirar dinero varias veces mientras tenga fondos suficientes. 
// Si intenta retirar más de lo que tiene, debe aparecer un mensaje de error y no permitir la transacción.

// Exportamos la función
export function cajeroAutomatico(prompt) {

    // Saldo inicial
    const saldoInicial = 1000;
    let saldo = saldoInicial;

    // Arreglo para guardar cada resultado
    let resultados = [];

    let opcion = "S";

    // Ciclo de retiros
    while (opcion === "S") {

        // Pedimos el valor a retirar
        let retiro = parseFloat(prompt("Ingresa el valor a retirar:"));

        // Validamos el saldo
        if (retiro <= saldo) {

            // Actualizamos saldo
            saldo -= retiro;

            // Guardamos el resultado inmediato
            resultados.push("Retiraste: " + retiro + " | Saldo restante: " + saldo);

        } else {

            // Si no alcanza el saldo
            resultados.push("Fondos insuficientes. Saldo actual: " + saldo);
        }

        // Después del resultado, preguntamos si desea otro retiro
        opcion = prompt("¿Deseas hacer otro retiro? (S/N):").toUpperCase();
    }

    // Retornamos todos los resultados
    return resultados;
}