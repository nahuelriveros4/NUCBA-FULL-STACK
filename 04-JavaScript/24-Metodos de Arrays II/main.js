// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// --- MÉTODO MAP ---
// Definición: Transforma cada elemento del array y devuelve un NUEVO array 
// con la misma longitud, pero con los valores modificados.
let numerosDuplicados = numeros.map((numero) => {
    return numero * 2
})
console.log(numerosDuplicados);

// --- MÉTODO FILTER ---
// Definición: Crea un NUEVO array que contiene solo los elementos que 
// cumplen con la condición lógica (devuelven true en el callback).
let numerosMayoresA5 = numeros.filter((numero) => {
    return numero > 5
})
console.log(numerosMayoresA5);



// --- MÉTODO FIND ---
// Definición: Devuelve el PRIMER elemento que cumpla la condición. 
// A diferencia de filter, apenas encuentra uno, se detiene y devuelve el valor (no un array).
let numeroEncontrado = numeros.find((numero) => {
    return numero > 5
})
console.log(numeroEncontrado);

// --- MÉTODO REDUCE ---
// Definición: Reduce el array a un ÚNICO valor (un número, un objeto, etc.). 
// El 'acumulador' guarda el resultado de las vueltas anteriores.
// El '0' al final es el valor inicial del acumulador.
let suma = numeros.reduce((acumulador, valor) => {
    return acumulador + valor
}, 0)
console.log(suma);

// --- MÉTODO FOREACH ---
// Definición: Es una alternativa al bucle 'for'. Recorre el array y ejecuta 
// código para cada elemento, pero NO devuelve nada (retorna undefined).
numeros.forEach((numero) => {
    console.log(numero);
})

// --- MÉTODO SOME ---
// Definición: Devuelve true si AL MENOS UN elemento cumple la condición.
let hayAlgunoMayorA5 = numeros.some((numero) => {
    return numero > 5
})
console.log(hayAlgunoMayorA5);

// --- MÉTODO EVERY ---
// Definición: Devuelve true solo si TODOS los elementos cumplen la condición.
let todosSonMayoresA5 = numeros.every((numero) => {
    return numero > 5
})
console.log(todosSonMayoresA5);

// --- MÉTODO SORT ---
// Definición: Ordena los elementos. OJO: Este método sí MODIFICA el array original.
// La función (a, b) => b - a ordena de forma descendente.
let arrayDesordenado = [1, 3, 2, 5, 4]
let numerosOrdenados = arrayDesordenado.sort((a, b) => {
    return b - a
})
console.log(numerosOrdenados);



/* RESUMEN DE MÉTODOS DE ORDEN SUPERIOR:
  1. MAP/FILTER: Siempre devuelven un nuevo array.
  2. FIND: Devuelve un solo elemento o undefined.
  3. REDUCE: Transforma una lista en un solo dato.
  4. SOME/EVERY: Siempre devuelven un Booleano (true/false).
*/