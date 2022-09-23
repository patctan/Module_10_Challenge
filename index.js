// Your application should use Jest for running the unit tests and Inquirer for collecting input from the user.
//The application will be invoked by using the following command:

// node index.js

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// 1. Install package.json through Integrated terminal in root directory(?)
// 2. Make sure that inquirer and jest are installed as dependencies.

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// 3a. Create a function named generateHTML(data) in generateHTML.js to create an HTML page.
// 3b. Within generateHTML(data), include a template literal(?) of a header with the title of My Team in the header.
// 3c. Create a function named generateCard(data) in generateHTML.js to create template for a card, then insert that function into generateHTML().
// Template for card should look like (subject to change):

// `<div class=card>
//<h1> ${data.name} </h1>
// <h2> ${data.job} </h2>
// <p> ${data.whatever} </p>
// <button class = btn>
// <p> email: ${data.email} </p>
// </div>`

// 3d. Include these classes in the HTML and CSS pages: Employee, Manager, Engineer, and Intern.
// 3e. Put module.exports = generateHTML; at the bottom of generateHTML.js

// 4a. Insert this function into index.js:

//  function writeToFile(data) {
//   fs.writeFile("newHTML.html", data, (err) =>
//   err ? console.error(err) : console.log("Congrats, it worked!")
// );
// }

// async function init() {
//     var userInput = await inquirer.prompt(questions);
//     console.log(promptInput);
//     var formattedHTML = generateHTML(userInput);
//     writeToFile(formattedHTML);
//   }

//   // Function call to initialize app
//   init();

// 4b. Include these at the top of index.js:
// const inquirer = require("inquirer");
// const generateHTML = require("./utils/generateHTML");
// const fs = require("fs")

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// 4c. Include a const questions = [team manager’s name, employee ID, email address, and office number]
// in index.html, with the questions formatted like:

//const questions =
//inquirer.prompt([
// {
// type: "input",
// message: "What is the your team manager's name?",
// name: "managerName",
// },

// {
// type: "input",
// message: "Please enter your employee ID.",
// name: "employeeID",
// },

// {
// type: "input",
// message: "Please enter your email address.",
// name: "email",
// },

// {
// type: "input",
// message: "What is your office number?",
// name: "officeNumber",
// },
//])
// ------------------- USE .WHEN HERE------------------
//.then ((answers => {
//  inquirer.prompt([
//    {
//    type: "list",
//    message: "Do you want to add an engineer, add an intern, or finish building your team?",
//    choices: ['Engineer', 'Intern', 'Finish'],
//    name: "extraQuestion",
//    },
//])
//})

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ----ASK LEARNING ASSISTANT ABOUT THIS----
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// 4d. Include AddEventListener.querySelector()

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.

// The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.

// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

// The other three classes will extend Employee.

// In addition to Employee's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'

// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

// Finally, although it’s not a requirement, you should consider adding validation to ensure that user input provided is in the proper expected format.
