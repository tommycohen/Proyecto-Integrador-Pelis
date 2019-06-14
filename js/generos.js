window.addEventListener("load", function(){
// OBTENER STRING CON EL GENERO
  var queryString = location.search;
// CONVIERTO EL STRING EN ITEMS
  var filtro = queryString.split ("=")

  var urlGeneros = "https://api.themoviedb.org/3/discover/movie?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&page=1&with_genres=" + filtro [1]

fetch(urlGeneros)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data.results);

  var arrayDePeliculasPorGeneros= data.results

  for (var i = 0; i < arrayDePeliculasPorGeneros.length; i++) {
    if(arrayDePeliculasPorGeneros[i].poster_path!=null){
    var id = arrayDePeliculasPorGeneros[i].id
    var titulo = arrayDePeliculasPorGeneros[i].title
    var imagen = arrayDePeliculasPorGeneros[i].poster_path
    document.querySelector(".contenedor").innerHTML += "<article class='peliculas'><img class='estrenos-imagenes' src='https://image.tmdb.org/t/p/original" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
}
  }
})

.catch(function(error) {
console.log('Hubo un problema con la petición Fetch:' + error.message);
});

})
