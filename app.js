//Apropiación
// Ejercicio 1
import { multiplosDeTres } from "./Apropiación/Ejercicio 1.js"
// Ejercicio 7
import { sumatoria } from "./Apropiación/Ejercicio 7.js"

// Definir la pop-up para elegir la sección y el ejercicio a ejecutar
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const rl = readline.createInterface({ input, output });

while (true){
    let choose = await rl.question("¿Qué parte de la guía deseas ejecutar (Apropiación [A] o Transferencia [T])? (Escriba solo la letra inicial del nombre de sección, en mayúscula): ");

    if (choose === "A") {
        let ejercicio = await rl.question("¿Qué ejercicio de apropiación deseas ejecutar (1-7)?: ");
        
        if (ejercicio === "1") {
            console.log("Ejercicio 1 de Apropiación:");
            console.log("Diseña un código que muestre los números del 1 al 20, pero solo imprima los múltiplos de 3.");
            console.log(multiplosDeTres());
        }
        
        else if (ejercicio === "7") {
            console.log("Ejercicio 7 de Apropiación:");
            console.log("Diseña un código que sume los números del 1 al 100, pero interrumpa el ciclo si encuentra un número mayor a 90 que sea par.")
            console.log(sumatoria());
        }
        
        else {
            console.log("Ejercicio no válido. Por favor, elige un número entre 1 y 7.");
        }
    }
    
    else if (choose === "T") {
        console.log("Ejercicios de transferencia aún no implementados.");
    }
    
    else {
        console.log("Opción no válida. Por favor, elige 'A' para Apropiación o 'T' para Transferencia.");
    }

    let continueChoice = await rl.question("¿Deseas ejecutar otro ejercicio? (S/N): ");
    
    if (continueChoice.toUpperCase() !== "S") {
        console.log("¡Gracias por usar el programa! Hasta luego.");
        break;
    }
}

rl.close();