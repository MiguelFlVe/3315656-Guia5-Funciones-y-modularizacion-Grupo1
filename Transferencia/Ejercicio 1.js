//Crea un programa que: muestre todos los números primos entre 1 y 50. 
// Utiliza ciclos y condicionales para verificar qué números cumplen la condición de ser primos

// Exportamos la función para usarla en otro archivo
export function numerosPrimos() {

    // Arreglo donde guardaremos los números primos
    let primos = [];

    // Recorremos los números del 1 al 50
    for (let i = 1; i <= 50; i++) {

        // Contador de divisores
        let divisores = 0;

        // Verificamos cuántas veces se puede dividir exactamente
        for (let j = 1; j <= i; j++) {

            // Si el residuo es 0, es divisor
            if (i % j === 0) {
                divisores++;
            }
        }

        // Un número primo tiene exactamente 2 divisores (1 y él mismo)
        //Lo agregamos al arreglo si está dos veces
        if (divisores === 2) {
            primos.push(i);
        }
    }

    // Retornamos el arreglo con los números primos
    return primos;
}