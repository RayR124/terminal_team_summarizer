const engineer = require("../library/engineer");
const fs = require("fs");

test("Creates an object under Engineer class", () => {
    const engineer = new Engineer("Ray", 12345, "EngineerRay@FakeEmail.com", "RayR124");
});