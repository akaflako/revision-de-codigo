// Se declaran las variables
const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $name = document.querySelector('.name'); // Cambie el nombre de la variable de $n a $name para que sea mas claro saber a que se refiere
const $blog = document.querySelector('.blog'); // Cambie el nombre de la variable de $b a $blog para que sea mas claro saber a que se refiere
const $location = document.querySelector('.location'); // Cambie el nombre de la variable de $l a $location para que sea mas claro saber a que se refiere

// Funcion para desplegar nombre de los usuarios
async function displayUser(username) { // se declara la funcion como async porque hay el await en la linea 11 marca error
  $name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // Se convierte el objeto
  console.log(data);
  $name.textContent = ` Nombre: ${data.name}`; // corregi el nombre de la variable y se corrigen las comillas 
  $blog.textContent = `Blog: ${data.blog}`; // corregi el nombre de la variable y se corrigen las comillas 
  $location.textContent = `Location: ${data.location}`; // corregi el nombre de la variable y se corrigen las comillas 
}

// Funcion para mostrar un error
function handleError(error) { //cambio el nombre del parametro err a error
  console.log('OH NO!');
  console.log(error);
  $name.textContent = `Algo salió mal: ${error}`;
}

displayUser('stolinski').catch(handleError);