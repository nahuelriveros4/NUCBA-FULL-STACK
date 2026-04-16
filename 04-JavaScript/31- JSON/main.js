//JSON

// Javascript object notation

let objetoModelo={
  nombre:'Nahuel',
  edad:32,
  stack:['HTML','CSS','JS']
};

console.log('Objeto Modelo');
console.log(objetoModelo);

let objetoEnJSON = JSON.stringify(objetoModelo);

console.log('Objeto en JSON');
console.log(objetoEnJSON);


let objetoParseado = JSON.parse(objetoEnJSON);
console.log('Objeto Pareseado');
console.log(objetoParseado)