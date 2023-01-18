const { model, Schema } = require("mongoose");

const schema = new Schema(
    {
        first_name: string,
        last_name: string,
        middle_name: string,
        email: string,
        phone_number: string,
        password: string,
    },
    { timestamps: { createdAt: true, updatedAt: true } },
);

const UsersModel = model('User', schema);

module.exports = UsersModel;
