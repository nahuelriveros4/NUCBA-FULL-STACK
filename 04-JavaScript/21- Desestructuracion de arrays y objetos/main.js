// --- DESESTRUCTURACIÓN DE ARRAYS ---

let arrayDescripcion = [
    "Rodrigo",
    "Nucba",
    "Javascript",
    "React",
    "Node",
    "MongoDB",
    "Express"
]

// Definición: En los arrays, la desestructuración es POSICIONAL.
// El primer nombre que elijas guardará el primer elemento del array, y así sucesivamente.
// También puedes usar el Rest Operator (...) para agrupar el "sobrante".
const [nombreArray, escuela, lenguaje, ...tecnologiasResto] = arrayDescripcion

console.log(nombreArray);     // "Rodrigo"
console.log(escuela);         // "Nucba"
console.log(tecnologiasResto); // ["React", "Node", "MongoDB", "Express"]



// --- DESESTRUCTURACIÓN DE OBJETOS ---

let objetoDescripcion = {
    nombre: "Rodrigo",
    apellido: "Troncoso",
    edad: 32,
    trabajo: "React Developer"
}

// Definición: En los objetos, la desestructuración NO es posicional, sino por NOMBRE DE CLAVE.
// No importa el orden en que las escribas, siempre que el nombre coincida con la propiedad del objeto.
const { nombre, trabajo, edad } = objetoDescripcion

// Esto reemplaza la necesidad de escribir 'objetoDescripcion.nombre' repetidas veces.
console.log(nombre);  // "Rodrigo"
console.log(trabajo); // "React Developer"
console.log(edad);    // 32



/* RESUMEN DE DESESTRUCTURACIÓN:
  1. ARRAYS: Se usan corchetes [ ]. El orden importa. Se puede saltar elementos usando comas (ej: [a, , c]).
  2. OBJETOS: Se usan llaves { }. El nombre de la variable debe ser igual a la clave del objeto.
  3. ALIAS: En objetos puedes renombrar si quieres: const { nombre: primerNombre } = objeto.
  4. LIMPIEZA: Evita repetir el nombre del objeto/array padre cientos de veces en el código.
*/