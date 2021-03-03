
// Declaracion de variables en JS
const isr = 0.3;

// const se utiliza cuando queremos declarar una variable que ya no podemos volver a asignar
let angelica = 'Angélica Medina';

// let se utiliza cuando queremos reutilizar la variable para cambiarle el valor
let salarioAngelica = 2000;
salarioAngelica = 2050;

// esta ultima ya no es usada por los desarrolladores
var edadAngelica = 25;
let resultado = isr * salarioAngelica;

console.log(calculadora(salarioAngelica, angelica, isr));
angelica = "Luis Zenteno";
salarioAngelica = 3000;

resultado = isr * salarioAngelica;

let resultadoFuncion; // esta variable se inicializa como undefined

function calculadora(salario, nombre, impuesto) {
  const calculoImpuesto = salario * impuesto;
  const resultado = `${nombre} tiene un sueldo de ${salario} mensual, por lo tanto debe pagar un ISR de ${calculoImpuesto}`;
  return resultado;
}

resultadoFuncion = calculadora(salarioAngelica, angelica, isr);
console.log(resultadoFuncion);
