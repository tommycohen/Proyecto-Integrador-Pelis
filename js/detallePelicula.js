window.addEventListener("load", function(){
  var queryString = new URLSearchParams(location.search);
  var detalles = queryString.get('id');

  var detallePelicula = "https://api.themoviedb.org/3/movie/" + detalles + "?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&language=en-US"

fetch(detallePelicula)
.then(function(response) {
  return response.json();
})
.then(function(informacion) {
  console.log(informacion);
  document.querySelector(".titulo").innerHTML = informacion.title
  document.querySelector(".poster").innerHTML = informacion.poster_path
  document.querySelector(".sinopsis").innerHTML = "Sinopsis:" + " " + informacion.overview
  document.querySelector(".lenguaje").innerHTML = "Lenguaje original:" + " " + informacion.original_language
  document.querySelector(".generos").innerHTML = informacion.genres.name
  document.querySelector(".estreno").innerHTML = "Fecha de estreno:" + " " + informacion.release_date


      //document.querySelector(".contenedor_busqueda").innerHTML += "<article class='peliculas'><img class='estrenos-imagenes' src='" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
    })

.catch(function(error) {
console.log('Hubo un problema con la petición Fetch:' + error.message);
});

})

// // lista de nombres de generos
//  var listaGeneros = 'https://api.themoviedb.org/3/genre/movie/list?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&language=en-US'
// // busca en el URL el id
//   var url = new URL(window.location.href);
//   var param_id = url.searchParams.get("id");
//   console.log(param_id);
//
// fetch (listaGeneros)
// .then(function(response) {
//   return response.json();
// })
// .then(function(data) {
//   console.log(data.genres);
// // remplazo el id por el nombre del genero
// var unGenero = data.genres
//   for (var i = 0; i < unGenero.length; i++) {
//     if (unGenero[i].id==param_id) {
//       document.querySelector(".subtitulo").innerText = unGenero[i].name
//     }
//
//   }
// })
