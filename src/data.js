const questions = [
  {
    type: "input",
    message: "What is the your team manager's name?",
    name: "Name",
  },

  {
    type: "input",
    message: "Please enter your employee ID.",
    name: "employeeID",
  },

  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",
  },

  {
    type: "input",
    message: "What is your office number?",
    name: "special",
  },

  {
    type: "list",
    message:
      "Do you want to add an engineer, add an intern, or finish building your team?",
    choices: ["Engineer", "Intern", "Finish"],
    name: "extraQuestion",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is the your engineer's name?",
    name: "Name",
  },

  {
    type: "input",
    message: "Please enter your employee ID.",
    name: "employeeID",
  },

  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your GitHub account name",
    name: "special",
  },
  {
    type: "list",
    message:
      "Do you want to add an engineer, add an intern, or finish building your team?",
    choices: ["Engineer", "Intern", "Finish"],
    name: "extraQuestion",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "What is the your intern's name?",
    name: "Name",
  },

  {
    type: "input",
    message: "Please enter your employee ID.",
    name: "employeeID",
  },

  {
    type: "input",
    message: "Please enter your email address.",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your school.",
    name: "special",
  },
  {
    type: "list",
    message:
      "Do you want to add an engineer, add an intern, or finish building your team?",
    choices: ["Engineer", "Intern", "Finish"],
    name: "extraQuestion",
  },
];

module.exports = {
  questions,
  engineerQuestions,
  internQuestions,
};
