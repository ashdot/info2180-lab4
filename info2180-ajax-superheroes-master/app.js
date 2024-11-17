
document.addEventListener("DOMContentLoaded", function() {

    //let result = document.getElementById("result")
 

function searchbtn() { 

    const query = document.getElementById("super-search").value;
    console.log(input)

    let url = 'http://localhost:8888/info2180-lab4/info2180-ajax-superheroes-master/superheroes.php'

    fetch('http://localhost:8888/info2180-lab4/info2180-ajax-superheroes-master/superheroes.php')
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

