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
  document.querySelector(".poster").innerHTML = "<img class='generos-imagenes' src='https://image.tmdb.org/t/p/original" + informacion.poster_path + "' alt='img producto'>"
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
