const employee = require("./employee");
class manager extends employee {
    constructor (name, ID, email, role) {
        super (name, ID, email);
        this.role = role;
    }
    getGitHub() {
        return this.role;
    }
};

module.exports = manager;