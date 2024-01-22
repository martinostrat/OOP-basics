import Person from "./Person.js"
import Student from "./Student.js";
import Course from "./Course.js";
import School from "./School.js";



const school = new School('Kool nr 1');

const student1 = new Student('Priit Aas');
student1.setDateOfBirth(1995);
const student2 = new Student('Kardi Vesi');
student2.setDateOfBirth(2005);

school.addStudent(student1);
school.addStudent(student2);

const course1 = new Course('Math');
const course2 = new Course('Art');

school.addCourse(course1);
school.addCourse(course2);


school.addStudentGrade(student1, course1, 4);
school.addStudentGrade(student1, course2, 5);
school.addStudentGrade(student2, course1, 5);

/* console.log(student1);
console.log(student2); */

const student3 = new Student('Kolmas villu');
student3.setDateOfBirth(2000);

school.addStudent(student3);
school.addStudentGrade(student3, course1, 3);
/* school.addStudentGrade(student3, course2, 1); */

/* console.log(school.getStudents());
console.log(student1.getGrades()) */


console.log(school.getStudents());

console.log(school.getStudentsOrderedByAvgGrade());