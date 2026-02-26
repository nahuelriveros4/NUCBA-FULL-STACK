// --- FUNCIONES (DECLARACIÓN Y EJECUCIÓN) ---

// Definición: Declarar una función es como definir una "receta".
// Le das un nombre (saludo) para poder ejecutar ese código más tarde.
function saludo() {
    console.log("Hola!");
}

// Definición: Llamar o Invocar una función. 
// Es el acto de poner a funcionar la "receta" usando los paréntesis ().
saludo();


// --- RETORNO DE VALORES ---

// Definición: Una función puede procesar datos y DEVOLVER un resultado 
// mediante la palabra clave 'return'. 
function suma() {
    let resultado = 2 + 8;

    // 'return' corta la ejecución de la función y entrega el valor hacia afuera.
    return resultado
}

// Al llamar a la función dentro de un console.log, lo que se imprime 
// es el valor que la función "escupió" con el return.
console.log(suma()); 



/* RESUMEN DE FUNCIONES:
  1. REUTILIZACIÓN: Escribes el código una vez y lo llamas mil veces.
  2. SCOPE: Las variables creadas dentro (como 'resultado') solo existen ahí.
  3. RETURN: Es la salida de la función. Si no pones return, la función 
    devuelve 'undefined' por defecto.
*/