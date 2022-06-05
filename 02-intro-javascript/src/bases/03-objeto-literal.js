const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 5454654,
    lat: 23.5466,
    lng: 12.4567,
  }
};

console.table(persona);
// const persona2 = persona; "Se copia la referencia en memoria al mismo objeto"
const persona2 = { ...persona }; // spread operator clona objetos
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);