{
    // --- SCOPE DE VAR ---
    // var NO tiene "Block Scope" (alcance de bloque). 
    // Se escapa de las llaves { } y es accesible globalmente o en toda la función.
    
    // --- HOISTING DE VAR ---
    // La declaración 'var a' se eleva al principio del código e inicializa como 'undefined'.
    var a = "var"
}

console.log(a); // Imprime "var" porque var ignoró el bloque { }.

{
    // --- SCOPE DE LET ---
    // let SÍ tiene "Block Scope". Solo existe dentro de estas llaves.
    
    // --- HOISTING DE LET ---
    // Se eleva, pero entra en la "Temporal Dead Zone" (Zona Muerta Temporal).
    // Si intentas usarla antes de esta línea, dará error de inicialización.
    let b = "let"
    console.log(b);
}

// console.log(b); // ERROR: b no está definida fuera de su bloque.

{
    // --- SCOPE DE CONST ---
    // Al igual que let, tiene alcance de bloque estricto.
    
    // --- HOISTING DE CONST ---
    // Se eleva pero no se puede usar hasta que se declare e inicialice.
    // A diferencia de let, DEBE asignarse un valor en la misma línea.
    const c = "const"
}

// console.log(c); // ERROR: ReferenceError. 'c' murió al cerrar la llave de arriba.

/* RESUMEN:
  1. Scope: Es el "viva donde naces". var es liberal (se escapa), let/const son encerrados (bloque).
  2. Hoisting: Es el "ascensor". JavaScript sube las declaraciones arriba de todo. 
     - var sube con un valor vacío (undefined).
     - let/const suben pero "prohibido tocar" hasta llegar a su línea (TDZ).
*/