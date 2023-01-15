const employee = require("./employee");
class engineer extends employee {
    constructor (name, ID, email, gitHub) {
        super (name, ID, email);
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
    getPosition() {
        return "Engineer";
    }

};

module.exports = engineer;