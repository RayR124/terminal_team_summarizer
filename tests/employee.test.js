const employee = require("../library/employee");

test("Creates an object under Employee class", () => {
    const employee = new Employee("Ray", 12345, "EngineerRay@FakeEmail.com");
});

test("Creates a user value for their GitHub", () => {
    const employee = new Employee("Ray", 12345, "EngineerRay@FakeEmail.com",);
});