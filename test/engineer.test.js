const Engineer = require("../utils/lib/engineer");

describe("engineerTest", () => {
    describe("Engineer", () => {
      it("should return the Engineer's github with 'getGithub()' ", () => {
        const test = "mCarey";
        const engineer = new Engineer("Mariah",2,"carey@email.com",test,"Engineer");

        expect(engineer.github).toEqual(test);
      });
    });
    
    describe("canGetRole", () => {
      it("should return 'Engineer' for 'getRole()' ", () => {
        const test = "Engineer";
      const engineer = new Engineer("Mariah", 2, "carey@email.com", test);

      expect(engineer.getRole()).toEqual(test);
    });
  
  });
});