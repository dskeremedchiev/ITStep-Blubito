//let myStr = "Hello world";
let myStr = 4;
//console.log(typeof myStr);

function add(arg1:number, arg2:number){
	return arg1+arg2;
}


function concatenate(arg1:string, arg2:string){
	return arg1+arg2;
}


let a1 = 3;
let a2 = 5;

let r1 = add(a1, a2);

let a3 = "Hello ";
let a4 = "5";
let r2 = concatenate(a3, a4);
console.log(r2);