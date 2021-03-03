// Arreglo de nombres.
const nombres = [
  'Angelica',
  'Medina'
];

// Agrega un string al principio del arreglo.
nombres.unshift('Luis');

// Agrega un string al final del arreglo.
nombres.push('Zenteno');

// La función "forEach" itera sobre un arreglo.
nombres.forEach(function(nombres){
  console.log(nombres);
})

// La declaración "for", al igual que la función "forEach" itera sobre un arreglo.
for(let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}
