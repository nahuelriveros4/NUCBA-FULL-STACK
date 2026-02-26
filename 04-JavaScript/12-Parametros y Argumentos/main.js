// --- PARÁMETROS Y ARGUMENTOS ---

// Definición de PARÁMETRO: Es la variable local que definimos en la "receta" (nombre). 
// Actúa como un espacio reservado que espera recibir un valor.
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}

// Definición de ARGUMENTO: Es el valor REAL que le pasamos a la función 
// al momento de invocarla ("Rodri", "Mati").
saludar("Rodri")
saludar("Mati")


// --- PARÁMETROS POR DEFECTO ---

// Definición: Podemos asignar valores iniciales a los parámetros (nombre = "Rodrigo").
// Si al llamar a la función NO enviamos un argumento, se usarán estos valores.
function presentacion(nombre = "Rodrigo", edad = 32) {
    console.log(`Hola! Me llamo ${nombre} y tengo ${edad} años`);
}

// Aquí enviamos argumentos: se ignoran los valores por defecto ("Rodrigo", 32)
// y se usan los nuevos ("Mati", 29).
presentacion("Mati", 29)

// Si la llamáramos así: presentacion(), imprimiría "Hola! Me llamo Rodrigo y tengo 32 años".



/* RESUMEN:
  1. PARÁMETROS: Van en la DECLARACIÓN de la función (el diseño).
  2. ARGUMENTOS: Van en la LLAMADA/INVOCACIÓN de la función (el dato real).
  3. VALORES POR DEFECTO: Son "planes de respaldo" para evitar que el 
     código falle si falta un dato.
*/