const xhr = new XMLHttpRequest();
console.log(xhr.readyState);
// xhr.open("GET", "content.txt", false);
// xhr.send();
// document.getElementById('content').innerHTML = xhr.responseText;
xhr.open("GET", "content.txt", true);
console.log(xhr.readyState);

// xhr.onload = function(){
//     console.log(this.readyState);
//     document.getElementById('content').innerHTML = 
//     this.responseText;
// }
xhr.onreadystatechange = function (){
    console.log("Listener", this.readyState);
    if(this.readyState===4 && this.status===200){
        document.getElementById('content').innerHTML =
        this.responseText;
    }
}

xhr.send();



