// Diseña un diagrama de flujo que sume los números del 1 al 100, pero interrumpa el ciclo si encuentra un número mayor a 90 que sea par.

const sumatoria = () => {
    let suma = 0;

    for (let i = 1; i <= 100; i++) {
        if (i > 90 && i % 2 === 0) {
            break;
        } else {
            suma += i;
        }
    }

    return suma;
}

export { sumatoria }