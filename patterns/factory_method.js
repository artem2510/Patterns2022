// Factory Method - створює об'єкти, не вказуючи точний клас, який потрібно створити.

class Developer {
    constructor(name) {
        this.name = name;
    }
    say() { return `I am ${this.name}, a Developer.`; }
}

class Tester {
    constructor(name) {
        this.name = name;
    }
    say() { return `I am ${this.name}, a Tester.`; }
}

class EmployeeFactory {
    createEmployee(type, name) {
        switch (type) {
            case 'developer':
                return new Developer(name);
            case 'tester':
                return new Tester(name);
            default:
                throw new Error(`Unknown employee type: ${type}`);
        }
    }
}

export const employeeFactory = new EmployeeFactory();