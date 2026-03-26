/**
 * Simulación de tienda de productos - 
 * Permite registrar compras hasta que el usuario decida parar
 * Aplica 10% de descuento si supera $100000
 */
export function tiendaProductos(prompt) {
  let total = 0;
  let continuar = true;

  while (continuar) {

    let precio = Number(prompt("Ingrese el precio del producto:"));
    total += precio;

    let respuesta = prompt("¿Desea agregar otro producto? (S/N):").toUpperCase();

    if (respuesta !== "S") {
      continuar = false;
    }
  }

  let descuento = 0;

  if (total > 100000) {
    descuento = total * 0.10;
  }

  let totalFinal = total - descuento;

  return "Total de compra: $" + total +
    "\nDescuento aplicado: $" + descuento +
    "\nTotal a pagar: $" + totalFinal;
}