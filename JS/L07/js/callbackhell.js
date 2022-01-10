// http://kabinata.com/wp/2016js/service.php?num1=3&num2=5
// sum 1-10

// ES5 
const addAsync = function(num1, num2, callback){
    const xhr = new XMLHttpRequest();
    const url = `http://kabinata.com/wp/2016js/service.php?num1=${num1}&num2=${num2}`;
    xhr.open("GET", url, true);
    xhr.onload =function(){
        callback(this.responseText);
    }
    xhr.send();

}

addAsync(1, 2, function(success){
    const res1 = JSON.parse(success);
    const result1 = res1.result;
    console.log(result1);
    addAsync(result1, 3, function(success){
        const res2 = JSON.parse(success);
        const result2 = res2.result;
        console.log(result2);
        addAsync(result2, 4, function(success){
            const res3 = JSON.parse(success);
            const result3 = res3.result;
            console.log(result3);
            addAsync(result3, 5, function(success){
                const res4 = JSON.parse(success);
                const result4 = res4.result;
                console.log(result4);
            });
        });
    });
});

//ES7 Style
async function addAsyncNew(num1, num2){
    return fetch(`http://kabinata.com/wp/2016js/service.php?num1=${num1}&num2=${num2}`).then(x=>x.json())
}

(async ()=>{
    let result = 1;
    for(i=2; i<=10; i++){
        const res = await addAsyncNew(result,i);
        console.log("Awaited", res.result);
        result = res.result;
    }

})();