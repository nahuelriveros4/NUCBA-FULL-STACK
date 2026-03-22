let nombre = "Rodrigo"

// --- PROPIEDAD LENGTH ---
// Definición: Devuelve la cantidad de caracteres de la cadena (incluyendo espacios).
console.log(nombre.length); 

// --- MÉTODO TOUPPERCASE / TOLOWERCASE ---
// Definición: Transforman todo el texto a mayúsculas o minúsculas respectivamente.
// Útil para normalizar datos antes de compararlos.
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());

let chocolatePreferido = "Chocolate negro"

// --- MÉTODO REPLACE ---
// Definición: Busca un valor específico y lo reemplaza por otro. 
// Nota: Por defecto, solo reemplaza la primera coincidencia que encuentra.
console.log(chocolatePreferido.replace("negro", "blanco"));

// --- MÉTODO TRIM ---
// Definición: Elimina los espacios en blanco al inicio y al final de la cadena.
// Ideal para limpiar inputs de formularios.
let stringConEspacios = "    Hola, soy Rodrigo    "
console.log(stringConEspacios.trim());

let stringLargo = "Hola, soy Rodrigo, tengo 31 años, trabajo en Nucba y utilizo React"

// --- MÉTODO SPLIT ---
// Definición: Divide el string en un ARRAY de sub-strings, usando un separador 
// que nosotros definimos (en este caso, el número "31").
console.log(stringLargo.split("31"))

// --- MÉTODO REPEAT ---
// Definición: Devuelve una nueva cadena que contiene el string original 
// repetido la cantidad de veces que le indiquemos.
console.log(nombre.repeat(5));

// --- MÉTODO CHARAT ---
// Definición: Devuelve el carácter que se encuentra en la posición (índice) indicada.
// Recuerda que en programación empezamos a contar desde 0.
console.log(nombre.charAt(2)); // Resultado: "d"

// --- MÉTODO CONCAT ---
// Definición: Combina dos o más cadenas de texto y devuelve una nueva.
console.log(nombre.concat(" ", "Troncoso"));
console.log(nombre.concat(chocolatePreferido));

// --- MÉTODO INCLUDES ---
// Definición: Determina si una cadena existe dentro de otra. Devuelve un Booleano (true/false).
// IMPORTANTE: Es "Case Sensitive" (distingue mayúsculas de minúsculas).
console.log(stringLargo.includes("Nucba")); // true
console.log(stringLargo.includes("nuc"));   // false (por la 'n' minúscula)

// --- MÉTODO SLICE ---
// Definición: Extrae una sección de la cadena y la devuelve como una nueva.
// Parámetros: (índice de inicio, índice de fin -no incluido-).
console.log(stringLargo.slice(8, 15)); // Extrae "soy Rod"
console.log(stringLargo.slice(8));     // Extrae desde el 8 hasta el final.



/* RESUMEN DE STRINGS:
  1. INMUTABILIDAD: Los métodos de string NO modifican el string original, 
     siempre devuelven uno nuevo.
  2. ÍNDICES: Al igual que los arrays, los caracteres se cuentan desde el 0.
  3. CASE SENSITIVE: Métodos como .includes() o .replace() son sensibles 
     a mayúsculas y minúsculas.
*/