function generateHTML() {
  return "";
}

function generateCard(data) {
  return `<div class = card>
    <h1> ${data.managerName} </h1>
    <h2> ${data.employeeID} </h2>
    <p> ${data.email} </p>
    <p> ${data.officeNumber}</p>`;
}

module.exports = {
  generateHTML,
  generateCard,
};

// Event Listener to link github name to github profile
// AddEventListener.querySelector()
