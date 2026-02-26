// --- EXPLICACIÓN DE HOISTING (Elevación) ---
// Aquí sucede algo curioso: NO da error. 
// JavaScript "eleva" la declaración 'var primerVariable' al inicio del archivo.
// Pero OJO: solo eleva la declaración, NO el valor ("Hola soy...").
// Por eso, en esta línea la variable existe pero vale 'undefined'.

console.log(primerVariable); // Resultado: undefined

var primerVariable = "Hola soy la primer variable"

// Aquí ya se ejecutó la asignación, por lo que muestra el texto completo.
console.log(primerVariable); // Resultado: "Hola soy la primer variable"


// --- EXPLICACIÓN DE SCOPE (Alcance) ---
{
    // Las variables declaradas con 'var' NO tienen alcance de bloque.
    // Ignoran las llaves { } y se comportan como si estuvieran afuera.
    var segundaVariable = "Hola, soy la segunda variable"
}

// Como 'var' no se queda encerrada en el bloque, podemos acceder a ella
// desde cualquier parte del código (Scope Global/Función).
console.log(segundaVariable); // Resultado: "Hola, soy la segunda variable"

/* DEFINICIONES CLAVE:
  
  1. HOISTING: Es el proceso donde JavaScript escanea el código y "sube" 
     todas las declaraciones 'var' al principio, dándoles el valor inicial 
     de 'undefined' antes de empezar a leer línea por línea.
     
  2. SCOPE DE VAR: A diferencia de 'let' o 'const', 'var' tiene un alcance 
     de función o global. Si la pones dentro de un bloque { } (como un if 
     o un simple par de llaves), la variable "se escapa" y sigue viva afuera.
*/