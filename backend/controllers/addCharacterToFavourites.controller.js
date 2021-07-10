const User = require("../models/user.model");
const { logError } = require("../helpers/logError");

const addCharacterToFavourites = async (req, res) => {
  try {
    const { characterId } = req.params;
    const { user } = req;

    const updatedUserRecord = await User.findByIdAndUpdate(
      user._id, // eslint-disable-line
      { $addToSet: { favouriteCharacters: characterId } },
      { new: true, omitUndefined: true }
    );

    res.status(201).send({
      success: true,
      message: "Favourite charaters list updated correctly.",
      favourites: updatedUserRecord.favouriteCharacters,
    });
  } catch (err) {
    logError(err);
    res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = {
  addCharacterToFavourites,
};
