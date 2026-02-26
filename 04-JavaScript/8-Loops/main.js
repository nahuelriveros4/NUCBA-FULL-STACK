// --- BUCLE FOR ---

// Definición: Se usa cuando SABEMOS de antemano cuántas veces queremos repetir 
// el código. Tiene 3 partes: inicialización, condición y actualización.
for (let i = 1; i < 11; i++) {
    // console.log(`Hola! Estoy en la iteración numero ${i}`);
}

// Definición: El for también puede ir hacia atrás (decremento) cambiando 
// el operador de actualización (--).
for (let i = 10; i >= 0; i--) {
    // console.log(`Estoy haciendo una cuenta regresiva ${i}`);
}



// --- BUCLE WHILE ---

// Definición: Se usa cuando NO sabemos exactamente cuántas veces se repetirá 
// el código, ya que depende de una condición externa. 
// "Mientras la condición sea verdadera, ejecuta esto".
let condicionDelWhile = 22;

// OJO: Si la condición es falsa desde el principio (como 22 < 10), 
// el bloque de código NUNCA se ejecuta.
while (condicionDelWhile < 10) {
    if (condicionDelWhile === 5) {
        console.log("El while esta en la iteración número 5");
    }
    // Definición: Es vital actualizar la variable dentro para evitar 
    // un "Bucle Infinito" que bloquee el navegador.
    condicionDelWhile++
}



// --- BUCLE DO WHILE ---

let condicionDelDoWhile = 55;

// Definición: A diferencia del 'while', este bucle ejecuta el código 
// AL MENOS UNA VEZ, y después de esa ejecución revisa la condición.
// Aunque 55 NO es menor a 10, verás el 55 impreso en la consola una vez.
do {
    console.log(condicionDelDoWhile);
    condicionDelDoWhile++
} while (condicionDelDoWhile < 10)


/* RESUMEN DE BUCLES:
  1. FOR: Ideal para recorrer arrays o contar (sabes el inicio y el fin).
  2. WHILE: Revisa la condición ANTES de entrar. Si es falsa, no hace nada.
  3. DO WHILE: Ejecuta primero y pregunta DESPUÉS. Te asegura una ejecución.
*/