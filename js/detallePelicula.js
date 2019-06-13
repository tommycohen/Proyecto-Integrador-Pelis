window.addEventListener("load", function(){

  var queryString = new URLSearchParams(location.search);
  var detalles = queryString.get('id');

  var detallePelicula = "https://api.themoviedb.org/3/movie/" + detalles + "?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&language=en-US"

fetch(detallePelicula)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.results);

  var resultadoPelicula = informacion.results

    for (var i = 0; i < resultadoPelicula.length; i++) {
      var id = informacion.results[i].id
      var titulo = informacion.results[i].title
      var imagen = informacion.results[i].poster_path
      
      }
      console.log(titulo)
      document.querySelector(".contenedor_busqueda").innerHTML += "<article class='peliculas'><img class='estrenos-imagenes' src='" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
    }

.catch(function(error) {
console.log('Hubo un problema con la petición Fetch:' + error.message);
});

})
