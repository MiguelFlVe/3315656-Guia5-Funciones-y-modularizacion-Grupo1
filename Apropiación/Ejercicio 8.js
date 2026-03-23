// Crea un diagrama de flujo que lea el nombre y la edad de 5 personas. Solo mostrará en pantalla aquellas personas que tengan 18 años o más.

const Adults = () => {
    let adults = [];
    
    for (let i = 1; i <= 5; i++) {
        let name = prompt(`Ingrese el nombre de la persona ${i}:`);
        let age = parseInt(prompt(`Ingrese la edad de ${name}:`));
        if (age >= 18) {
            adults.push(`El usuario ${name} tiene ${age} años y es mayor de edad.`);
        }
    }

    return adults;
}

export { Adults }