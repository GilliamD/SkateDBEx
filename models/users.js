const db = require("./conn");

class user {
    constructor(first_name = last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    async login() {
        console.log("this is this login method", this.email);
    }

    async save() {
        console.log("this is the save method", this.email);
    }
}

module.exports = user