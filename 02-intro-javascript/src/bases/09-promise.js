import {getHeroeById} from '../bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
  
//   setTimeout( () => {
//     // simulación de conexión a una API
//     const heroe = getHeroeById(2);
//     // el resolve le transfiere el valor de su argumento al then
//     resolve(heroe);
//     //reject('No se pudo encontrar el héroe');
//     //reject(heroe);
//   }, 2000);
  
// });

// promesa.then( (jiro)=> {
//   console.log('Héroe', jiro)
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {
    return new Promise((resolve, reject) => {
    
    setTimeout( () => {
      // simulación de conexión a una API
      const heroe = getHeroeById(id);
      // el resolve le transfiere el valor de su argumento al then
      
      if ( heroe ) {
        resolve(heroe);
      }
      else{
        reject('No se pudo encontrar el héroe');
      }

      
      //reject(heroe);
    }, 2000);
    
  });

}

getHeroeByIdAsync(10)
  .then( console.log )
  .catch( console.warn )