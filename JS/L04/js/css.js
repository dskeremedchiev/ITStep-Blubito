let myH1 = document.getElementsByTagName("h1")[0]
myH1.style.color = "red";
myH1.style.backgroundColor = "yellow"; // background-color


myH1.style.cssText = "color: green; background-color: #ddd";
myH1.style.cssText = "";

myH1.classList.add("myClass");


let newH1 = document.getElementsByTagName("h1")[1];
document.body.prepend(newH1);