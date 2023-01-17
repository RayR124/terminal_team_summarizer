const Intern = require("../library/intern");
const fs = require("fs");

test("Creates an object under Intern class", () => {
    const intern = new Intern("Ray", 12345, "InternRay@FakeEmail.com", "UC Berkeley Extension Coding BootCamp");
});