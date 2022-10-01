const Employee = require("../utils/lib/employee");

describe("Employee", () => {
  describe("employeeInfo", () => {
    it("should return the employee's name, id, and email if provided valid arguments", () => {
      const employee = new Employee("Mariah", 42, "carey@email.com");

      expect(this.name).toEqual("Mariah");
      expect(this.id).toEqual(42);
      expect(this.email).toEqual("carey@email.com");
    });

    it("should throw an error if no information has been entered", () => {
      const cb = () => new Employee();
      const err =
        "Expected information to be input for the name, id, and email parameters";

      expect(cb).toThrow(err);
    });

    it("should throw an error if an id hasn't been entered", () => {
      const cb = () => new Employee("Mariah");
      const err = new Error("An id hasn't been entered");

      expect(cb).toThrow(err);
    });

    it("should throw an error if 'name' isn't a string", () => {
      const cb = () => new Employee(5, 6, 7);
      const err = new Error("Expected 'name' to be a string");

      expect(cb).toThrow(err);
    });

    it("should throw an error if 'id' is not a number", () => {
      const cb = () => new Employee("Mariah", "Carey", "carey@email.com");
      const err = new Error("Expected 'id' to be a number");

      expect(cb).toThrow(err);
    });

    it("should throw an errror if 'email' is not a string", () => {
      const cb = () => new Employee("Mariah", 42, 53);
      const err = new Error("Expected 'email' to be a string");

      expect(cb).toThrow(err);
    });
  });
});

// it("should throw an error if provided no arguments", () => {
//     const cb = () => new Child();

//     expect(cb).toThrow();
//   });

//   it("should throw an error if not provided an age", () => {
//     const cb = () => new Child("Sarah");
//     const err = new Error("Expected parameter 'age' to be a non-negative number");

//     expect(cb).toThrowError(err);
//   });

//   it("should throw an error if 'name' is not a string", () => {
//     const cb = () => new Child(3, 2);
//     const err = new Error("Expected parameter 'name' to be a non-empty string");

//     expect(cb).toThrowError(err);
//   });

//   it("should throw an error if 'age' is not a number", () => {
//     const cb = () => new Child("Sarah", "2");
//     const err = new Error("Expected parameter 'age' to be a non-negative number");

//     expect(cb).toThrowError(err);
//   });

//   it("should throw an error if 'age' is less than 0", () => {
//     const cb = () => new Child("Sarah", -1);
//     const err = new Error("Expected parameter 'age' to be a non-negative number");

//     expect(cb).toThrowError(err);
