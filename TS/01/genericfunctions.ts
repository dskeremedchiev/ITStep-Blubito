function printFirst(arr: any) {
    console.log(arr[0]);
}

function returnFirst<T>(arr: T[]){
    return arr[0];
}
console.log(returnFirst([1, 2, 3]));
console.log(returnFirst(['a', 'b', 'c']));
console.log(returnFirst([true, false, true]));


function map<In, Out>(arr:In[], func: (arg:In)=> Out,): Out[]{
    return arr.map(func);
}

console.log(map([1,2,3], (n)=>("Number" + String(n))));
