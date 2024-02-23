const promesa = new Promise((resolve, reject) => {
    
    const valor = false
    
    valor ? resolve('Todo salio bien') : reject('Todo salio mal')

})

promesa.then(resp => console.log(resp))