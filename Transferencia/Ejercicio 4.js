/**
 * Promedio de notas de 5 estudiantes - ADSO
 * Calcula el promedio y determina si aprueba o reprueba
 */
export function promedioNotas(prompt) {
  let totalEstudiantes = 5;
  let estudiante = 1;
  let resultado = "";

  while (estudiante <= totalEstudiantes) {

    let suma = 0;
    let cantidadNotas = 3; // puedes cambiar la cantidad si necesitas más notas
    let nota = 1;

    // Ingreso de notas por estudiante
    while (nota <= cantidadNotas) {
      let valor = Number(prompt("Estudiante #" + estudiante + "\nIngrese la nota " + nota + ":"));
      suma += valor;
      nota++;
    }

    let promedio = suma / cantidadNotas;

    // Evaluación
    if (promedio >= 3.0) {
      resultado += "Estudiante #" + estudiante + " → Promedio: " + promedio.toFixed(2) + " (Aprueba)\n";
    } else {
      resultado += "Estudiante #" + estudiante + " → Promedio: " + promedio.toFixed(2) + " (Reprueba)\n";
    }

    estudiante++;
  }

  return resultado;
}