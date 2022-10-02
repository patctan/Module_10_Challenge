function generateHTML(data) {
  console.log(data, "generateHTML");
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="./dist/style.css" />
      <title>My Team</title>
  </head>
  <body>
  <div class="header">
  <h1>My Team</h1>
  </div>

  <div class="flex">
  ${iterateThroughArray(data)}
  </div>
      
  
  </body>
  </html>"`;
}

function iterateThroughArray(data) {
  return data.map(generateCard).join();
  
}

function generateCard(data) {
  console.log(data, "generateCard");
  return `
    <div class="card">
    <div class="container">
    <h2> Name: ${data.Name} </h2>
    <h3> Employee ID: ${data.employeeID}<h3>
    <h4> Email: ${data.email}</h4>
    <h5> ${data.special}</h5>
    <div>
    </div>`
}

module.exports = {
  generateHTML,
};
