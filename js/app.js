window.onload = function(){




  window.onclick = function(e) {
    var myDropdown = document.getElementById("myDropdown");

    if (!e.target.matches('.dropbtn')) {



        myDropdown.classList.remove('show');

    } else {


        myDropdown.classList.add('show');

    }
  }


}


var urlEstrenos = "https://api.themoviedb.org/3/movie/latest?api_key=186cf2a9c1ccf8eb8f856d9b1c0cfe5f&language=en-US"

fetch(urlEstrenos)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
