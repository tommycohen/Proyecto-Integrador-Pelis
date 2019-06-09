window.addEventListener("load", function(){

var queryString = new URLSearchParams(location.search)
var buscador = queryString.get("buscador")

fetch("https://api.themoviedb.org/3/search/movie?api_key=7beff09c9fd5a79010c5ce4883840da9&language=en-US&query=" + buscador + "&page=1&include_adult=false")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {

    var resultadoPelicula = informacion.results

      for (var i = 0; i < resultadoPelicula.length; i++) {
        var id = informacion.results[i].id
        var titulo = informacion.results[i].title
        var imagen = informacion.results[i].poster_path
        if (imagen == null) {
          imagen = "img/nodisponible.jpg"
        }else {
          imagen = "https://image.tmdb.org/t/p/original" + informacion.results[i].poster_path
        }
        console.log(titulo)
        document.querySelector(".contenedor_busqueda").innerHTML += "<article class='peliculas'><img class='estrenos-imagenes' src='" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
      }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

})
