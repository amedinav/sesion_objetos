/*
* Ejercicio 1 15/02/2021
* crear una funcion que regrese un mensaje (string) dependiendo de la edad que le pasamos como parametro
* si la edad es 0 o negativo regresar "el valor no es correcto"
* si la edad es de 1 a 13 años, regresar "eres un niño"
* si la edad es de 14 a 17 años, regresar "eres un puberto"
* si la edad es de 18 a 22 años, regresar "eres un joven"
* si la edad es de 23 en adelante, regresar "eres adulto contemporaneo"
*/

function clasificarEdades(edad) {
  if (edad <= 0) {
    return 'El valor no es correcto';
  }
  if (edad > 0 && edad <= 13) {
    return 'Eres un niño';
  }
  if (edad > 13 && edad <= 17) {
    return 'Eres un puberto';
  }
  if (edad > 17 && edad <= 22) {
    return 'Eres un joven';
  }
  if (edad > 22) {
    return 'Eres adulto contemporaneo';
  }
}

let edad = 26;

const resultado = clasificarEdades(edad);

console.log('El resultado es: ',resultado);
