// --- REST OPERATOR (...) ---

// Definición: El Rest Operator se utiliza como el ÚLTIMO parámetro de una función.
// Su trabajo es agrupar todos los argumentos adicionales que se pasen al invocarla 
// y guardarlos dentro de un Array con el nombre que elijamos (en este caso, 'rest').
let promedioCalificaciones = (nombre, apellido, ...rest) => {
    
    // Aquí 'rest' ya es un array que contiene [8, 10, 7, 6, 2].
    // Definición: Esto permite que la función sea FLEXIBLE y acepte 
    // cualquier cantidad de argumentos sin tener que definirlos uno por uno.
    let arrayCalificaciones = [...rest] 
    
    let suma = 0
    for (let i = 0; i < arrayCalificaciones.length; i++) {
        suma = suma + arrayCalificaciones[i]
    }

    return console.log(
        `El promedio de calificaciones de ${nombre} ${apellido} es ${
            suma / arrayCalificaciones.length
        }`
    );
}

// EJECUCIÓN:
// "Rodrigo" -> cae en 'nombre'
// "Troncoso" -> cae en 'apellido'
// 8, 10, 7, 6, 2 -> el Rest Operator los atrapa todos y los mete en el array 'rest'
promedioCalificaciones("Rodrigo", "Troncoso", 8, 10, 7, 6, 2)



/* RESUMEN DEL REST OPERATOR:
  1. UBICACIÓN: Siempre debe ser el último parámetro de la función. No puedes 
     poner nada después de '...rest'.
  2. UTILIDAD: Es ideal cuando no sabes cuántos datos va a enviar el usuario 
     (por ejemplo, una lista de productos en un carrito o, como aquí, notas).
  3. DIFERENCIA CON SPREAD: 
     - Spread: Abre un array (lo expande).
     - Rest: Cierra valores sueltos dentro de un array (los agrupa).
*/