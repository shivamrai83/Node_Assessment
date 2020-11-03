const { Sequelize, DataTypes } = require("sequelize");

const dbs = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "blogdb",
 
});

const blogTable = require("./models/blog")(dbs);
const userTable = require("./models/user")(dbs);
const bookmarkTable=require("./models/bookmarkBlog")(dbs);

const initalise = async function () {
  try {
    await dbs.authenticate();
    await dbs.sync({ alter: true });
  } catch (error) {
    console.log("Here is the Error->",error);
  }
};

module.exports = {
  initalise,
  blogTable,
  dbs,
  userTable,
  bookmarkTable,
};