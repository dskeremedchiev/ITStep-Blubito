var name = "John Doe";
console.log(name);

var name = "Jane Doe";
console.log(name);

// firstName - CC
// FirstName - PC
// first_name - SC
// first-name - KC
let firstName = "John";
console.log(firstName);
// let firstName = "Jane"; // дава грешка !
firstName = "Jane";
console.log(firstName);

const lastName = "Doe";
console.log(lastName);
// const lastName = "John"; // дава грешка !
// lastName = "John"; // дава грешка !

const user = {
    name: "John",
    age: 30
};
console.log(user);

user.name = "Jane";
console.log(user);
// user = { name: "Jane", age: 20 };// дава грешка !

//numArray = new Array();
const numArray = [1,2,3,4];
console.log(numArray);
//numArray = [1,2,3,4]; // дава грешка !
numArray[4] = 5;
console.log(numArray);
numArray.push(6);
console.log(numArray);

var newVar;
console.log(newVar);

let newLet;
console.log(newLet);

// const newConst; // дава грешка !

const newUser = {
    firstName: "John",
    age: 30,
    "spaced property" : "It works"
};
newUser.lastName = "Doe";
console.log(newUser);
delete newUser.age;
console.log(newUser);
console.log(newUser["spaced property"]);
newUser["spaced property"] = "New value";
console.log(newUser);


let newArray = [1,2,3,4,5,];
console.log(newArray);

// error naming variables
// let mynew myvar; // използваме интерва
// let 1name = "Test"; // започва с цифра
let $ = "Dollar"; // не е добра практика
console.log($);
let user$name = "Valid name"; //не е добра практика
console.log(user$name); 
let _ = "Underscore"; // не е добра практика
console.log(_);
let _userName = "Underscored name"; // не е добра практика
console.log(_userName);

let myVar = "Var 1";
let copyVar = myVar;
console.log(myVar);
console.log(copyVar);
myVar = "New value";
console.log(myVar);
console.log(copyVar);
copyVar = "Copy value";
console.log(myVar);
console.log(copyVar);



let newObj = { name: "John Doe"};
let copyObj = newObj;
console.log(newObj);
console.log(copyObj);
newObj.name = "Jane Doe";
console.log(newObj);
console.log(copyObj);
copyObj.name = "Kain Doe";
console.log(newObj);
console.log(copyObj);
