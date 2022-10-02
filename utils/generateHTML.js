function generateHTML(data) {
  console.log(data, "generateHTML");
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
  <div class="header">
  <h1>My Team</h1>
  </div>

  <div class="card">
  // <p id="placeWhereCardsGo">${iterateThroughArray(data)}</p>
  </div>
      
  
  </body>
  </html>";`;
}

function iterateThroughArray(data) {
  return data.map(generateCard).join();
  
}

function generateCard(data) {
  console.log(data, "generateCard");
  return `
    <div class="card">
    <p> ${data.Name} </p>
    <p> ${data.employeeID}</p>
    <p> ${data.email}</p>
    <p> ${data.special}</p>
    </div>`;
}

module.exports = {
  generateHTML,
  // generateCard,
  // iterateThroughArray,
};

// Event Listener to link github name to github profile
// AddEventListener.querySelector()
