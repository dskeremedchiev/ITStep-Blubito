let newwindow;
let mylog ;
function openme(){
    newwindow =  window.open("popup.html", "newWindow", 
    "height=200,width=200,scrollbars=0,location=0,status=0,titlebar=0,toolbar=0");
}
function resizeme(){
    newwindow.resizeTo(400,400);
}
function moveme(){
    newwindow.moveTo(200,200);
}
function closeme(){
    newwindow.close();
}

mylog = window.innerWidth;
mylog = window.outerWidth;
mylog = window.innerHeight;
mylog = window.outerHeight;
mylog = window.screenLeft;
mylog = window.screenTop;
mylog = window.history;
mylog = window.location;
//mylog = window.location.replace("http://blubito.de");
mylog = window.navigator;
mylog = window.screen.colorDepth;
mylog = window.screen.width;
mylog = window.screen.height;
mylog = window.screen.availWidth;
mylog = window.screen.availHeight;
mylog = window.screen.pixelDepth;
;





//window.history.pushState({},'', "asfSDFSVAERETRGARVBEARBERethrse.html");
console.log(mylog);