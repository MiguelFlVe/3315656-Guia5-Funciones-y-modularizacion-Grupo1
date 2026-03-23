//Construye un diagrama de flujo que permita registrar el ingreso de 5 estudiantes a un salón. 
// Si un estudiante no trae su carné, no debe ingresar y el ciclo debe continuar con el siguiente.

// Función para registrar el ingreso de 5 estudiantes
function registrarIngresoEstudiantes(prompt) {
    let contador = 1; // Controla los 5 estudiantes
    let resultado = ""; // Acumula los mensajes

    while (contador <= 5) {

        // Pedimos el nombre del estudiante
        let nombre = prompt("Ingrese el nombre del estudiante #" + contador + ": ");

        // Preguntamos si trae carné
        let tieneCarne = prompt("¿Trae carné? (si/no): ");

        // Validamos si puede ingresar
        if (tieneCarne.toLowerCase() === "si") {

            // Puede ingresar
            resultado += "✅ " + nombre + " puede ingresar al salón\n";

        } else {

            // No puede ingresar
            resultado += "❌ " + nombre + " NO puede ingresar (sin carné)\n";
        }

        // Pasamos al siguiente estudiante
        contador++;
    }

    // Retornamos todo el resultado
    return resultado;
}

// Exportamos la función
export { registrarIngresoEstudiantes };