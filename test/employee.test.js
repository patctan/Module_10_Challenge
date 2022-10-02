const Employee = require("../utils/lib/employee");

describe("Employee", () => {
  describe("employeeInfo", () => {
    it("should return the employee's name, id, and email if provided valid arguments", () => {
      const employee = new Employee("Mariah", 42, "carey@email.com");

      expect(employee.name).toEqual("Mariah");
      expect(employee.id).toEqual(42);
      expect(employee.email).toEqual("carey@email.com");
    });

    it("should return 'Employee' for 'getRole()' ", () => {
      const test = "Employee";
      const employee = new Employee("Mariah", 2, "carey@email.com", test);
    
      expect(employee.getRole()).toEqual(test);

    });
  });
});