const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const { logError } = require("../helpers/logError");

const saltRounds = 10;

const signUp = async (req, res) => {
  try {
    const { email, password: plainTextPassword } = req.body;

    const isEmailAlreadyAssociatedWithAccount = await User.findOne({ email });

    if (isEmailAlreadyAssociatedWithAccount) {
      res.status(403).send({
        success: false,
        message:
          "This email address is already associated with an account. Please login.",
      });
    } else {
      await new User({
        email: email.toLowerCase(),
        password: await bcrypt.hash(plainTextPassword, saltRounds),
      }).save();

      res.status(200).send({ success: true, message: "Signup successfull." });
    }
  } catch (err) {
    logError(err);
    res.status(500).send({ success: false, message: err.message });
  }
};

module.exports = {
  signUp,
};
