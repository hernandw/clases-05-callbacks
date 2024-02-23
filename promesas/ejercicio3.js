//Funcion para generar un numero aleatorio entre min y max

const randomNumber = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};


const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, randomNumber(500, 2000))
})

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, randomNumber(500, 2000));
});

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, randomNumber(500, 2000));
});

Promise.race([promesa1, promesa2, promesa3]).then((value) => {
  console.log(value);
})