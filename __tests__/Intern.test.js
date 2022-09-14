const Intern = require("../lib/Intern");

test("Get's the intern's school's name.", () => {
    const testSchoolName = "schoolName";
    const employeeInstance = new Intern("InternName", 9, "intern@gmail.com", testSchoolName);
    expect(employeeInstance.school).toBe(testSchoolName);
});

test("Tests getSchool() to be the inputted school name.", () => {
    const testSchoolName = "schoolName";
    const employeeInstance = new Intern("InternName", 9, "intern@gmail.com", testSchoolName);
    expect(employeeInstance.getSchool()).toBe(testSchoolName);
});

test("Returns intern role.", () => {
    const returnRole = "Intern";
    const employeeInstance = new Intern("InternName", 9, "intern@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnRole);
});