const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { logError } = require("../helpers/logError");

const jwtSecret = process.env.JWT_SECRET;

const authenticate = async (req, res, next) => { // eslint-disable-line
  try {
    const authHeaders = req.headers.authorization;
    if (authHeaders) {
      const [authType, token] = authHeaders.split(" ");
      if (authType === "Bearer") {
        const { userId } = await jwt.verify(token, jwtSecret);
        const user = await User.findById(userId, "email favouriteCharacters", {
          lean: true,
        });

        if (!user) throw new Error("Invalid token.");

        req.user = user;
        return next();
      }
      throw new Error(
        "Authentication method not supported. Please use Bearer authentication."
      );
    } else {
      throw new Error("Authentication token not present.");
    }
  } catch (err) {
    logError(err);
    res.status(401).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  authenticate,
};
