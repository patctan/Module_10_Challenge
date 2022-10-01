const Engineer = require("../utils/lib/engineer");

describe("Engineer", () => {
it("should return the Engineer's github with 'getGithub()' ", () => {
  const engineer = new Engineer("Mariah",2,"carey@email.com",test,"Engineer");
  const test = "mCarey";

  expect(engineer.github).toEqual(test);
});

it("should return 'Engineer' for 'getRole()' ", () => {
  const engineer = new Engineer("Mariah", 2, "carey@email.com", test);
  const test = "Engineer";

  expect(engineer.getRole()).toEqual(test);
});
});
