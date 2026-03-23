// Crea un programa que: solicite un usuario y contraseña. El programa debe permitir hasta 3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. Si acierta, mostrar “Bienvenido”.

// Definir el prompt
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Función para resolver el ejercicio
let tries, correctuser, correctpass;
tries = 0
correctuser = 'Usuario Correcto'
correctpass = 'Contraseña Correcta'

const login = () => {
    // Bucle para permitir un máximo de 3 intentos
    while (tries < 3) {
        // Solicitud de usuario y contraseña
        let user = prompt('Ingrese su usuario: ');
        let pass = prompt('Ingrese su contraseña:');

        // Verificación de las credenciales ingresadas
        if (user === correctuser && pass === correctpass) {
            return 'Bienvenido';
        }

        // Incremento del número de intentos
        tries++;
    }

    // Al alcanzar 3 intentos, se cierra el programa
    return 'Acceso denegado';
}

export { login }