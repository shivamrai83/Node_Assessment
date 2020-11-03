const { request } = require("express");
const jwt = require("jsonwebtoken");

const KEY = "jfkldsjfklsdfklsdjfklsdjf";

function generateToken(payload) {
  return jwt.sign(payload, KEY);
}

function filterUser(user) {
  const { password, ...restUser } = JSON.parse(JSON.stringify(user));
  return restUser;
}

module.exports = {
  KEY,
  generateToken,
  filterUser,
};
