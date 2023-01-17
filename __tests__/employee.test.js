const Employee = require("../library/employee");
const fs = require("fs");

jest.mock("fs");

test("Creates an object under Employee class", () => {
    const employee = new Employee("Ray", 12345, "EngineerRay@FakeEmail.com");
});