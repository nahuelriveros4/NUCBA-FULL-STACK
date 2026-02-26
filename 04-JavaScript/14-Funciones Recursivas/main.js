// --- FUNCIONES RECURSIVAS ---

// Definición: Una función recursiva es aquella que se invoca a sí misma.
// Para que no sea infinita, SIEMPRE necesita una "Condición de Corte" o "Caso Base".

let cuentaAtras = (numero) => {
    // 1. CASO BASE (Condición de corte):
    // Definición: Es el momento en que la función deja de llamarse a sí misma.
    // Sin esto, tendríamos un error de "Stack Overflow" (desbordamiento de memoria).
    if (numero === 0) {
        return console.log(0);
    }

    // 2. ACCIÓN:
    console.log(numero);

    // 3. RECURSIVIDAD:
    // Definición: La función se llama a sí misma pero con un cambio en el argumento
    // para acercarse cada vez más al Caso Base (en este caso, restando 1).
    return cuentaAtras(numero - 1)
}

cuentaAtras(5)



let duplicar = (num) => {
    num = num + num
    console.log(num);

    // CASO BASE: Si el número supera 100, la recursión se detiene.
    if (num > 100) {
        return console.log("El número ya es muy grande");
    }

    // RECURSIVIDAD: Se vuelve a llamar con el nuevo valor duplicado.
    return duplicar(num)
}

duplicar(2)

/* RESUMEN DE RECURSIVIDAD:
  1. CASO BASE: El ancla que detiene la función (fundamental).
  2. CASO RECURSIVO: La llamada a la misma función con un dato modificado.
  3. STACK: Cada llamada se apila en la memoria hasta que el caso base se resuelve.
*/