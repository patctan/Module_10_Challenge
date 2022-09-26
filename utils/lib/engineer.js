const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    //Use .filter method to the array of objects to filter out everything but engineer
    console.log(`Github: ${this.github}`);
    return this.github;
  }

  getRole() {
    //overridden to return 'Engineer'
    console.log(`Engineer`);
    return `Engineer`;
  }
}

module.exports = { Engineer };
