/**
 * Simulación de competencia de atletismo (8 corredores, 4 vueltas)
 * Adaptado para ejecutarse en Node.js sin errores de ReferenceError.
 */
export function simularCompetencia(prompt) {
  let resultados = "";

  for (let i = 1; i <= 8; i++) {
    let vueltasCompletadas = 0;
    let sigueCorriendo = true;

    while (vueltasCompletadas < 4 && sigueCorriendo) {
      // Simulamos la decisión: 80% de probabilidad de que NO se canse
      // Esto reemplaza al confirm() que solo funciona en navegadores
      let seCanso = Math.random() < 0.20;

      if (seCanso) {
        sigueCorriendo = false;
      } else {
        vueltasCompletadas++;
      }
    }

    resultados += "Corredor " + i + ": " + vueltasCompletadas + " vueltas. | ";
  }

  return "Resultados de la competencia: " + resultados;
}