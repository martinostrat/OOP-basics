import Person from "./Person.js";

export default class Student extends Person {
    constructor(studentName) {
        super(studentName);
        this.studentId = null;
        this.grades = [];
    }

    setDateOfBirth(dob) {
        super.setDateOfBirth(dob);
    }


    setId() {
        let uniqueInt = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        if (this.studentId === null) {
            this.studentId = uniqueInt;
        }
    }

    getId() {
        return this.studentId;
    }

    setGrade(kursus, hinne) {
        let grade = { kursus: kursus.courseName, hinne: hinne };
        this.grades.push(grade);
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        let gradeSum = 0;
        let nrOfGrades = 0;

        for (const entries in this.grades) {
            gradeSum += this.grades[nrOfGrades].hinne;
            nrOfGrades++;
        }

        if (nrOfGrades > 0) {
            return (gradeSum / nrOfGrades);
        } else {
            return -1;
        }
    }

    description() {
        return this.description = `${this.getName()}, on õpilane`;
    }

}

