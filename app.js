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
}

var URL = "https://api.themoviedb.org/3/movie/latest?api_key=186cf2a9c1ccf8eb8f856d9b1c0cfe5f&language=en-US"

fetch(URL)
.then(function(response) {
return response.json()
})
.then(function(information) {
console.log(information);
console.log(information.results);
console.log(information.results[0]);
})
.catch(function(error) {
console.log("Error: " + error);
})
}
