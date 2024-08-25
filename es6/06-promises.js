const anotherFunction = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!!")
        } else{
            reject("Whoooops!!")
        }
    })
}

anotherFunction()
    .then((resolve) => console.log(resolve))
    .catch(err => console.log(err))


// Ejemplo #2

    // Crear una promesa
const myPromise = new Promise((resolve, reject) => {
    // Simular una operación asíncrona exitosa
    setTimeout(() => {
      const randomValue = Math.random();
      if (randomValue > 0.5) {
        resolve(randomValue);  // Resuelve la promesa con un valor exitoso
      } else {
        reject('El valor es demasiado bajo');  // Rechaza la promesa con una razón
      }
    }, 1000);
  });
  
  // Usar la promesa
  myPromise.then(result => {
    console.log('Promesa cumplida:', result);
  }).catch(error => {
    console.error('Promesa rechazada:', error);
  });