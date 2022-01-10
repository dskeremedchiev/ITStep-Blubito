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

async function showOff(phone) {
    return  new Promise(
        (resolve) =>{
            const mess = `I have new ${phone.brand} phone. Its color is ${phone.color}`;
            resolve(mess);
        }
    )
}


async function askMom() {
    try{
        console.log("Before asking Mom");
        let phone = await willIGetNewPhone;
        let message = await showOff(phone);
        console.log(message);
        console.log("After asking Mom");
    }
    catch (error){
        console.log(error.message);
    }
}

(async ()=> await askMom())();