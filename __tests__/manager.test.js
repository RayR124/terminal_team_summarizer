const manager = require("../library/manager");
const fs = require("fs");

test("Creates an object under Manager class", () => {
    const manager = new Manager("Ray", 12345, "ManagerRay@FakeEmail.com", "Training and Supervision");
});