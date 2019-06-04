window.onload = function(){
  var urlEstrenos = "https://api.themoviedb.org/3/movie/upcoming?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&page=1"

fetch(urlEstrenos)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);

    var arrayDeEstrenos= data.results

    for (var i = 0; i < 3; i++) {
      var imagen = data.results[i].poster_path
      document.querySelector('div.carousel-item.active').innerHTML = "<img src='" + imagen + "'class='d-block w-100' alt='350px'>"
    }
    var a = document.querySelector('.carousel-item .active')
    console.log(a);
  })

  .catch(function(error) {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
  });









}
