const bcrypt = require("bcrypt");
const UserRepo = require("../database/repository/user")

async function create(req, res) {
    const { 
        first_name, 
        middle_name,
        last_name, 
        phone_number, 
        email,
        password } = req.body;

    if (
        !first_name || 
        !middle_name ||
        !last_name ||
        !phone_number ||
        !email ||
        !password) {
            res.status(404).send({ "msg": "missing fields" });
    } else {
        // TODO: Hash the password using bycrpt
        const user = UserRepo.create({
            first_name, 
            middle_name,
            last_name, 
            phone_number, 
            email,
            password
        })

        res.status(200).json(user);
    }
}

module.exports = {
    create,
}