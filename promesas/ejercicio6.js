let datos = async function cargarDatos() {
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  let datos = await respuesta.json();
  console.log(datos);
  return datos;
};


