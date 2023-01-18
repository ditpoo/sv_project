const { model, Schema } = require("mongoose");

const schema = new Schema(
    {
        first_name: String,
        last_name: String,
        middle_name: String,
        email: String,
        phone_number: String,
        password: String,
    },
    { timestamps: { createdAt: true, updatedAt: true } },
);

const User = model("User", schema);

module.exports = User;
