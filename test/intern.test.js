const Intern = require("../utils/lib/intern");

describe("Intern", () => {
    it("should return the Intern's school", () => {
        const intern = new Intern("Mariah", 2, "carey@email.com", test);
        const test = "Fantasy";

        expect(intern.school).toEqual(test);
    });

    it("should return 'Intern' for 'getRole()'", () => {
        const intern = new Intern("Mariah", 2, "carey@email.com", test);
        const test = "Intern";

        expect(intern.getRole()).toEqual(test);
    });
})