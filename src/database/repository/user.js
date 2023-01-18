const UsersModel = require("../models/user");

class UserRepo {
    static async create(item) {
        return (await UsersModel.create(item)).toObject();
    }

    static async findById(id) {
        return UsersModel.findOne({ _id: id }).lean().exec();
    }

    static async find(first_name, last_name, phone_number) {
        if (first_name && !last_name && !phone_number) {
            return UsersModel.findOne({ first_name: first_name.toString() }).lean().exec();
        }

        if (last_name && !first_name && !phone_number) {
            return UsersModel.findOne({ last_name: last_name.toString() }).lean().exec();   
        }

        if (phone_number && !first_name && !last_name) {
            return UsersModel.findOne({ phone_number: phone_number.toString() }).lean().exec();   
        }
    }
}

module.exports = UserRepo;
