const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  //   const justTheManagerArray = resultsArray.filter()
  getRole(data) {
    //Use .filter method to the array of objects to filter out everything but manager
    console.log(`Manager`);
    return `Manager`;
  }
}

module.exports = { Manager };
