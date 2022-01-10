// ES5:  new Promise(function (resolve, reject) { ... } );
var isMomHappy = false;
// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {brand: 'Samsung', color: 'black' };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }
    }
);


var showOff = function (phone) {
    return new Promise(
        function (resolve, reject) {
            var message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
            resolve(message);
        }
    );
};




var askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
             // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
             // output: 'mom is not happy'
        });
};
askMom();
