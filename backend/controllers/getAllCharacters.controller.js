const axios = require("axios");
const { rickyAndMortyApiUrls } = require("../constants/rickyAndMortyApiUrls");
const { logError } = require("../helpers/logError");

const getAllCharacters = async (req, res) => {
  try {
    const { data: characters } = await axios({
      method: "get",
      baseUrl: rickyAndMortyApiUrls.baseUrl,
      url: rickyAndMortyApiUrls.getAllCharacters,
      responseType: "json",
    });

    res.status(200).send(characters.results);
  } catch (err) {
    logError(err);
    res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = {
  getAllCharacters,
};
