export default class Person {
    constructor(personName) {
        this.personName = personName;
    }

    setDateOfBirth(birthYear) {
        this.birthYear = birthYear;
    }

    getDateOfBirth() {
        return this.birthYear;
    }

    age() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    getName() {
        return this.personName;
    }

    description() {
        return this.description = `${this.getName()}, on ${this.age()} aastat vana`;
    }
}

