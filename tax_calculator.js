// Aqui vamos a hacer el ejercicio de calcular los taxes

/*
 * Esto
 * es
 * un
 * comentario multi-linea
 */

/*
 * Pequeño programa que calcula el ISR del usuario dependiendo su salario
 * esta es el ejercicio de programación de amedina
 */

// el programa debe mostrar un resultado como este: "<NOMBRE_USUARIO> tiene un sueldo de <SUELDO> mensual, por lo tanto debe pagar un ISR de <ISR>"

/*
 * Tipos de convencion de nombres en programacion:
 * 1. camelCase (ejemplo. miSueldoAnual)
 * 2. snake_case (ejemplo. mi_sueldo_anual)
 *
 * la convencion usada en JS es camelCase
 */


// Declaracion de variables en JS
const isr = 0.3;

// const se utiliza cuando queremos declarar una variable que ya no podemos volver a asignar
const angelica = 'Angélica Medina';

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
const respuestaInterpolada = `${angelica} tiene un sueldo de ${salarioAngelica} mensual, por lo tanto debe pagar un ISR de ${resultado}`;
console.log(respuestaInterpolada);
