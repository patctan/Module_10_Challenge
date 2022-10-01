const Manager = require("../utils/lib/manager");

describe("Manager", () => {
    it("should return the Manager's office number with 'getOfficeNumber()' ", () => {
      const manager = new Manager("Mariah",2,"carey@email.com",test,"Manager");
      const test = "mCarey";
    
      expect(manager.officeNumber).toEqual(test);
    });
    
    it("should return 'Manager' for 'getRole()' ", () => {
      const manager = new Manager("Mariah", 2, "carey@email.com", test);
      const test = "Manager";
    
      expect(manager.getRole()).toEqual(test);
    });
    });