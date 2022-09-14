const Manager = require("../lib/Manager");

test("Gets the manager office number.", () => {
    const testOfficeNumber = 1;
    const employeeTest = new Manager("ManagerName", 1, "manager@gmail.com", testOfficeNumber);
    expect(employeeTest.officeNumber).toBe(testOfficeNumber);
});

test("Testing getOfficeNumber() will return inputted office number.", () => {
    const testOfficeNumber = 1;
    const employeeTest = new Manager("ManagerName", 1, "manager@gmail.com", testOfficeNumber);
    expect(employeeTest.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Returns manager role", () => {
    const returnRole = "Manager";
    const employeeTest = new Manager("ManagerName", 1, "manager@gmail.com", 100);
    expect(employeeTest.getRole()).toBe(returnRole);
});