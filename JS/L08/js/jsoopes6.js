class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
}

class Custumer extends Person{
    constructor(firstName, lastName, custumerType) {
        super(firstName, lastName);
        this.custumerType = custumerType;
    }

}

// class ReactStyle extends ReactComponent{
//     super(props);
//     constructor(props){
//         super(props);
//     }
// }




const john = new Person("John", "Doe");

const johnCustumer = new Custumer("Johnn", "Doee", "Regular")
console.log(johnCustumer.fullname());


function testFunction(){
    return "It works";
}

console.log(testFunction());

function testFunction(){
    return "I am new version";
}

console.log(testFunction());


class MyNameSpace{
    static testFunction(){
        this.whatever = "something";
        return "It works";
    }
}
console.log(MyNameSpace.whatever);
console.log(MyNameSpace.testFunction());
console.log(MyNameSpace);