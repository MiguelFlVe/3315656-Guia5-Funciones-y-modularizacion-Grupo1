/**
 * Simulación de Cajero Automático - ADSO
 * Itera retiros hasta que el saldo sea insuficiente.
 */
export function simularCajero(prompt) {
  let saldo = Number(prompt("Ingrese el saldo inicial de la cuenta:"));
  let continuar = true;

  // El bucle se repite mientras el saldo sea positivo y el usuario no sea rechazado
  while (saldo > 0 && continuar) {
    let retiro = Number(prompt("Saldo disponible: $" + saldo + "\n¿Cuánto desea retirar?"));

    if (retiro > 0 && retiro <= saldo) {
      saldo = saldo - retiro;
    } else {
      // Si el monto es mayor al saldo, el ciclo se detiene
      continuar = false;
    }
  }

  return "Proceso finalizado. Saldo sobrante en cuenta: $" + saldo;
}