const Intern = require("../utils/lib/intern");

describe("Intern", () => {
    it("should return the Intern's school", () => {
        const test = "Fantasy";
        const intern = new Intern("Mariah", 2, "carey@email.com", test);

        expect(intern.school).toEqual(test);
    });

    it("should return 'Intern' for 'getRole()'", () => {
        const test = "Intern";
        const intern = new Intern("Mariah", 2, "carey@email.com", test);

        expect(intern.getRole()).toEqual(test);
    });
});