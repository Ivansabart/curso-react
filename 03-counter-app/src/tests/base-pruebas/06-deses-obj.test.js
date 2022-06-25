import { usContext } from "../../base-pruebas/06-deses-obj";


describe('Pruebas en 06-deses-obj', () => {

  test('usContext debe de retornar un objeto', () => {

    const heroe = {
      clave: 117,
      nombre: 'John',
      edad: 49,
      rango: 'Suboficial Jefe Maestro',
    }

    const activeHeroe = usContext(heroe);

    expect(activeHeroe).toEqual({
      nombreClave: 117,
      anios: 49,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    });


  })
})