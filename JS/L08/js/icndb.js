(async ()=>{
    const joke1 = await fetch('http://api.icndb.com/jokes/random').then(x=>x.json());
    //console.log(joke1);
    document.getElementById('theJoke1').innerHTML = 
    `<b>id:${joke1.value.id}</b> ${joke1.value.joke}`;
})();


const xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.icndb.com/jokes/random?firstName=John&lastName=Doe");
xhr.onload = function(){
    const joke2 = JSON.parse(this.responseText);
    document.getElementById('theJoke2').innerHTML = 
    `<b>id:${joke2.value.id}</b> ${joke2.value.joke}`;
}
xhr.send();



// const xhr1 = new XMLHttpRequest();
// xhr1.open("GET", "http://kabinata.com/wp/2016js/corstest.php");
// xhr1.onload = function(){
//     console.log(JSON.parse(this.responseText));
// }
// xhr1.send();

(async ()=>{
    const test1 = await fetch('http://kabinata.com/wp/2016js/corstest.php').then(x=>x.json());
    console.log(test1);

})();