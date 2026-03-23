export function multiplosDeTres() {
    let resultado = ""

    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            resultado += i + " "
        }
    }

    return resultado
}