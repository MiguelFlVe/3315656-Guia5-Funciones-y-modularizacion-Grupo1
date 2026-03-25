//Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de multiplicar hasta el 12. 
// El ciclo debe permitir repetir el proceso si el usuario desea consultar otra tabla.

// Exportamos la función
export function tablaMultiplicar(prompt) {

    // Arreglo para guardar resultados
    let resultados = [];

    // Variable de control
    let opcion = "S";

    // Mientras el usuario quiera continuar
    while (opcion === "S") {

        // Pedimos el número
        let numero = parseInt(prompt("Ingresa un número:"));

        // Generamos la tabla
        for (let i = 1; i <= 12; i++) {
            resultados.push(numero + " x " + i + " = " + (numero * i));
        }

        // preguntamos si desea otra
        opcion = prompt("¿Deseas consultar otra tabla? (S/N):").toUpperCase();
    }

    // Retornamos todas las tablas
    return resultados;
}