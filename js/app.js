window.onload = function(){




  window.onclick = function(e) {
    var myDropdown = document.getElementById("myDropdown");

    if (!e.target.matches('.dropbtn')) {



        myDropdown.classList.remove('show');

    } else {


        myDropdown.classList.add('show');

    }
  }

  function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }


  var soyLaUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=7beff09c9fd5a79010c5ce4883840da9&language=en-US"
  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=7beff09c9fd5a79010c5ce4883840da9&language=en-US")
  .then(function(response) {
  return response.json()
  })
  .then(function(information) {
  console.log(information.genres);

  var generos_array = information.genres
  console.log(generos_array);

  for (var i = 0; i < generos_array.length; i++) {
    var id = generos_array[i].id
    var title = generos_array[i].name



    var generos = document.querySelector(".dropdown-content").innerHTML += "<p><a href=generos.html?id=" + id + ">" + title + "</a></p>"
  }


  })

  .catch(function(error) {
  console.log("Error: " + error);
  })




var urlPeliculas =
var urlEstrenosDos =
var urlProximasPeliculas =
var mejoresPunteadas =







}




// var urlEstrenos = "https://api.themoviedb.org/3/movie/latest?api_key=186cf2a9c1ccf8eb8f856d9b1c0cfe5f&language=en-US"
//
// fetch(urlEstrenos)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(myJson);
//   });
