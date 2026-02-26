// --- CONTROL DE FLUJO: IF / ELSE / ELSE IF ---

let edad = 18;

// Definición: La estructura 'if' evalúa una condición booleana entre paréntesis.
// Si la condición es 'true', se ejecuta el primer bloque de código { }.
if (edad >= 18) {
    console.log("Eres mayor de edad"); 
} 
// Definición: 'else if' permite evaluar una segunda condición si la primera fue 'false'.
else if (edad > 0) {
    console.log("Eres menor de edad");
} 
// Definición: 'else' es el caso por defecto. Se ejecuta si NINGUNA de las 
// condiciones anteriores se cumplió.
else {
    console.log("Edad no válida");
}


// --- ESTRUCTURA SWITCH ---

let dia = "Lunes";

// Definición: 'switch' se usa para comparar una misma variable contra múltiples 
// valores posibles (casos). Es más limpio que usar muchos 'if/else' anidados.
switch (dia) {
    case "Lunes":
        console.log("Inicio de semana");
        // Definición de 'break': Detiene la ejecución del switch. 
        // Si no lo pones, JS seguirá ejecutando todos los casos siguientes.
        break;

    case "Viernes":
        console.log("Casi fin de semana");
        break;

    // Definición de 'default': Es el equivalente al 'else'. Se ejecuta si 
    // el valor no coincide con ningún 'case'.
    default:
        console.log("Es un día normal");
        break;
}



/* RESUMEN DE CONTROL DE FLUJO:
   1. IF/ELSE: Ideal para condiciones complejas (usando >, <, &&, ||) o rangos.
   2. SWITCH: Ideal cuando comparas una sola variable contra valores exactos 
      (ej: nombres, estados, números fijos).
   3. BREAK: Es obligatorio en Switch si no quieres que el código "chorree" 
      hacia los siguientes casos.
*/