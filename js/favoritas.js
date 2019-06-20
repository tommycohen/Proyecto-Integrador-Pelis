function mostrarPeliculasFavoritas(){
var listaDeFavoritos = JSON.parse (localStorage.getItem("favoritos"))
for (var i = 0; i < listaDeFavoritos.length; i++) {
  var elementoFavorito = listaDeFavoritos[i]
  var URL = "https://api.themoviedb.org/3/movie/"+ elementoFavorito +"?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&language=en-US"

  fetch (URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    var arrayDePeliculasPorGeneros= data
    var li
    // for (var i = 0; i < arrayDePeliculasPorGeneros.length; i++) {
      if(arrayDePeliculasPorGeneros.poster_path!=null){
      var id = arrayDePeliculasPorGeneros.id
      var titulo = arrayDePeliculasPorGeneros.title
      var imagen = arrayDePeliculasPorGeneros.poster_path
      li="<article class='peliculasGeneros'>"
      li+= "<a href=detallePelicula.html?id="
      li += id
      li +=">"
      li+= "<img class='generos-imagenes' src='https://image.tmdb.org/t/p/original"
      li+=imagen
      li+= "' alt='img producto'>"
      li+= "<h2 class='titulo-producto'>"
      li+= "<a href=detallePelicula.html?id="
      li+=id
      li+=">"
      li+=titulo
      li+="</a></h2>"
      li+= '<button onclick= "sacarFavorito('+id+')"> Sacar de favoritas </button> </article>'

      // document.querySelector(".contenedor").innerHTML += "<article class='peliculasGeneros'><img class='generos-imagenes' src='https://image.tmdb.org/t/p/original" + imagen + "' alt='img producto'><h2 class='titulo-producto'><a href=detallePelicula.html?id=" + id +  ">" + titulo + "</a></h2></article>"
      document.querySelector(".contenedor").innerHTML += li

  // }
    }
  })
}
}
mostrarPeliculasFavoritas()
function sacarFavorito(id){
  var listaActualFavoritos = JSON.parse (localStorage.getItem("favoritos"))
  var nuevaListaDeFavoritos = listaActualFavoritos.filter (function(favorito){
    return favorito != id
  })
  localStorage.setItem("favoritos", JSON.stringify(nuevaListaDeFavoritos))
  location.href = "favoritas.html"
}
