// 1. SELECCIÓN DE UN ELEMENTO POR ETIQUETA
// Selecciona el primer <h1> que encuentre en el documento
const h1 = document.querySelector("h1");

// Muestra el objeto h1 como un elemento interactivo en la consola (con todas sus propiedades)
console.dir(h1);

// Muestra en la consola el contenido actual que hay dentro del h1
console.log(h1.innerHTML);

// CAMBIO DE CONTENIDO: Reemplaza el texto original del h1
h1.innerHTML = "Estoy siendo cambiado desde JS";


// 2. SELECCIÓN POR ID
// Selecciona el elemento que tenga el id="section_p" (usa el prefijo #)
const p = document.querySelector("#section_p");

// Muestra las propiedades del párrafo en la consola
console.dir(p);

// CAMBIO CON HTML: Al usar .innerHTML, JS interpreta las etiquetas <b> como negrita
p.innerHTML = "Yo también estoy siendo <b>cambiado</b> desde JS";


// 3. INYECCIÓN DE ESTRUCTURAS COMPLEJAS
// Selecciona el contenedor con id="segundoSection"
const segundoSection = document.querySelector("#segundoSection");

// Muestra el elemento seleccionado en la consola
console.log(segundoSection);

// Uso de Template Literals (comillas invertidas ``) para insertar múltiples 
// etiquetas de una sola vez de forma legible.
segundoSection.innerHTML = `
    <h2 class="section_h2"> Esto es un H2 creado desde JS </h2>
    <p id="p_js">Esto es un p creado desde JS</p>
`;