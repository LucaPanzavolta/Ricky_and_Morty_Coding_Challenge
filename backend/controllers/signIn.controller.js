const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const { logError } = require("../helpers/logError");

const jwtSecret = process.env.JWT_SECRET;

const arePasswordsMatching = (plainTextPassword, hashedPassword) =>
  bcrypt.compare(plainTextPassword, hashedPassword);

const signIn = async (req, res) => {
  try {
    const { email, password: plainTextPassword } = req.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (
      user &&
      (await arePasswordsMatching(plainTextPassword, user.password))
    ) {
      const token = jwt.sign({ userId: user.id }, jwtSecret, {
        expiresIn: 60 * 60 * 24 * 3,
      }); // 3 days
      res
        .status(200)
        .send({ success: true, message: "Sign-in successfull.", token });
    } else {
      res.status(401).send({
        success: false,
        message: "Sign-in unsuccessfull. Unauthorized.",
      });
    }
  } catch (err) {
    logError(err);
    res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = {
  signIn,
};
