interface student{
    student_name:string,
    student_age:number
}
interface collage{
    clg_name:string,
    courses:string[],
}
interface teacher{
    teacher_name:string,
    teacher_age:number,
    department:string
}

type intersection = student&collage&teacher

let student1:intersection = {
student_name:"Anuja",
student_age:22,
clg_name:"SVVV",
courses:["CS","AI","DS"],
teacher_name:"xyz",
teacher_age:40,
department:"AI",


}
console.log(student1);
console.log(student1.student_name);
console.log(typeof student1);

// key of operatior in ts

type studentKey = keyof student;
// console.log(studentKey);