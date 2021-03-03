
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

// este es un ejemplo de concatenación de strings
const respuestaConcatenada = angelica + ' tiene un sueldo de ' +salarioAngelica + ' mensual, por lo tanto debe pagar un ISR de ' +resultado;
console.log(respuestaConcatenada);

// este es un ejemplo de string interpolation
let respuestaInterpolada = `${angelica} tiene un sueldo de ${salarioAngelica} mensual, por lo tanto debe pagar un ISR de ${resultado}`;
console.log(respuestaInterpolada);

angelica = "Luis Zenteno";
salarioAngelica = 3000;

resultado = isr * salarioAngelica;

respuestaInterpolada = `${angelica} tiene un sueldo de ${salarioAngelica} mensual, por lo tanto debe pagar un ISR de ${resultado}`;

console.log(respuestaInterpolada);
