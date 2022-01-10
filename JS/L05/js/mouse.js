function myclick(e){
    // console.log("Button clicked inline");
    // console.log(e);
}


let myButton = document.getElementsByTagName("button")[0];
myButton.onclick = function(e){
    // console.log("Button clicked with property");
    // console.log(e);
    // console.log(this);
    //this.innerText = "OnCLick text";
}


myButton.addEventListener("click", 
(e)=> {
    // console.log("Button clicked with addEventListener");
    // console.log(e);
    // console.log(e.target);
    e.target.innerText = "Event text";
}, 
false);


let myLink = document.getElementsByTagName("a")[0];
myLink.addEventListener("click",(e)=>{
    console.log("going to google....");
    e.preventDefault();
});

let myNav = document.getElementsByTagName("nav")[0];
let myNavUl = myNav.getElementsByTagName("ul")[0];
let myNavUlLi = myNavUl.getElementsByTagName("li");
myNav.addEventListener("click",(e)=>console.log("NAV"), true);
myNavUl.addEventListener("click",(e)=>{console.log("UL"); e.stopPropagation();}, true);

for( navLink of myNavUlLi){
    navLink.addEventListener("click",(e)=>console.log("LI"));
    let myNavUlLiA = navLink.getElementsByTagName("a")[0];
    myNavUlLiA.addEventListener("click",(e)=>{console.log("A"); e.preventDefault()});
}


