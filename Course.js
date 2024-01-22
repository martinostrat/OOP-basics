import Student from "./Student.js";

export default class Course {
    constructor(courseName) {
        this.courseName = courseName;
        this.courseGrades = [];
    }

    setCourseGrade(opilane, hinne) {
        let grade = { opilane: opilane.personName, hinne: hinne };
        this.courseGrades.push(grade);
    }

    getCourseGrades() {
        return this.courseGrades;
    }

    getAverageCourseGrade() {
        let gradeSum = 0;
        let nrOfGrades = 0;

        for (const entries in this.courseGrades) {
            gradeSum += this.courseGrades[nrOfGrades].hinne;
            nrOfGrades++;
        }

        if (nrOfGrades > 0) {
            return (gradeSum / nrOfGrades);
        } else {
            return -1;
        }
    }

    description() {
        return this.courseName;
    }
}