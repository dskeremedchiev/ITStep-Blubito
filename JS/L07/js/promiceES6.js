const isMomHappy = true;
const willIGetNewPhone = new Promise(
    (resolve, reject) =>{
        if(isMomHappy){
            const phone = {brand: "Samsung", color: "Black"};
            resolve(phone);
        }else{
            const reason = new Error("Mom is not happy");
            reject(reason);
        }
    }
);

// const showOff = function(phone){
//     const mess = `I have new ${phone.brand} phone. Its color is ${phone.color}`;
//     return Promise.resolve(mess);
// }

const showOff = (phone) => {
    const mess = `I have new ${phone.brand} phone. Its color is ${phone.color}`;
    return Promise.resolve(mess);
}

const askMom = function(){
    willIGetNewPhone
        .then(showOff)
        .then((fullfilled)=>console.log(fullfilled))
        .catch((error) => console.log(error));
}

console.log("Before asking Mom");
askMom();
console.log("After asking Mom");
