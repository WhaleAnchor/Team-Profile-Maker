const Engineer = require("../lib/Engineer");

test("Get's github username.", () => {
    const testGithubName = "EngineerGithub";
    const employeeTest = new Engineer("EngineerName", 8, "engineer@gmail.com", testGithubName);
    expect(employeeTest.github).toBe(testGithubName);
});

test("Testing getGithub function will return github.", () => {
    const testGithubName = "JamesLJenks";
    const employeeTest = new Engineer("EngineerName", 8, "engineer@gmail.com", testGithubName);
    expect(employeeTest.getGithub()).toBe(testGithubName);
});

test("Returns engineer role.", () => {
    const returnRole = "Engineer";
    const employeeTest = new Engineer("EngineerName", 8, "engineer@gmail.com", "EngineerGithub");
    expect(employeeTest.getRole()).toBe(returnRole);
});