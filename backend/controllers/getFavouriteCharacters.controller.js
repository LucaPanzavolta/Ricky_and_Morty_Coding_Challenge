const User = require("../models/user.model");
const { logError } = require("../helpers/logError");

const getFavouriteCharacters = async (req, res) => {
  try {
    const { user } = req;
    const userRecord = await User.findById(user._id); // eslint-disable-line

    res
      .status(200)
      .send({ success: true, favourites: userRecord.favouriteCharacters });
  } catch (err) {
    logError(err);
    res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = {
  getFavouriteCharacters,
};
