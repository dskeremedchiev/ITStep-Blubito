let id = Symbol("id");
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    address : {
        city: "Sofia",
        street: "Srebarna",
    },
    dob: function (){
        return new Date();
    },
    [id]: "It works",
}
const newPerson = person;
let copiedPerson;

copiedPerson = {
    ...person
}

copiedPerson = Object.assign({}, person);

//copiedPerson = JSON.parse(JSON.stringify(person));


newPerson.age = 30;
person.firstName = "Jane";
person.address.city = "London";




console.log(person[id]);
console.log(copiedPerson);
