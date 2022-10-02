const inquirer = require("inquirer");
const { generateHTML, generateCard } = require("./utils/generateHTML");
const fs = require("fs");
const { questions, engineerQuestions, internQuestions } = require("./src/data");
const Employee = require("./utils/lib/employee");
const Manager = require("./utils/lib/manager");
const Engineer = require("./utils/lib/engineer");
const Intern = require("./utils/lib/intern");

//Creates html file
function writeToFile(data) {
  fs.writeFile("newHTML.html", data, (err) =>
    err ? console.error(err) : console.log("Congrats, it worked!")
  );
}

//Goes through questions and turns answers into an array
async function init() {
  var resultsArray = [];
  var userInput = await inquirer.prompt(questions);
  resultsArray.push(userInput);
  while (userInput.extraQuestion !== "Finish") {
    var thisIsAVariable =
      userInput.extraQuestion === "Engineer"
        ? engineerQuestions
        : internQuestions;
    userInput = await inquirer.prompt(thisIsAVariable);
    resultsArray.push(userInput);
    console.log(resultsArray);
  }

  //Adds data from answers to html file
  var formattedHTML = generateHTML(resultsArray);
  writeToFile(formattedHTML);
}

init();

