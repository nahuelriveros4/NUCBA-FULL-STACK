// --- CLOSURES (CLAUSURAS) ---

// Definición de Función Padre (Entorno Léxico):
// Cuando esta función se ejecuta, crea un espacio en memoria para sus variables.
const funcionPadre = () => {
    let numero = 5 // Esta variable "vive" dentro de funcionPadre.

    // Definición de Función Hijo (El Closure):
    // Al estar definida DENTRO de funcionPadre, tiene acceso a 'numero'.
    const funcionHijo = () => {
        numero = numero + 1 // "Atrapa" y modifica la variable de su padre.
        return numero
    };

    // IMPORTANTE: Devolvemos la función hijo sin ejecutarla.
    // Al hacerlo, el hijo se lleva "bajo el brazo" el acceso a la variable 'numero'.
    return funcionHijo
}

// Aquí ejecutamos funcionPadre. Normalmente, 'numero' debería desaparecer 
// de la memoria al terminar la ejecución, pero...
const closure = funcionPadre();

// 'closure' ahora es la 'funcionHijo'.
console.log(closure); // Verás: [Function: funcionHijo]

// Al ejecutarla, vemos que SIGUE recordando a 'numero'.
console.log(closure()); // Resultado: 6
console.log(closure()); // Resultado: 7 (Mantiene el estado)



/* RESUMEN DE CLOSURES:
  1. QUÉ SON: Una función que "recuerda" y accede a las variables de su ámbito exterior (padre) aunque este ya haya finalizado.
  2. PRIVACIDAD: Permiten crear variables "privadas" que no pueden ser modificadas desde afuera, solo a través de la función hijo.
  3. ESTADO: Son ideales para crear contadores o funciones que deben mantener una memoria interna.
*/