//Realiza un diagrama de flujo que pida al usuario ingresar 10 números y muestre únicamente los que sean mayores que 50.

// Exportamos la función para poder usarla en otro archivo
export function numerosMayoresA50(prompt) {

    // Creamos un arreglo o lista para guardar los números mayores a 50
    let mayores = [];

    // Ciclo que se repite 10 veces (para pedir 10 números)
    for (let i = 0; i < 10; i++) {

        // Pedimos al usuario un número
        
        let numero = parseFloat(prompt("Ingresa un número:"));

        // Verificamos si el número es mayor que 50
        if (numero > 50) {

            // Si cumple la condición, lo guardamos en el arreglo
            mayores.push(numero);
        }
    }

    // Retornamos el arreglo con los números mayores a 50
    
    return mayores;
}