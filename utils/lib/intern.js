const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    //Use .filter method to the array of objects to filter out everything but engineer
    console.log(`School: ${this.school}`);
    return this.school;
  }

  getRole() {
    console.log(`Intern`);
    return `Intern`;
  }
}

module.exports = Intern;
