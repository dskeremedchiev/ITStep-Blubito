const peter = {
    firstName: "Peter",
    lastName: "Parker",
    fullname: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.subPrice = function(){
        return 500;
    }
}

Person.prototype.fullname = function(){
    return `${this.firstName} ${this.lastName}`;
} 

Person.prototype.getMarried = function(newLastName){
    this.lastName = newLastName;
}

function Custumer(firstName, lastName, custumerType){
    Person.call(this, firstName, lastName);
    this.custumerType = custumerType;    
}

Custumer.prototype = Object.create(Person.prototype);


const john = new Person("John", "Doe");
const jane = new Person("Jane", "Doe");

// console.log(jane);
// jane.getMarried("Smith");
// console.log(jane);

const johnCustumer = new Custumer("Jake", "Doe", "Regular");
console.log(johnCustumer.fullname());

