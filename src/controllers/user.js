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

async function find(req, res) {
    const { 
        first_name, 
        last_name, 
        phone_number } = req.body;


    if (first_name || last_name || phone_number) {
        const user = await UserRepo.find(first_name, last_name, phone_number);

        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).send({ "msg": "failed to fetch user"});    
        }
    } else {
        res.status(404).send({ "msg": "Missing fields"});
    }
}

module.exports = {
    create,
    find
}