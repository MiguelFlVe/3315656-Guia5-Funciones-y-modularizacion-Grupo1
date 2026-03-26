/**
 * Juego del adivinador - 
 * Genera un número aleatorio entre 1 y 20
 * El usuario intenta adivinar hasta acertar
 */
export function juegoAdivinador(prompt) {
  let numeroSecreto = Math.floor(Math.random() * 20) + 1;
  let intento = 0;
  let mensaje = "";
  let adivinado = false;

  while (!adivinado) {

    let numero = Number(prompt("Adivina el número (1 - 20):"));
    intento++;

    if (numero === numeroSecreto) {
      mensaje += "¡Correcto! Adivinaste el número en " + intento + " intentos.";
      adivinado = true;
    }
    else if (numero < numeroSecreto) {
      mensaje += "El número es mayor.\n";
    }
    else {
      mensaje += "El número es menor.\n";
    }
  }

  return mensaje;
}