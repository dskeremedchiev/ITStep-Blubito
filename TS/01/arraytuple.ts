let arr = [1,2,3,];
//let arr = [1,2,3,"strng"]; - error

// console.log(arr);
// console.log(typeof arr);

function printArray(arr: number[]){
    console.log(arr);
}

let myNum = 123;
printArray(arr);
//printArray(myNum); - error


function printTuple(arr:[number, number, string]){
    console.log(arr);
}

let tpl:[number, number, string] = [1,2,"it works"];
printTuple(tpl);
