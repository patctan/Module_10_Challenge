const Manager = require("../utils/lib/manager");

describe("Manager", () => {
    it("should return the Manager's office number with 'getOfficeNumber()' ", () => {
      const test = "mCarey";
      const manager = new Manager("Mariah",2,"carey@email.com",test,"Manager");
    
      expect(manager.officeNumber).toEqual(test);
    });
    
    it("should return 'Manager' for 'getRole()' ", () => {
      const test = "Manager";
      const manager = new Manager("Mariah", 2, "carey@email.com", test);
    
      expect(manager.getRole()).toEqual(test);
    });
    });