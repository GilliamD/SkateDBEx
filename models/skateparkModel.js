const db = require("./conn");

class parks {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.adress = adress;
        this.street = street;
        this.city = city;
        this.state = state;
        this.picture = picture;
    };
    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM parks;`);
            console.log('from getAll', response);
            return response;
        } catch (error) {
            return error.message;
        }
    }


static async getById(id) {
    try {
        const response = await db.one(
            `SELECT * FROM parks WHERE id = $1;`,
            id
        );
        return response;
    } catch (err) {
        return err.message;
        }
    }
}

module.exports = parks;