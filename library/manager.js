const employee = require("./employee");
class manager extends employee {
    constructor (name, ID, email, role) {
        super (name, ID, email);
        this.role = role;
    }
    getGitHub() {
        return this.role;
    }
    getPosition() {
        return "Manager";
    }
};

module.exports = manager;