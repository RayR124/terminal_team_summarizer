const employee = require("./employee");
class intern extends employee {
    constructor (name, ID, email, training) {
        super (name, ID, email);
        this.training = training;
    }
    getTraining() {
        return this.training;
    }
    getPosition() {
        return "Intern";
    }
};

module.exports = intern;