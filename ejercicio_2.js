/* Crear función llamada 'hablar' que reciba un parámetro string, dentro de esta función se deberá
 * evaluar el string recibido de la siguiente manera:
 * 1.- Si el string es 'fresa' deberá mandar llamar una función llamada hablarFresa la cual no recibe
 * ningún parámetro y debe regresar el texto: 'que pedo con el metro de aquí eh, en parís la gente no
 * te chifla ni te dice mamasita'.
 * 2.- Si el string es 'guarro' deberá mandar llamar una función llamada hablarGuarro la cual no recibe
 * ningún parámetro y debe regresar el texto: 'no se sienta un culo mi niño, acuérdese que es mi perro'.
 * 3.- Si el string no es ninguno de los CASOS anteriores, deberá imprimir un string que diga: 'no
 * entiendo ese léxico'.
 * Al final se deberá imprimir el texto que se recupero ya sea de la función hablarFresa o hablarGuarro.
*/

let dimeAlgo = 'fresa';

function hablar() {
  switch(dimeAlgo) {
    case 'fresa':
     dimeAlgo = 'Que pedo con el metro de aquí eh, en parís la gente no te chifla ni te dice mamasita';
     break;
    case 'guarro':
     dimeAlgo = 'No se sienta un culo mi niño, acuérdese que es mi perro';
     break;
    default:
     dimeAlgo = 'No entiendo ese léxico';
  }
  return dimeAlgo
}

const resultado = hablar();

console.log(resultado);
