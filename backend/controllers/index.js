const { getAllCharacters } = require("./getAllCharacters.controller");
const { signUp } = require("./signUp.controller");
const { signIn } = require("./signIn.controller");

module.exports = {
  getAllCharacters,
  signUp,
  signIn,
};
