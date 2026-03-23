// Crea un diagrama de flujo que lea el nombre y la edad de 5 personas. Solo mostrará en pantalla aquellas personas que tengan 18 años o más.

// Definir el prompt
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Función para desarrollar el ejercicio
const Adults = () => {
    // Se genera una lista vacía
    let adults = [];

    // Se abre el ciclo para la solicitud de datos de 5 personas
    for (let i = 1; i <= 5; i++) {
        // Solicitud de nombre y edad
        let name = prompt(`Ingrese el nombre de la persona ${i}: `);
        let age = parseInt(prompt(`Ingrese la edad de ${name}: `));
        
        // Verificar si la persona es mayor de edad, para guardar su información en la lista
        if (age >= 18) {
            adults.push(`El usuario ${name} tiene ${age} años y es mayor de edad.`);
        }
    }

    // Devolver la lista de personas mayores de edad
    return adults;
}

// Exportar la función
export { Adults }