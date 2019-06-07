window.addEventListener("load", function(){
//app y appold.js//
  window.onclick = function(e) {
    var myDropdown = document.getElementById("myDropdown");

    if (!e.target.matches('.dropbtn')) {



        myDropdown.classList.remove('show');

    } else {


        myDropdown.classList.add('show');

    }
  }

  var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Authenticating');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('Welcome back!');
    setTimeout(function() {
      $state.html('Log in');
      $this.removeClass('ok loading');
      working = false;
    }, 4000);
  }, 3000);
});
//   // Get the modal
// var modal = document.getElementById('id01');
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// window.onclick = function(e) {
//   var myDropdown = document.getElementById("myDropdown");
//
//   if (!e.target.matches('.dropbtn')) {
//
//
//
//       myDropdown.classList.remove('show');
//
//   } else {
//
//
//       myDropdown.classList.add('show');
//
//   }
// }

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
fetch(soyLaUrl)
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

  var urlEstrenos = "https://api.themoviedb.org/3/movie/popular?api_key=ebcc7d54892cbf6b9dd7c194bd052f2f&language=en-US&page=1"
 var urlConstante = "https://image.tmdb.org/t/p/original/"
fetch(urlEstrenos)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);

    var arrayDeEstrenos= data.results
    var li
    for (var i = 0; i < arrayDeEstrenos.length; i++) {
      var imagen = data.results[i].poster_path
      li = "<li class='mySlides1'>"
        li += "<img src='" + urlConstante + imagen + "' >"
      li += '</li>'

// console.log("<div class='carousel-item active'> <div class='carousel-caption d-none d-md-block'> <img src='" + urlConstante + imagen + "' class='d-block w-100' alt='350px'> <a href='peliculas.html' class='h3_carousel'> <h3>Peliculas</h3> </a> <p>Si desea ver mas peliculas, haga click en el boton peliculas</p></div></div>");
      document.querySelector('ul.estrenos').innerHTML += li
      //dejo visivle solo la primer imagen
      showSlides(1, 0);
    }
  })

  .catch(function(error) {
  console.log('Hubo un problema con la petición Fetch:' + error.message);
  });






})
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
