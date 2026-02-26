//Variables

// --- VAR ---
// Definición: Declara una variable de alcance global o de función. 
// Permite la "REDECLARACIÓN" (volver a usar 'var numeroA') y la "REASIGNACIÓN".
// Actualmente se considera una práctica antigua y puede causar errores inesperados.
var numeroA = 230
var textoA = "Hola"

console.log(numeroA);
console.log(textoA);

var numeroA = 999 // Aquí se está REDECLARANDO sin errores.

console.log(numeroA);


// --- LET ---
// Definición: Declara una variable de alcance de bloque (limitada a { ... }).
// Permite la "REASIGNACIÓN" (cambiar el valor), pero NO permite la "REDECLARACIÓN" 
// en el mismo ámbito. Es la forma estándar y segura de declarar variables que cambian.
let numeroB = 324
let textoB = "Chau"

console.log(numeroB);
console.log(textoB);

// let numeroB = 999 // Esto daría ERROR: no se puede volver a declarar.
numeroB = 999 // Esto es REASIGNAR el valor, lo cual es correcto.

console.log(numeroB);


// --- CONST ---
// Definición: Declara una constante de alcance de bloque. 
// NO permite ni la "REDECLARACIÓN" ni la "REASIGNACIÓN". 
// Una vez que le asignas un valor, este queda protegido y no puede cambiar.
const numeroC = 444
const textoC = "Const"

console.log(numeroC);
console.log(textoC);

// const numeroC = 555 // ERROR: No se puede redeclarar.
// numeroC = 555 // ERROR: No se puede reasignar un nuevo valor a una constante.

console.log(numeroC);