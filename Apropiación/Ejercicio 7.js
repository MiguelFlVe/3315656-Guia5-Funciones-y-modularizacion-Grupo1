// Diseña un diagrama de flujo que sume los números del 1 al 100, pero interrumpa el ciclo si encuentra un número mayor a 90 que sea par.

// Función para el desarrollo del ejercicio
const sumatoria = () => {
    // Definición de variable para guardar la suma
    let suma = 0;

    // Apertura de ciclo para realizar la suma
    for (let i = 1; i <= 100; i++) {
        // Comprobación de la condición para interrumpir el ciclo
        if (i > 90 && i % 2 === 0) {
            break;
        }
        
        // Si la condición no se cumple, se suma el número a la variable de suma
        else {
            suma += i;
        }
    }

    // Retorno del resultado total de la suma realizada
    return suma;
}

// Exportar la función
export { sumatoria }