const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_CONNECTION_STRING;

module.exports = () =>
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
