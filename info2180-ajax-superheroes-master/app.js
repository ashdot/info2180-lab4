
document.addEventListener("DOMContentLoaded", function() {

function searchbtn() { 

    fetch('http://localhost:8888/info2180-lab4/info2180-ajax-superheroes-master/superheroes.php')
    .then(response => response.text())
    .then(data => {
        alert(data)
    })
    .catch(error => {
        alert(error)
    });
   
    

  };
  
  document.getElementById("Search").addEventListener("click", searchbtn);


});

