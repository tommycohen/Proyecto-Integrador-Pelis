window.onload = function(){

  var soyLaUrl = "https://api.themoviedb.org/3/search/movie?api_key=7beff09c9fd5a79010c5ce4883840da9&language=en-US&page=1&include_adult=false"
  fetch(soyLaUrl)
  .then(function(response) {
  return response.json()
  })
  .then(function(information) {
  console.log(information.results);
  var resultados = data.results
  })

  .catch(function(error) {
  console.log("Error: " + error);
  })
