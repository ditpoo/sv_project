const UserRepo = require("../src/database/repository/user");


jest.setTimeout(50000)

it("should check setup and pass", () => {
    expect(2 + 2).toEqual(4)
})

const userObject = {
    first_name: "first_name_test",
    last_name: "last_name_test",
    middle_name: "middle_name_test",
    email: "email_test",
    phone_number: "phone_number_test",
    password: "password_test"
}

it("should check creation of user", async () => {
    const user = await UserRepo.create(userObject);

    expect(user).toMatchObject(userObject)
})

it("should check method to find user using first name", async () => {
    const user = await UserRepo.find("first_name_test");

    expect(user).toMatchObject(userObject)
})

it("should check method to find user using last name", async () => {
    const user = await UserRepo.find(null, "last_name_test");

    expect(user).toMatchObject(userObject)
})

it("should check method to find user using  phone numeber", async () => {
    const user = await UserRepo.find(null, null, "phone_number_test");

    expect(user).toMatchObject(userObject)
})