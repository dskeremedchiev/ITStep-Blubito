let myBool;
const tmp1 = Boolean(false);
const tmp2   = new Boolean(false);
// console.log(typeof tmp1);
// console.log(tmp1);

// console.log(typeof tmp2);
// console.log(tmp2);

//myBool = Boolean(tmp2.valueOf());

myBool = !Boolean();

myBool = (5>10 || 0<100);

console.log(typeof myBool);
console.log(myBool);
