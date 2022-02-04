type Student = {
    name: string;
    age: number;
    courses: string[];
};

interface StudentInterface {
    name: string;
    age: number;
    courses: string[];
};


function printStudent(student:StudentInterface) {
    console.log(student.name);
}

const student3:StudentInterface = {
    name: "Delyan",
    age: 46,
    courses: ["TypeScript", "JavaScript"],
}
//console.log(student1);

printStudent(student3);


interface ExpiriencedStudent extends StudentInterface{
    grades: number[];
}
const student4:ExpiriencedStudent = {
    name: "Niki",
    age: 27,
    courses: ["Java", "TypeScript", "JavaScript", "Angular", "React"],
    grades: [6,6,5],
}

function printStudentNew(student:ExpiriencedStudent) {
    console.log(student.grades);
}
printStudentNew(student4);

type ExpiriencedStudentType = Student & {grades: number[];}
const student5:ExpiriencedStudentType = {
    name: "Niki",
    age: 27,
    courses: ["Java", "TypeScript", "JavaScript", "Angular", "React"],
    grades: [6,6,5],
}



interface NewInterface{
    prop1: string;
}

type NewType = {
    prop1: string;
}
interface NewInterface{
    prop2: number;
}
type NewTypeAdd = {
    prop2: number;
}
type LastNewType = NewType & NewTypeAdd;
function testPrint(arg:LastNewType){
    console.log(arg);
}