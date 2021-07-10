const { getAllCharacters } = require("./getAllCharacters.controller");
const { signUp } = require("./signUp.controller");
const { signIn } = require("./signIn.controller");
const {
  getFavouriteCharacters,
} = require("./getFavouriteCharacters.controller");
const {
  addCharacterToFavourites,
} = require("./addCharacterToFavourites.controller");
const {
  removeCharacterFromFavourites,
} = require("./removeCharacterFromFavourites.controller");

module.exports = {
  getAllCharacters,
  signUp,
  signIn,
  getFavouriteCharacters,
  addCharacterToFavourites,
  removeCharacterFromFavourites,
};
