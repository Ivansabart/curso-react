import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones.js', () => {

  test('getUser debe de retornar un objeto', () => {

    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  })

  test('getUsuarioActivo debe de retornar un objeto', () => {

    const name = 'Iván';

    const activeUser = getUsuarioActivo(name);

    expect(activeUser).toEqual({
      uid: 'ABC567',
      username: name
    });

  })
})    