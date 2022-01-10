let newElement = document.createElement("ol");

for(let i=0; i<5; i++){
    let newLi = document.createElement("li");
    let newText = document.createTextNode("Element " + i);
    newLi.appendChild(newText);
    newElement.appendChild(newLi);
    document.body.appendChild(newText);
}

document.body.appendChild(newElement);

let newElement2 = document.createElement("ol");
for(let i=0; i<5; i++){
    let newLi = document.createElement("li");
    newLi.textContent = "Text Element " + i;
    newElement2.appendChild(newLi);
}
document.body.appendChild(newElement2);

let newElement1 = document.createElement("ol");
let myText = "";
for(let i=0; i<5; i++){
    myText += "<li>" + "New Element " + i + "</li>";

}
newElement1.innerHTML = myText;
document.body.appendChild(newElement1);


