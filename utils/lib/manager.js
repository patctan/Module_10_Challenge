const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.title;
  }
}

//Check activity 26
//   const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }

// const justTheManagerArray = resultsArray.filter(),

// getRole(data) {
//   //Use .filter method to the array of objects to filter out everything but manager
//   console.log(`Manager`);
//   return ;
// }

module.exports = { Manager, getRole };
