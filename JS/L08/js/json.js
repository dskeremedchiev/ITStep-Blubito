// fetch 
// XMLHttpRequest

(async ()=>{
    let result;

    result = await fetch("json-num.json").then( x => x.json());
    result = await fetch("json-string.json").then( x => x.json());
    result = await fetch("json-arr.json").then( x => x.json());
    result = await fetch("json-obj.json").then( x => x.json());



    console.log(typeof result, result);
})();