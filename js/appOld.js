window.onload = function(){

  window.onclick = function(e) {
    var myDropdown = document.getElementById("myDropdown");

    if (!e.target.matches('.dropbtn')) {



        myDropdown.classList.remove('show');

    } else {


        myDropdown.classList.add('show');

    }
  }
  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }


// var URL = "https://api.themoviedb.org/3/movie/popular?api_key=186cf2a9c1ccf8eb8f856d9b1c0cfe5f&language=en-US"
//
// fetch("https://api.themoviedb.org/3/movie/popular?api_key=186cf2a9c1ccf8eb8f856d9b1c0cfe5f&language=en-US")
// .then(function(response) {
// return response.json()
// })
// .then(function(information) {
// console.log(information);
// console.log(information.results);
// console.log(information.results[0]);
// })
// .catch(function(error) {
// console.log("Error: " + error);
// })



// var soyLaUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=7beff09c9fd5a79010c5ce4883840da9&language=en-US"
// fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=7beff09c9fd5a79010c5ce4883840da9&language=en-US")
// .then(function(response) {
// return response.json()
// })
// .then(function(information) {
// console.log(information);
// })
// .catch(function(error) {
// console.log("Error: " + error);
// })
//
//
//






}
