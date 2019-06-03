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
}
