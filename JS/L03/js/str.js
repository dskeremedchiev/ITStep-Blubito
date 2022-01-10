let myStr;

myStr = "Hello world";
myStr = 'Hello world';
myStr = `Hello world`;

// myStr = "Hello
//  world";
myStr = `Hello
 world`;

myStr = '"Hello" said Shenead O\'Conner';

myStr = "Hello \nnewline and \ttabchar";

const myname = "John Doe";
const age = 25;
function greet(){
    return "Hello world";
}

myStr = "Name: " + myname + " Age: " + age;
myStr = `Name: ${myname} Age: ${age} Expression: ${5 + 5} Function:${greet()}`;

//myStr = "\b\f\v";

myStr = "\x61\x62\x63";
myStr = "\u024D";

myStr = 5;

myStr = "Hello world";
myStr[6] = "Q";

myStr = "Здравей свят";
myStr += myStr = "\u0431";

myStr = 'Hello';
myStr = myStr.concat(" ", "world", "!");

// email ivan.petrov@gmail i.van.pet.rov@gmail
// ivanpetrov+random@gmail

myStr = "Name: Ivan, EGN:1234567890, age:35, height:185";
myStr = myStr.replace(/[0-9]{10}/g, "**********");
myStr = myStr.replace(/\b\w/g, "*");


myStr = "piece1 piece2 piece3 piece4 piece5 piece6";

console.log(typeof myStr);
console.log(myStr[myStr.length-1]);
console.log(myStr);




document.body.innerHTML = "<pre>" +  
"NL1:\nEndNL1\nNL2:\rEndNL2\nNL3:\r\nEndNL3\nNL4:\n\rEndNL4\n" + 
"</pre>";

