
document.getElementById("myButton").addEventListener("click", getContent);


function getContent(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "content.txt", true);
    xhr.onload = function(){
        console.log(this.readyState);
        document.getElementById("content").innerHTML = this.responseText;

    }
    xhr.send();
}

