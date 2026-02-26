// --- ARRAYS (ARREGLOS) ---

// Definición: Un Array es una estructura de datos que permite almacenar 
// múltiples valores en una sola variable, organizados por un índice (posición).
let miArray = [1, 2, 3, 4, 5, 6]

console.log(miArray); // Imprime el contenido completo del array


// Definición: En JavaScript, los arrays son DINÁMICOS y HETEROGÉNEOS. 
// Esto significa que pueden guardar diferentes tipos de datos al mismo tiempo.
let miArrayVariado = [2, "Nucba", true]

console.log(miArrayVariado);


// --- PROPIEDAD .LENGTH ---

// Definición: '.length' es una propiedad que devuelve la CANTIDAD de elementos 
// que hay en el array. Nota: El conteo de elementos empieza en 1.
console.log(miArray.length); // Resultado: 6


// --- RECORRER UN ARRAY (ITERACIÓN) ---

// Definición: El índice de un array SIEMPRE empieza en 0. 
// Por eso, en el 'for' inicializamos 'i = 0'.
// La condición 'i < miArrayVariado.length' asegura que no intentemos 
// acceder a una posición que no existe.

for (let i = 0; i < miArrayVariado.length; i++) {
    // Definición: Usamos corchetes [i] para acceder al valor en la 
    // posición actual de la iteración.
    console.log(miArrayVariado[i]);
}

let colores = ["Rojo", "Verde"];

// --- MÉTODOS DE MUTACIÓN (Modifican el array original) ---

// 1. .push()
// Definición: Agrega uno o más elementos al FINAL del array.
colores.push("Azul"); 
// colores ahora es ["Rojo", "Verde", "Azul"]


// 2. .pop()
// Definición: Elimina el ÚLTIMO elemento del array y lo devuelve.
let eliminado = colores.pop(); 
// colores vuelve a ser ["Rojo", "Verde"]. 'eliminado' vale "Azul".


// 3. .unshift()
// Definición: Agrega uno o más elementos al PRINCIPIO del array.
colores.unshift("Amarillo");
// colores ahora es ["Amarillo", "Rojo", "Verde"]


// 4. .shift()
// Definición: Elimina el PRIMER elemento del array.
colores.shift();
// colores vuelve a ser ["Rojo", "Verde"]


// --- MÉTODOS DE ITERACIÓN (Crean nuevos arrays o procesan datos) ---

let numeros = [1, 2, 3, 4];

// 5. .map()
// Definición: Crea un NUEVO array aplicando una función a cada elemento del original.
// Es ideal para transformar datos sin tocar el array inicial.
let dobles = numeros.map(num => num * 2);
// dobles es [2, 4, 6, 8]


// 6. .filter()
// Definición: Crea un NUEVO array solo con los elementos que cumplen una condición.
let mayoresADos = numeros.filter(num => num > 2);
// mayoresADos es [3, 4]


// 7. .forEach()
// Definición: Ejecuta una función para cada elemento, pero NO devuelve nada nuevo.
// Se usa para "hacer algo" con cada dato (como imprimirlo).
numeros.forEach(num => {
    console.log("Número: " + num);
});


/* RESUMEN DE ARRAYS:
  1. ÍNDICES: Empiezan en 0 (El primer elemento es miArray[0]).
  2. LONGITUD: Se obtiene con .length (siempre es el índice máximo + 1).
  3. ACCESO: Se usa la sintaxis de corchetes [] para leer o modificar valores.
  4. DINAMISMO: Puedes meter números, strings, booleanos e incluso otros arrays.
*/