const student1 = {
    name: "Delyan",
    age: 46,
    courses: ["TypeScript", "JavaScript"]
}

//console.log(student1);

const student2 = {
    name: "Niki",
    age: 27,
    courses: ["Java", "TypeScript", "JavaScript", "Angular", "React"]
}

function printStudent(student: {
    name: string;
    age: number;
    courses: string[]
}) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.courses)
}

printStudent(student2);