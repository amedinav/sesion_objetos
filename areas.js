// Función para calcular el área de un cuadrado

function calcularCuadrado(lado) {
  return lado * lado;
}

// Asignación de parámetros de la función

let lado = 6;

// Declaración de la variable de resultado

const resultadoCuadrado = calcularCuadrado(lado);

// Impresión del resultado

console.log('El área del cuadrado es: ', resultadoCuadrado);

// Función para calcular el área de un rectángulo

function calcularRectangulo(base, altura) {
  return base * altura;
}

// Asignación de parámetros de la función

let base = 6;
let altura = 3;

// Declaración de la variable de resultado

const resultadoRectangulo = calcularRectangulo(base, altura);

// Impresión del resultado

console.log('El área del rectángulo es: ', resultadoRectangulo);

// Función para calcular el área de un círculo

function calcularCirculo(pi,radio) {
  return pi * radio * radio;
}

// Asignación de parámetros de la función

const pi = 3.1416;
let radio = 3;

// Declaración de la variable de resultado

const resultadoCirculo = calcularCirculo(pi, radio);

// Impresión del resultado

console.log('El área del círculo es: ', resultadoCirculo);
