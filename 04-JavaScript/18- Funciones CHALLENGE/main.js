// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

const parImpar = (numero) =>{
  if (numero % 2 === 0) {
    console.log(`El ${numero} es par`);
  } else {
    console.log(`El ${numero} es impar`);
  }
}

parImpar(5)
parImpar(40)


// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const mayorMenor = (unNumero, otroNumero) => {
  if (unNumero === otroNumero){
    console.log(`Los numeros son iguales`);
  } else {
    if (unNumero > otroNumero){
      console.log(`El ${unNumero} es mayor que ${otroNumero}`);
    } else{
      console.log(`El ${otroNumero} es mayor que ${unNumero}`)
    }
  }
}

mayorMenor(10,5)
mayorMenor(10,10)
mayorMenor(10,54)

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiploDe5 = (unNumero) => {
  if (unNumero % 5 === 0){
    console.log(`El numero ${unNumero} es multiplo de 5`);
  } else {
    console.log(`El numero ${unNumero} es no multiplo de 5`);
  }
}

multiploDe5(10)
multiploDe5(33)

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

const imprimir = (unNumero) => {
  if (unNumero === 0){
    return console.log(0);
  } 
  console.log(unNumero);
  imprimir(unNumero - 1)
}
imprimir(10)


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

const palabra = (unaPalabra , unNumero) => {
  for (let i = 0; i < unNumero; i++){
    console.log(unaPalabra);
  }
}
palabra('Messi',10)


// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
const arreglo = (unArrelgo) => {
  for ( let i = 0; i < unArrelgo.length; i++){
    console.log(`${unArrelgo[i]}`)
  }
}
var miArrelgo = [1,'DOS',3]
arreglo(miArrelgo)

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const arreglo2 = (unArrelgo) => {
  for ( let i = 0; i < unArrelgo.length; i++){
    if ( i != 5){
      console.log(`${unArrelgo[i]}`);
    }
    
  }
}
var miArrelgo = [1,2,3,4,5,6,7,8,9,10]
arreglo2(miArrelgo)

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.