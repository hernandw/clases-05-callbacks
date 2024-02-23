let datos = async function cargarDatos() {
  try {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
      let datos = await respuesta.json();
      

  } catch (e) {
    console.log(e)
  }
 


  
}

datos()
//crear una funcion reciba el elemento html

//insertarle de manera dinamica los datos
