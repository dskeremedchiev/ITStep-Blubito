console.log("start");

window.onscroll = function(){
    //console.log(window.scrollY,  window.innerHeight, document.body.offsetHeight);
    if((window.innerHeight + window.scrollY) > (document.body.offsetHeight - 100) ){
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "add.html", true);
        xhr.onload = function(){
            document.body.innerHTML += xhr.responseText;
        }
        xhr.send();
    }

};