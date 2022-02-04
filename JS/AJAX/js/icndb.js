const newName = "firstName=John&lastName=Doe"
const xhr = new XMLHttpRequest();
xhr.open("GET", `http://api.icndb.com/jokes/random?${newName}`, true);
xhr.onload = function(){
    let response = JSON.parse(this.responseText);
    document.getElementById('theJoke1').innerHTML = 
    response.value.joke;
}
xhr.send();

// fech works with promices

fetch('https://news.nbu.bg/bg/news/konkurs-za-studentski-trud-i-stazh-esenen-semestyr-2021-2022-g!57197')
  .then(response => response.json())
  .then(data => {
      document.getElementById('theJoke2').innerHTML = 
      data.value.joke;}
  ).catch(()=>alert('Unable to load data'));