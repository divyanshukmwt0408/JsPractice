function getjokes () {
    const selected = document.getElementById("category").value;
    let jokediv = document.getElementById("joke");

fetch(`https://v2.jokeapi.dev/joke/${selected}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    jokediv.innerHTML = data.joke ? data.joke : `${data.setup} <br> ${data.delivery}` 
  })
  .catch(error => {
    console.error("Error fetching joke:", error);
  });
}
