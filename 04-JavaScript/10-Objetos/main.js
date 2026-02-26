// --- OBJETOS LITERALES ---

// Definición: Un objeto es una colección de propiedades relacionadas. 
// Cada propiedad tiene una "clave" (o nombre) y un "valor". 
// A diferencia de los arrays, los datos se guardan por nombre, no por posición.
let auto = {
    marca: "Fiat",        // Clave: marca, Valor: "Fiat"
    modelo: "Uno",
    anio: 2002,
    combustible: "Nafta",
    seguro: true,
    color: ["Rojo", "Azul", "Negro"] // Un objeto puede tener un array como valor.
}

console.log(auto);


// --- ACCESO A PROPIEDADES ---

// Definición (Bracket Notation): Acceso mediante corchetes y strings. 
// Es útil cuando el nombre de la propiedad está en una variable.
console.log(auto["anio"]); 


// Definición (Dot Notation): Acceso mediante el punto. 
// Es la forma más común y limpia de leer una propiedad.
console.log(auto.modelo);


// --- MODIFICACIÓN DE VALORES ---

// Definición: Podemos cambiar el valor de una propiedad existente 
// simplemente accediendo a ella y asignándole un nuevo dato.
auto.anio = 2005;

console.log(auto);


// --- AGREGAR NUEVAS PROPIEDADES ---

// Definición: Si asignas un valor a una clave que NO existe, 
// JavaScript la crea automáticamente dentro del objeto.
auto.patente = "qwe123"

console.log(auto);



/* RESUMEN DE OBJETOS:
  1. ESTRUCTURA: Se definen con llaves { } y pares de clave: valor.
  2. FLEXIBILIDAD: Pueden guardar cualquier tipo de dato (strings, números, arrays, otros objetos).
  3. DINAMISMO: Puedes añadir (auto.nuevaProp = valor) o borrar (delete auto.marca) 
     propiedades en tiempo de ejecución.
*/