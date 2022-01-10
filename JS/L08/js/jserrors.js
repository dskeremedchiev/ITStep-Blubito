//...

console.log("Before error");

// let a = notExisting();
// execution stoped

try{
    let a = notExisting();
}catch(e){
    console.log(e);
}




try{
    sdvgkadfha
}catch(e){
    console.log(e);
}

console.log("After error2");


function isAdult(name, age){
    if(age<18){
        throw new Error(`${name} is not an adult`);
    }
    return true;
}

let myName = "John Doe";
let myAge = 15;
let canDrink = false;
try{
    canDrink = isAdult(myName, myAge);
}catch(e){
    console.log(e);
}
console.log(canDrink);

let error = true;
try{
    if(error){
        throw new Error("Error occured : Hello world");
    }
    console.log('No error');
}catch(e){
    console.log(e.message);
}finally{
    console.log("Final code");
}


