import Course from "./Course.js";

export default class School {
    constructor(schoolName) {
        this.schoolName = schoolName;
        this.opilased = [];
        this.kursused = [];
    }

    addCourse(course) {
        let newCourse = true;
        // Checks if course already exists
        this.kursused.forEach(kursus => {
            if (course.courseName == kursus.kursus) {
                return newCourse = false;
            }
        })
        // If course does not exist -> adds new course to kursused[]
        if (newCourse === true) {
            let kursus = { kursus: course.courseName };
            this.kursused.push(kursus);
        } else {
            console.log('This course already exists');
        }
    }

    addStudent(student) {
        let newStudent = true;
        if ((student.age() > 7) && (student.age() < 38)) {
            this.opilased.forEach(opilane => {
                if (student.getId() == opilane.id) {
                    return newStudent = false;
                }
            });
            if (newStudent === true) {
                student.setId();
                let opilane = { opilane: student.getName(), id: student.getId(), keskmineHinne: 0 };
                this.opilased.push(opilane);
            } else {
                console.log('This student is already in this school');
            }
        }
    }

    addStudentGrade(student, course, grade) {
        let newStudent = true;
        let newCourse = true;

        this.opilased.forEach((opilane) => {
            if (student.personName == opilane.opilane) {
                return newStudent = false;
            }
        })

        this.kursused.forEach(kursus => {
            if (course.courseName == kursus.kursus) {
                return newCourse = false;
            }
        })

        if ((newStudent === false) && (newCourse === false)) {
            student.setGrade(course, grade);
            course.setCourseGrade(student, grade);

            this.opilased.forEach(opilane => {
                if (opilane.opilane == student.getName()) {
                    opilane.keskmineHinne = student.getAverageGrade();
                }
            })
        } else {
            console.log('Student / Course not found');
        }
    }

    getStudents() {
        return this.opilased;
    }

    getCourses() {
        return this.kursused;
    }

    getStudentsOrderedByAvgGrade() {
        return this.opilased.sort((a, b) => b.keskmineHinne - a.keskmineHinne);
    }


}

/* getStudentsOrderedByAvgGrade() {
    let studentsWithAvgGrades = [];

    this.opilased.forEach((opilane) => {
        let nimi = opilane.opilane;
        let avgGrade = opilane.getAverageGrade();

        studentsWithAvgGrades.push({ name: nimi, averageGrade: avgGrade })
    });

    console.log(studentsWithAvgGrades);
} */
