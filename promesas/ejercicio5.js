const urlApi = "https://jsonplaceholder.typicode.com/users";



/* fetch(urlApi).then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
}); */

fetch(urlApi)
    .then((res) => res.json())
    .then((data) => console.log(data));

