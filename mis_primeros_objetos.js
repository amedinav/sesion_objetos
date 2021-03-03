/* Crear una función que reciba los siguientes parámetros:
 * 1.- rfc: string
 * 2.- name: string
 * 3.- lastName: string
 * 4.- isAdmin: Boolean (true si es administrador, de lo contrario false)
 * La función debe crear un objeto usuario con cada uno de los parámetros y deberá registrar dicho usuario.
 */

// Crear una función que regresará la información de un usuario por medio de un objeto.
function createUser(rfc, name, lastName, isAdmin) {
  return {
    rfc: rfc,
    name: name,
    lastName: lastName,
    isAdmin: isAdmin,
    sayHello: function (){
      return 'Hola';
    }
  };
/* Es lo mismo que: return {
 *  rfc,
 *  name,
 *  lastName,
 *  isAdmin,
 * }
 */
}



// Crear usuarios asignando los valores que alimentarán a la función.
const administrator = createUser('ZEVL831203TR3', 'Luis', 'Zenteno', true);
const normalUser = createUser('MEVA950829UZ1', 'Angélica', 'Medina', false);

// Imprimir los usuarios creados con la función.
console.log(administrator);
console.log(normalUser);

/* Crear una función que regrese un string diciendo si el usuario si tiene permiso o no dependiendo
 * si el usuario es administrador o no.
 */

function checkPermission(user) {
  if (user.isAdmin) {
    return 'Si tiene permiso';
  }
  if (!user.isAdmin) {
    return 'No tiene permiso';
  }
}

const adminHasPermission = checkPermission(administrator)
console.log(adminHasPermission);

const normalUserHasPermission = checkPermission(normalUser)
console.log(normalUserHasPermission);



// Destructuring del objeto (sacar atributos de un objeto y usarlos como una variable)

const {rfc,lastName} = normalUser;
console.log(rfc,lastName);
