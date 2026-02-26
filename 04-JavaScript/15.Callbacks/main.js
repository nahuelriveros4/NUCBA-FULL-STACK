// --- CALLBACKS ---

// Definición de la función CALLBACK:
// Es una función que se pasa como ARGUMENTO a otra función. 
// No se ejecuta inmediatamente, sino que "espera" a ser llamada.
let logSaludo = (nombre) => {
    console.log(`Hola ${nombre}`);
}

// Definición de la función de ORDEN SUPERIOR (Higher-Order Function):
// Es la función que RECIBE el callback y se encarga de ejecutarlo
// en el momento adecuado del proceso.
let generarNombre = (callback) => {
    // 1. Ejecuta una acción (pedir el nombre)
    let nombre = prompt("Por favor, ingresá tu nombre")
    
    // 2. Ejecuta el callback que recibió por parámetro,
    // pasándole el dato que obtuvo ("nombre").
    callback(nombre)
}

// EJECUCIÓN:
// Pasamos 'logSaludo' (sin paréntesis) como argumento.
// Si pusiéramos 'logSaludo()', la ejecutaríamos antes de tiempo.
generarNombre(logSaludo);



/* RESUMEN DE CALLBACKS:
  1. QUÉ SON: Funciones enviadas como parámetros.
  2. PARA QUÉ SIRVEN: Para asegurar que una acción ocurra DESPUÉS de otra 
     (muy común en peticiones a bases de datos o clics de botones).
  3. SINTAXIS: Al pasar el callback, NO se usan paréntesis. Los paréntesis 
     se usan dentro de la función que lo recibe para "activarlo".
*/