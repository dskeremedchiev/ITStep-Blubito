const myArr = [];
let result;
result = myArr;

myArr[0] = 5;
myArr[4] = "It works";

// const myObj = {}
// result = myObj;

// for(let i = 0; i<myArr.length; i++){
//     console.log(i + " " + myArr[i]);
// }

// for(let val of myArr){
//     console.log(val);
// }
// for(let key in myArr){
//     console.log(key);
// }
myArr.forEach(element => {
    console.log(element);
});

console.log(typeof result);
console.log(Array.isArray(result));

// console.log(parseInt(49.1));
// console.log(parseInt(49.9));
// console.log(Math.floor(49.1));
// console.log(Math.floor(49.9));



const toto = [];
while (toto.length<6){
    let rn = parseInt(Math.random()*49 + 1);
    if(toto.indexOf(rn) === -1){
        toto.push(rn);
    }
}
console.log(toto);
function comparenumbers(a, b){
    console.log(`num1: ${a} num2: ${b} res:${a-b}`);
    return a-b;

    if(a>b){
        return 1;
    }else if(b>a){
        return -1;
    }else{
        return 0;
    }
}


const sortArr = [0, 5, 10, -2, -5];
//sortArr.sort(function(a, b){return b-a});
//sortArr.sort( (a,b) => a-b);
sortArr.sort(comparenumbers);

//console.log(sortArr);


const stringArr = [
    'asdf',
    'gh',
    '1231423',
    '4',
    'uiope',
];

//stringArr.sort( (a,b) => a.length-b.length);
stringArr.sort( function(a,b){
    return a.length-b.length;
});

console.log(stringArr);