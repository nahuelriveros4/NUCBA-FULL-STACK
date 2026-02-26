// --- OPERADORES DE COMPARACIÓN ---

// 1. IGUALDAD (==)
// Definición: Compara solo el VALOR. Si los tipos son distintos, JS intenta 
// convertirlos (coerción) para que coincidan.
console.log(5 == "5");  // true (el string "5" se convierte a número)


// 2. IGUALDAD ESTRICTA (===)
// Definición: Compara VALOR y TIPO de dato. Es la opción recomendada.
// No hace conversión automática.
console.log(5 === "5"); // false (un número no es igual a un string)


// 3. DESIGUALDAD o DISTINTO (!=)
// Definición: Devuelve true si los VALORES son diferentes, permitiendo conversión.
console.log(10 != "10"); // false (porque al convertirlos, son iguales)


// 4. DESIGUALDAD ESTRICTA (!==)
// Definición: Devuelve true si el VALOR o el TIPO son diferentes.
console.log(10 !== "10"); // true (porque los tipos son distintos)


// 5. MAYOR QUE (>) y MENOR QUE (<)
// Definición: Comparan si el valor de la izquierda es mayor o menor al de la derecha.
console.log(20 > 10);  // true
console.log(5 < 3);    // false


// 6. MAYOR O IGUAL (>=) y MENOR O IGUAL (<=)
// Definición: Comparan si es mayor/menor o exactamente el mismo valor.
console.log(10 >= 10); // true
console.log(5 <= 4);   // false


/* RESUMEN DE COMPARACIÓN:
   - Los operadores siempre devuelven un valor BOOLEANO (true o false).
   - Regla de oro: Usa siempre '===' y '!==' para evitar errores silenciosos
     causados por la conversión automática de tipos de JavaScript.
*/