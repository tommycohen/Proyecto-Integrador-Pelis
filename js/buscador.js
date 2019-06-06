window.addEventListener("load", function(){

localStorage.removeItem("moneda")
console.log(localStorage);

var queryString = new URLSearchParams(location.search)
var buscador = queryString.get("buscador")

fetch("https://api.themoviedb.org/3/search/movie?api_key=7beff09c9fd5a79010c5ce4883840da9&query=" + buscador +"&page=1&include_adult=true")
  .then(function(respuesta) {
    return respuesta.json()
  })
  .then(function(informacion) {
    console.log(informacion);

    var arrayDeGifs = informacion.data
    console.log(arrayDeGifs);

    for (var i = 0; i < arrayDeGifs.length; i++) {
      var id = arrayDeGifs[i].id
      var title = arrayDeGifs[i].title
      var url = arrayDeGifs[i].images.original.url

      document.querySelector("div").innerHTML += "<p><a href=detalleGif.html?id=" + id + ">" + title + "</a></p>"
      document.querySelector("div").innerHTML += "<img src=" + url + ">"
    }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })

})
