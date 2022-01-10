const n1 = '5.3asd';
const n2 = "3";
let result;

result = parseInt(n1)+Number(n2);

const a = Infinity;
const b = a*a;

// if(a == b){
//     console.log('OK');
// }else{
//     console.log('NOK');

// }
result = 1e309;

result = 9999999999999999;

result = Math.floor( (0.1+0.7)*10 );

let i = 0;
// while (i != 10) {
//   i += 0.2;
//   console.log(i);

//   if(i>11){
//       break;
//   }
// }


result = 5 + - 3;
result = 5 + - "3";
result = 5 + "- 3";
result = 5 + "-3";
result = 5 - + 3;
result = 5 - + "3";
result = 5 - "+ 3";
result = 5 - "+3";
result = "5" - "+3";

result = [] + 0;
result = [] + [];
result = {} + 0;
result = {} + [];
//result = [] + {};




console.log(result);
console.log(typeof result);