const Employee = require("../lib/Employee");

test("Creates an employee object.", () => {
    const employeeTest = new Employee();
    expect(typeof(employeeTest)).toBe("object");
})

test("Displays the employee's name.", () => {
    const name = "Employee1";
    const employeeTest = new Employee(name);
    expect(employeeTest.name).toBe(name);
})

test("Displays the employee's id.", () => {
    const id = 1001;
    const employeeTest = new Employee("Employee1", id);
    expect(employeeTest.id).toBe(id);
})

test("Displays the employee's email.", () => {
    const email = "example@gmail.com";
    const employeeTest = new Employee("Employee1", 1001, email);
    expect(employeeTest.email).toBe(email);
})



test("Displays name when calling getName method.", () => {
    const testName = "Employee1";
    const employeeTest = new Employee(testName);
    expect(employeeTest.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 1001;
    const employeeTest = new Employee("Employee1", testID);
    expect(employeeTest.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "example@gmail.com";
    const employeeTest = new Employee("Employee1", 1001, testEmail);
    expect(employeeTest.getEmail()).toBe(testEmail);
})

test("Returns Employee for getRole().", () => {
    const returnRole = "Employee";
    const employeeTest = new Employee("Employee1", 1001, "example@gmail.com");
    expect(employeeTest.getRole()).toBe(returnRole);
})
