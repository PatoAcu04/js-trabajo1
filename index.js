/* 1- Crear una función que reciba un número por parámetro e indique en 
consola si el número es par o impar.*/

console.log("ejercicio 1");

function verificacion(numero) {
  if (numero % 2 === 0) {
    console.log(numero + " es par");
  } else {
    console.log(numero + " es impar");
  }
}

verificacion(1);
verificacion(20);
verificacion(333);
verificacion(4400);
verificacion(7225);

console.log("\n");

/* 2- Crear una función que reciba dos números por parámetro e 
indique en consola que número es mayor, y si ninguno lo es, indicar 
por consola que son iguales */

console.log("ejercicio 2");

function mayor(num1, num2) {
  if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
  } else if (num1 < num2) {
    console.log(num2 + " es mayor que " + num1);
  } else {
    console.log(num1 + " es igual que " + num2);
  }
}

mayor(1, 4);
mayor(4, 10);
mayor(20.5, 58.2);
mayor(60, 800);
mayor(10, 100000);

console.log("\n");

/*3- Crear una función que reciba un número por parámetro e indique
 en consola si ese número es múltiplo de 5.*/

console.log("ejercicio 3");

function numero(multiplo) {
  if (multiplo % 5 === 0) {
    console.log(multiplo + " es multiplo de 5");
  } else {
    console.log(multiplo + " no es multiplo de 5");
  }
}

numero(5);
numero(25);
numero(109);
numero(1);
numero(12948);

console.log("\n");

/*4- Crear una función que reciba un número por parámetro e imprima
 por consola todos los números desde el 0 hasta llegar a ese número.*/

console.log("ejercicio 4");

function impnum(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}
impnum(8);

console.log("\n");

/*5 - Crear una función que reciba una palabra y un número por
 parámetro e imprima por consola esa palabra la cantidad correspondiente
  al número indicado.*/

console.log("ejercicio 5");

function funcion(palabra, numero) {
  for (let i = 0; i < numero; i++) console.log(palabra);
}

funcion("hola", 7);
console.log("\n");

// 6 - Crear una función que reciba un array por parámetro e
// imprima por consola todos los valores de ese array.

console.log("ejercicio 6");

let streamers = ["auron", "coscu", "rubius", "momo", "xocas"];

function stream(nombre) {
  for (streamer of nombre) {
    console.log(streamer);
  }
}
stream(streamers);
console.log("");

// 7 - Crear una función que reciba un array con 10 números e imprima
//  por consola todos los valores de ese array, menos el que se encuentre
//   en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de
//  un array es "0".

console.log("ejercicio 7");

let numeros = [20, 33, 69, 96, 104, 205, 115, 4858, 9, 10];
function number(num) {
  for (numero of num) {
    if (numero != num[4]) {
      console.log(numero);
    }
  }
}
number(numeros);
console.log("");

// 8 - Crea una función que reciba un array de números y un número
//  por parámetro e imprima por consola cada número del array multiplicado
//   por el número pasado por parámetro.

console.log("ejercicio 8");

let numbers = [10, 20, 5];
function multiplicacion(lista, multiplicador) {
  parseInt(multiplicador);
  for (numero of lista) {
    numero = numero * multiplicador;
    console.log(numero);
  }
}
multiplicacion(numbers, 5);
