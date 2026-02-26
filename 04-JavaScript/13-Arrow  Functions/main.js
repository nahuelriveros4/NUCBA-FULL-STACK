// --- FUNCIÓN TRADICIONAL ---

// Definición: Las funciones clásicas sufren "Hoisting Total". 
// Puedes llamarlas ANTES de que aparezcan en el código porque JS las sube al inicio.

descripcion("Rodri"); 

function descripcion (nombre, edad = 31) {
    console.log(`Hola! Mi nombre es ${nombre} y tengo ${edad} años`);
}


// --- ARROW FUNCTION (Función de Flecha) ---

// OJO: Si ejecutas 'descripcionFlecha()' aquí, dará ERROR: 
// "Cannot access 'descripcionFlecha' before initialization".
// A diferencia de la tradicional, las Arrow Functions guardadas en variables (const)
// NO tienen hoisting de función. Tienes que declararlas PRIMERO y usarlas DESPUÉS.

const descripcionFlecha = (nombre, edad = 31) => {
    // Definición: Se caracterizan por el uso del símbolo => (la flecha).
    // Son funciones anónimas que se suelen asignar a una constante.
    console.log(`Hola! Mi nombre es ${nombre} y tengo ${edad} años`);
}

// Forma correcta de llamarla:
descripcionFlecha("Rodrigo", 29);



/* DIFERENCIAS CLAVE:
  1. SINTAXIS: Son más cortas. Si solo tienen una línea, no necesitan { } ni 'return'.
  2. HOISTING: Las funciones tradicionales se elevan; las Arrow Functions no.
  3. CONTEXTO (this): Las Arrow Functions no tienen su propio 'this'. Heredan 
     el del lugar donde fueron creadas (esto es muy útil en objetos y eventos).
*/