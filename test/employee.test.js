const Employee = require("../utils/lib/employee");

describe("Employee", () => {
  describe("employeeName", () => {
    it("should return the employee's name", () => {
      const str = "Mariah Carey";

      const result = "Mariah Carey";
    });
  });
});

// describe("Algo", () => {
//     describe("reverse", () => {
//       it("should reverse a given string", () => {
//         const str = "Hello World!";
//         const reversed = "!dlroW olleH";

//         const result = new Algo().reverse(str);

//         expect(result).toEqual(reversed);
//       });
//     });

// describe('fizzBuzz', () => {
//     it('should return the number if not a multiple of three or five', () => {
//       expect(fizzBuzz([1])).toBe('1');
//       expect(fizzBuzz([1, 2])).toBe('1, 2');
//     });
