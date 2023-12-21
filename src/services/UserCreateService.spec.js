const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("UserCreateService", () => {
  let userRepositoryInMemory = null;
  let userCreateService = null;

  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    userCreateService = new UserCreateService(userRepositoryInMemory);
  });
  it("user should be create", async () => {
    const user = {
      name: "User test",
      email: "user@test.com",
      password: "1234",
    };

    const userCreated = await userCreateService.execute(user);
    expect(userCreated).toHaveProperty("id");
  });

  it("user not should be created with email if email exists", async () => {
    const user1 = {
      name: "User1 test",
      email: "user@test.com",
      password: "123",
    };
    const user2 = {
      name: "User2 test",
      email: "user@test.com",
      password: "123",
    };

    await userCreateService.execute(user1);
    await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este email já está em uso."));
  });
});
