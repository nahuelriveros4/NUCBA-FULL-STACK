// --- SPREAD OPERATOR EN ARRAYS ---

let arrayOriginal = [1, 2, 3, 4, 5, 6]

// Definición de ASIGNACIÓN POR REFERENCIA:
// Aquí NO estás creando una copia. Ambas variables apuntan al mismo lugar en memoria.
// Si cambias uno, el otro también cambia (como un alias).
let asignarArray = arrayOriginal

// Definición de SPREAD OPERATOR (Copia por Valor):
// Los tres puntos (...) "sacan" los elementos del original y los ponen en uno nuevo.
// Esto crea una COPIA INDEPENDIENTE en un nuevo lugar de la memoria.
let spreadArray = [...arrayOriginal]

spreadArray[0] = 86 // Solo afecta a 'spreadArray'

console.log("Original " + arrayOriginal); // [1, 2, 3, 4, 5, 6]
console.log("Asignado " + asignarArray);  // [1, 2, 3, 4, 5, 6]
console.log("Spread " + spreadArray);     // [86, 2, 3, 4, 5, 6]


// --- SPREAD OPERATOR EN OBJETOS ---

let objetoOriginal = {
    nombre: "Rodrigo",
    edad: 32,
}

// Definición de COMPOSICIÓN DE OBJETOS:
// El spread operator permite copiar todas las propiedades de un objeto 
// y, al mismo tiempo, agregar nuevas o sobreescribir existentes de forma simple.
let objetoSpread = {
    ...objetoOriginal, // Copia nombre y edad
    apellido: "Troncoso" // Agrega una nueva propiedad
}

let objetoDobleSpread = {
    ...objetoSpread, // Copia nombre, edad y apellido
    Trabajo: "React Developer"
}

console.log(objetoOriginal);
console.log(objetoSpread);
console.log(objetoDobleSpread);



/* RESUMEN DEL SPREAD OPERATOR:
  1. INMUTABILIDAD: Es clave para no modificar los datos originales (muy importante en React).
  2. CLONACIÓN: Permite crear copias superficiales (shallow copies) rápidamente.
  3. FUSIÓN: Facilita unir varios arrays o objetos en uno solo: [...a, ...b].
*/