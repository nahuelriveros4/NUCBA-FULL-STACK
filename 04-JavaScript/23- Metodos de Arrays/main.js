let miArray = ["hola", "Nucba", true, 123, "chau"]

// --- PROPIEDAD LENGTH ---
// Definición: Devuelve el número total de elementos en el array.
console.log(miArray.length);

// --- MÉTODO INDEXOF ---
// Definición: Busca un elemento y devuelve su ÍNDICE (posición). 
// Si no lo encuentra, devuelve -1. Es ideal para saber si algo existe y dónde.
console.log(miArray.indexOf("Nucba")); // 1
console.log(miArray.indexOf(false));   // -1

// --- MÉTODOS DE ELIMINACIÓN (POP y SHIFT) ---
// pop: Elimina el ÚLTIMO elemento y lo retorna.
// shift: Elimina el PRIMER elemento y lo retorna.
// Nota: Ambos MODIFICAN el array original (mutación).

// --- MÉTODO PUSH ---
// Definición: Agrega uno o más elementos al FINAL del array. 
// Retorna la nueva longitud del array.
miArray.push("Nuevo elemento")
console.log(miArray);

// --- MÉTODO UNSHIFT ---
// Definición: Agrega uno o más elementos al PRINCIPIO del array.
// Al igual que push, desplaza todos los índices existentes.
miArray.unshift("Primer elemento")
console.log(miArray);

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// --- MÉTODO REVERSE ---
// Definición: Invierte el orden de los elementos del array IN SITU (modifica el original).
// console.log(arrayNumeros.reverse());

// --- MÉTODO TOSTRING ---
// Definición: Convierte el array en una cadena de texto separada por comas.
// console.log(arrayNumeros.toString());

// --- MÉTODO JOIN ---
// Definición: Une todos los elementos en un string, pero nos permite 
// elegir el SEPARADOR (en tu caso, un guion " - ").
console.log(arrayNumeros.join(" - "));

// --- MÉTODO CONCAT ---
// Definición: Une dos o más arrays devolviendo uno NUEVO. No modifica los originales.
console.log(miArray.concat(arrayNumeros));

// --- MÉTODO SLICE ---
// Definición: "Corta" una porción del array.
// Parámetros: (índice inicio, índice fin -no incluido-). No modifica el original.
console.log(arrayNumeros.slice(2, 5)); // Índices 2, 3 y 4.

// --- MÉTODO INCLUDES ---
// Definición: Determina si un array contiene un elemento específico.
// Devuelve un valor booleano (true/false).
console.log(arrayNumeros.includes(5));  // true
console.log(arrayNumeros.includes(24)); // false



/* RESUMEN DE MÉTODOS:
  1. MUTABLES (Modifican el original): push, pop, shift, unshift, reverse.
  2. INMUTABLES (Devuelven algo nuevo): concat, slice, join, includes, indexOf.
  3. REGLA: Usa slice si quieres copiar una parte sin romper el original, 
     y join si necesitas mostrar la lista como texto legible.
*/