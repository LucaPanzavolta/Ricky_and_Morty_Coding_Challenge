const User = require("../models/user.model");
const { logError } = require("../helpers/logError");

const removeCharacterFromFavourites = async (req, res) => {
  try {
    const { characterId } = req.params;
    const { user } = req;

    const updatedUserRecord = await User.findByIdAndUpdate(
      user._id, // eslint-disable-line
      { $pullAll: { favouriteCharacters: [characterId] } },
      { new: true, omitUndefined: true }
    );

    res.status(200).send({
      success: true,
      message: "Favourite characters list updated correctly.",
      favourites: updatedUserRecord.favouriteCharacters,
    });
  } catch (err) {
    logError(err);
    res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = {
  removeCharacterFromFavourites,
};
