import '@testing-library/jest-dom';

import { getSaludo } from '../../base-pruebas/02-template-string';

describe('Pruebas en 02-template-string.js,', () => {
  test('getSaludo debe de retornar hola Iván', () => {

    const nombre = 'Iván';
    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}`);

  })
})