function log(arg: any):void{
    console.log(arg);
}

log("123");
log([1,2,3,4,]);


//let a: string | undefined = undefined;
let a: number | undefined = undefined;
a = 0;
if(a){
    console.log("a is set");
}else{
    console.log("a is NOT set (undefined)");
}

console.log(a);