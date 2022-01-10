let i=0;
let myTime = setTimeout(()=>console.log('Timout 1: 3 sec'), 3000);
setTimeout(()=>console.log('Timout 2: 2 sec'), 3000);

clearTimeout(myTime);

//let myInterval = setInterval(()=> console.log(`I is:${i++}`),300);

if(i>100){
    clearInterval(myInterval);
}
console.log(i);
