// Synchronous request - Depricated
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "content.txt", false);
// xhr.send();
// console.log(xhr.responseText);


const xhr = new XMLHttpRequest();
//console.log(xhr.readyState);

xhr.open("GET", "content.txt", true);
//console.log(xhr.readyState);

xhr.onreadystatechange = function(){
    //console.log(this.readyState);
    if(this.readyState === 4 && this.status === 200){
        //console.log("Resonse", this.responseText);
        document.getElementById("content").innerHTML = this.responseText;
    }
}

xhr.send();
