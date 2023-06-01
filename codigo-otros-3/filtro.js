// Tenemos un li de productos

const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

const lista = document.getElementById("lista-de-productos"); // Cambio el nombre de li a lista para que sea mas claro, le qute la s a Elements
const $input = document.querySelector('input'); // Cambio el nombre de i a input para que sea mas claro

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div");
  d.classList.add("producto");

  var titulo = document.createElement("p"); //  Cambio el nombre de ti a titulo
  titulo.classList.add("titulo");
  titulo.textContent = productos[i].nombre;
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(titulo); // cambie de ti a titulo
  d.appendChild(imagen);

  lista.appendChild(d);
}
//displayProductos(productos) 
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = $input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var titulo = document.createElement("p") // cambie de ti a titulo
    titulo.classList.add("titulo")
    titulo.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(titulo) // cambie de ti a titulo
    d.appendChild(imagen)
  
    lista.appendChild(d) // cambie de li a lista
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}