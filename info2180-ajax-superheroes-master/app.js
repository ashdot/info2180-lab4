
document.addEventListener("DOMContentLoaded", function() {

    //let result = document.getElementById("result")

    //const query = document.getElementById("super-search").value;
 

function searchbtn() { 

    let query = document.getElementById('super-search').value.trim();
    let url = `http://localhost:8888/info2180-lab4/info2180-ajax-superheroes-master/superheroes.php?query=${encodeURIComponent(query)}`;
    fetch(url)
    .then(response => response.text())
    .then(data=> {
        console.log(data)
        result.innerHTML = data
    })
    .catch(error => {
        alert(error)
    });


  }; 

  

  
  document.getElementById("Search").addEventListener("click", searchbtn);


});

