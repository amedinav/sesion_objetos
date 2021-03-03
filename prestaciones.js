/* Crear función que, dependiendo del paquete que reciba como parámetro regrese el auto que se le va
 * a asignar al trabajador.
 * Paquete básico (1): Vocho
 * Paquete medio (2): Golf
 * Paquete premium (3): BMW
*/

function asignarAuto(paquete) {
  let auto;
  if(paquete === 1) {
    auto = 'Vocho';
  }
  if(paquete === 2) {
    auto = 'Golf';
  }
  if(paquete === 3) {
    auto = 'BMW';
  }
  if (paquete !== 1 && paquete !== 2 && paquete !== 3) {
    auto = 'Nada'
  }
  return auto
}

// Asignar auto con switch

function asignarAutoSwitch(paquete) {
  let auto;
  switch(paquete) {
    case 1:
      auto = 'Vocho';
      break;
    case 2:
      auto = 'Golf'
      break;
    case 3:
      auto = 'BMW';
      break;
    default:
      auto = 'Nada'
  }
  return auto
}

const paquete = 1;

const resultadoAsignado = asignarAutoSwitch(paquete);

console.log(resultadoAsignado);
