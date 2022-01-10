let myUl = document.getElementsByTagName("ul")[0];
let ulChilds = myUl.children;
console.log("Ul1 child 1", ulChilds[0]);

console.log("Ul1 child 1 Inner html", ulChilds[0].innerHTML);
console.log("Ul1 child 1 Text Content", ulChilds[0].textContent.trim());




myUl = document.getElementsByTagName("ul")[1];
ulChilds = myUl.children;
console.log("Ul2 child 1", ulChilds[0]);



