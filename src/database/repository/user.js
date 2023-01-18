const UsersModel = require("../models/user");

class UsersRepo {
    static async create(item) {
        return (await UsersModel.create(item)).toObject();
    }

    static async findById(id) {
        return UsersModel.findOne({ _id: id }).lean().exec();
    }
}

module.exports = UserRepo
