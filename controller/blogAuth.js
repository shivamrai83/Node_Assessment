const { userTable } = require("../database/db");
const md5 = require("md5");
const passport = require("passport");
const { generateToken, filterUser } = require("../utility/token");

function blogAuthentication(app) {
  app.post("/auth/login", async function (request, response) {
    const { userName, password } = request.body;
    const userBlog = await userTable.findOne({ where: { userName } });
    if (!userBlog || userBlog.password !== md5(password)) {
      response
        .status(401)
        .send({ message: "username or password one of them may be wrong" });
    }
    const token = generateToken(filterUser(userBlog));
    response
      .status(200)
      .send({ token_value: token, userContent: filterUser(userBlog) });
  });

  app.post("/auth/singup", async function (request, response) {
    const { name, userName, password } = request.body;
    const createdUser = await userTable.create({
      name,
      userName,
      password: md5(password),
    });
    createdUser.save();
    const token = generateToken(
      filterUser(JSON.parse(JSON.stringify(createdUser)))
    );
    response
      .status(201)
      .send({
        token_value: token,
        userContent: filterUser(JSON.parse(JSON.stringify(createdUser))),
      });
  });
}

module.exports = {
  blogAuthentication,
};
