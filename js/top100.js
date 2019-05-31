window.onload= function(){


  var urltop100 = "https://api.themoviedb.org/3/movie/top_rated?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&page=1"

fetch(urltop100)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);

    for (var i = 0; i < 6; i++) {
      var id = data.results[i].id
      var titulo = data.results[i].title
      var imagen = data.results[i].poster_path
      console.log(titulo)
      document.querySelector(".contenedor").innerHTML += "<article class='peliculas'><img class='imagenes' src='https://image.tmdb.org/t/p/original" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
    }
  })

  .catch(function(error) {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
}
