const engineer = require("../library/engineer");

test("Creates an object under Engineer class", () => {
    const engineer = new engineer("Ray", 12345, "EngineerRay@FakeEmail.com");
});

test("Creates a user value for their GitHub", () => {
    const engineer = new engineer("Ray", 12345, "EngineerRay@FakeEmail.com", "RayR124");
});