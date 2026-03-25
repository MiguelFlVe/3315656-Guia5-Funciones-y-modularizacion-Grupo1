//Apropiación
// Ejercicio 1
import { multiplosDeTres } from "./Apropiación/Ejercicio 1.js"
// Ejercicio 2
import { registrarIngresoEstudiantes } from "./Apropiación/Ejercicio 2.js";
// Ejercicio 7
import { sumatoria } from "./Apropiación/Ejercicio 7.js"
// Ejercicio 8
import { Adults } from "./Apropiación/Ejercicio 8.js"

//Transferencia


//Ejercicio 2
import { tablaMultiplicar } from "./Transferencia/Ejercicio 2.js"
// Ejercicio 7
import { evenodd } from "./Transferencia/Ejercicio 7.js"
// Ejercicio 8
import { login } from "./Transferencia/Ejercicio 8.js"

// Definir el prompt
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Menú de selección de parte de la guía y ejercicio a ejecutar
while (true){
    // Elección de parte de la guía a ejecutar
    let choose = prompt("¿Qué parte de la guía deseas ejecutar (Apropiación [A] o Transferencia [T])? (Escriba solo la letra inicial del nombre de sección, en mayúscula): ");

    // Se selecciona la parte de Apropiación
    if (choose === "A") {
        // Elección del ejercicio a ejecutar dentro de Apropiación
        let ejercicio = prompt("¿Qué ejercicio de apropiación deseas ejecutar (1-8)?: ");
        
        // Se selecciona el ejercicio 1
        if (ejercicio === "1") {
            console.log("Ejercicio 1 de Apropiación:");
            console.log("Diseña un código que muestre los números del 1 al 20, pero solo imprima los múltiplos de 3.");
            console.log(multiplosDeTres());
        }

        //Se selecciona el ejercicio 2
        else if (ejercicio === "2") {
            console.log("Ejercicio 2 de Apropiación:");
            console.log("Registrar ingreso de 5 estudiantes, validando carné.");
            console.log(registrarIngresoEstudiantes(prompt));
        }

        // Se selecciona el ejercicio 7
        else if (ejercicio === "7") {
            console.log("Ejercicio 7 de Apropiación:");
            console.log("Diseña un código que sume los números del 1 al 100, pero interrumpa el ciclo si encuentra un número mayor a 90 que sea par.")
            console.log(sumatoria());
        }
        
        // Se selecciona el ejercicio 8
        else if (ejercicio === "8") {
            console.log("Ejercicio 8 de Apropiación:");
            console.log("Crea un diagrama de flujo que lea el nombre y la edad de 5 personas. Solo mostrará en pantalla aquellas personas que tengan 18 años o más.");
            console.log(Adults());
        }
        
        // Se selecciona un ejercicio no válido
        else {
            console.log("Ejercicio no válido. Por favor, elige un número entre 1 y 8.");
        }
    }
    
    // Se selecciona la parte de Transferencia
    else if (choose === "T") {
        let ejercicio = prompt("¿Qué ejercicio de transferencia deseas ejecutar (1-8)?: ");

        




        if (ejercicio === "2") {
            console.log("Ejercicio 2 de Transferencia:");
            console.log("Crea un programa que: dado un número ingresado por el usuario, muestre su tabla de multiplicar hasta el 12");
            console.log(tablaMultiplicar(prompt));
        }
        else if (ejercicio === "7") {
            console.log("Ejercicio 7 de Transferencia:");
            console.log("Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra cuántos fueron pares y cuántos impares.");
            console.log(evenodd());
        }
        
        else if (ejercicio === "8") {
            console.log("Ejercicio 8 de Transferencia:");
            console.log("Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta 3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si acierta, mostrar “Bienvenido”.");
            console.log(login());
        }

        else {
            console.log("Ejercicio no válido. Por favor, elige un número entre 1 y 8.");
        }
    }
    
    // Se selecciona una sección no válida
    else {
        console.log("Opción no válida. Por favor, elige 'A' para Apropiación o 'T' para Transferencia.");
    }

    // Se cuestiona al usuario sobre su deseo de ejecutar otro Ejercicio
    let continueChoice = prompt("¿Deseas ejecutar otro ejercicio? (S/N): ");
    
    // En caso de que el usuario no desea continuar explícitamente, se cierra el programa
    if (continueChoice.toUpperCase() !== "S") {
        console.log("¡Gracias por usar el programa! Hasta luego.");
        break;
    }
}