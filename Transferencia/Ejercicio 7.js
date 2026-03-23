// Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos fueron pares y cuántos impares.

// Definir el prompt
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Función para desarrollar el ejercicio
const evenodd = () => {
    // Se empieza a contar la cantidad de números pares e impares
    let evenCount = 0;
    let oddCount = 0;
    let invCount = 0

    // Se abre el ciclo para la solicitud de números
    for (let i = 1; i <= 10; i++) {
        let number = parseInt(prompt(`Ingrese un número entero: `));

        // Verificación de un número par
        if (number % 2 === 0) {
            console.log(`El número ${number} es par.`);
            evenCount++;
        }
        // Verificación de un número impar
        else if (number % 2 == 1) {
            console.log(`El número ${number} es impar.`);
            oddCount++;
        }
        // En caso de que lo ingresado no sea un número entero
        else {
            console.log(`El valor ingresado no es un número entero válido. Por favor, ingrese un número entero.`);
            invCount++;
        }
    }

    // Devolver la cantidad de números pares e impares, así como los datos inválidos
    return `Cantidad de números pares: ${evenCount} \nCantidad de números impares: ${oddCount} \nCantidad de datos inválidos: ${invCount}`;
}

// Exportar la función
export { evenodd }