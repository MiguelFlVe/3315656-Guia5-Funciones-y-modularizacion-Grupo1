/**
 * Simulación de venta de 15 boletos de cine - ADSO
 * Rechaza la venta si el comprador es menor de edad
 * y la película es para adultos.
 */
export function simularVentaBoletos(prompt) {
  let totalClientes = 15;
  let cliente = 1;
  let ventas = 0;
  let rechazados = 0;

  // Itera sobre los 15 compradores
  while (cliente <= totalClientes) {

    let edad = Number(prompt("Cliente #" + cliente + "\nIngrese la edad:"));
    let clasificacion = prompt("Clasificación de la película (A = Adultos, T = Todo público):").toUpperCase();

    if (edad < 18 && clasificacion === "A") {
      // Rechaza la venta y continúa con el siguiente cliente
      rechazados++;
    } else {
      ventas++;
    }

    cliente++;
  }

  return "Proceso finalizado.\nVentas realizadas: " + ventas + "\nVentas rechazadas: " + rechazados;
}