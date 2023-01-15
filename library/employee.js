class employee {
    constructor (name, ID, email) {
        this.name = name;
        this.ID = ID;
        this.email = email
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.ID;
    }
    getEmail() {
        return this.email;
    }
    getPosition() {
        return "Employee";
    }
};

module.exports = employee;