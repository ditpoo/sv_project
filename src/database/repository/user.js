const User = require("../models/user");

class UserRepo {
    static async create(item) {
        return (await User.create(item)).toObject();
    }

    static async findById(id) {
        return User.findOne({ _id: id }).lean().exec();
    }

    static async find(first_name, last_name, phone_number) {
        if (first_name || !last_name && !phone_number) {
            return await User.findOne({ first_name: first_name.toString() }).lean().exec();
        }

        if (last_name || !first_name && !phone_number) {
            return User.findOne({ last_name: last_name.toString() }).lean().exec();   
        }

        if (phone_number || !first_name && !last_name) {
            return User.findOne({ phone_number: phone_number.toString() }).lean().exec();   
        }
    }
}

module.exports = UserRepo;
