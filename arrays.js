// arreglos y un tantis de objetos

/*
 * un arreglo es una lista / coleccion de cosas. estas cosas, pueden ser:
 * - enteros
 * - decimales
 * - strings
 * - objetos
 * - otros arreglos
 */

// arreglo vacio
const arregloVacio = [];

// arreglo que contiene los numeros 1, 2 y 3
const arregloDeNumeros = [1, 2, 3];

// arreglo de strings (nombres)
const nombres = ['Luis', 'Angélica', 'Rut'];
// posiciones   [  0   ,     1     ,   2  ]

console.log('arreglo vacio: ', arregloVacio);
console.log('arreglo de numeros: ', arregloDeNumeros);
console.log('arreglo de nombres: ', nombres);

// el indice de los elementos en un arreglo siempre empieza en 0

console.log('el segundo elemento de nombres es: ', nombres[1]);


console.log('suma de 1era y ultima posicion de numeros: ', arregloDeNumeros[0] + arregloDeNumeros[2]);
