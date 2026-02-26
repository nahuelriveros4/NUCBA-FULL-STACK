// --- EL CONTEXTO "THIS" ---

let auto = {
    marca: "Fiat",
    modelo: "Uno",
    anio: 2002,
    combustible: "Nafta",
    seguro: true,
    color: ["Rojo", "Azul", "Negro"],

    // Definición de THIS en ARROW FUNCTIONS:
    // Las funciones de flecha NO tienen su propio 'this'. 
    // Heredan el 'this' del contexto donde el objeto fue creado (el Scope Global).
    thisFlecha: () => {
        console.log(this); // Verás el objeto Global (Window en el navegador).
    },

    // Definición de THIS en FUNCIONES TRADICIONALES:
    // En una función clásica, 'this' se refiere al objeto que "posee" la función 
    // al momento de ejecutarla. 
    thisFunction: function () {
        console.log(this); // Verás el objeto 'auto' con todas sus propiedades.
    }
}

// EJECUCIÓN:

// 1. Imprime el contexto global (normalmente vacío o con funciones del sistema).
auto.thisFlecha(); 

// 2. Imprime el objeto 'auto'. Aquí podrías hacer 'this.marca' para obtener "Fiat".
auto.thisFunction(); 



/* RESUMEN DE THIS:
  1. FUNCIONES TRADICIONALES: 'this' es el objeto que llama a la función (dinámico).
  2. ARROW FUNCTIONS: 'this' es el valor que tenía 'this' afuera del objeto (léxico).
  3. REGLA DE ORO: Si necesitas acceder a propiedades del mismo objeto (como auto.modelo), 
  USA funciones tradicionales. Si no quieres que el contexto cambie, usa Arrow Functions.
*/