const nombre = 'Iván';
const apellido = 'Salazar';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido} `;

console.log(nombreCompleto);

function getSaludo(nombre) {
  return `Hola ${nombre}`;
}

console.log(`Este es un texto: ${ getSaludo(nombreCompleto) }`);