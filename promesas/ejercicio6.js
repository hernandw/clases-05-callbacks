let datos = (async function cargarDatos() {
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  let datos = await respuesta.json();
 


  
})()


//crear una funcion reciba el elemento html

//insertarle de manera dinamica los datos
