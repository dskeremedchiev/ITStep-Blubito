enum Genders{
    M,
    F,
    NA
}

enum Grades{
    GradeEx = 6,
    GradeVG = 5,
    GradeG = 4,
    GradeS = 3,
    GradeP = 2,
}
interface StudentNew {
    name: string;
    age: number;
    courses: string[];
    grades: Grades[];
    gender: Genders;
};

const student:StudentNew = {
    name: "Delyan",
    age: 46,
    courses: ["TypeScript", "JavaScript"],
    grades: [Grades.GradeEx, Grades.GradeVG],
    gender: Genders.M,
}


console.log(student.grades);