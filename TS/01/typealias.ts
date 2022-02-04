type CanAdd = number | string;

function add(arg1:CanAdd, arg2: CanAdd) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    }
    return ;
}

let b1: CanAdd = 3;
let b2: CanAdd = 5;
let b3: CanAdd = 'Hello';
let b4: CanAdd = " World";

console.log(add(b1,b2));
console.log(add(b3,b4));
console.log(add(b1,b4));