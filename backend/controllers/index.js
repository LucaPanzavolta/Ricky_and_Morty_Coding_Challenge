const { getAllCharacters } = require("./getAllCharacters.controller");
const { signUp } = require("./signUp.controller");
const { signIn } = require("./signIn.controller");
const {
  getFavouriteCharacters,
} = require("./getFavouriteCharacters.controller");

module.exports = {
  getAllCharacters,
  signUp,
  signIn,
  getFavouriteCharacters,
};
