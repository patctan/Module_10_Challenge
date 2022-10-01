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
  <p id="placeWhereCardsGo"></p>
  </div>
      
  
  </body>
  </html>";`;
}

function iterateThroughArray() {
  let cardsMadeFromArray = "";
  resultsArray.forEach(generateCard);
  document.getElementById("placeWhereCardsGo").innerHTML = cardsMadeFromArray;
}

function generateCard(data) {
  console.log(data, "generateCard");
  return `
    <div class="card">
    <p>`;
}

module.exports = {
  generateHTML,
  generateCard,
};

// Event Listener to link github name to github profile
// AddEventListener.querySelector()
