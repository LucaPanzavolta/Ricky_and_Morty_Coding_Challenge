const mongoose = require("mongoose");

const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // eslint-disable-line
  return regex.test(email);
};

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validateEmail,
      message: (props) => `${props.value} is not a valid email address.`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  favouriteCharacters: {
    type: [Number],
    default: [],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
